import React, { useState, useMemo } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { SearchDiscovery } from './components/SearchDiscovery';
import { CategoryGrid } from './components/CategoryGrid';
import { HowItWorks } from './components/HowItWorks';
import { FeaturedProviders } from './components/FeaturedProviders';
import { WhyChooseUs } from './components/WhyChooseUs';
import { CustomerCTA } from './components/CustomerCTA';
import { ProviderCTA } from './components/ProviderCTA';
import { Footer } from './components/Footer';
import { ProjectEnquiryModal } from './components/ProjectEnquiryModal';
import { ProviderModal } from './components/ProviderModal';
import { ProviderDetailModal } from './components/ProviderDetailModal';
import { AuthModal } from './components/AuthModal';
import { LegalModal } from './components/LegalModal';
import { LaunchAuthGate } from './components/LaunchAuthGate';
import { FEATURED_PROVIDERS, Provider } from './data/mockData';
import { UserSession } from './types/auth';
import { Sparkles, X, ShieldCheck } from 'lucide-react';

export default function App() {
  // Authentication & Session State (First User Entry)
  const [userSession, setUserSession] = useState<UserSession | null>(() => {
    try {
      const saved = localStorage.getItem('hvc_first_user_session');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });
  const [isGuestMode, setIsGuestMode] = useState<boolean>(false);
  const [showWelcomeBanner, setShowWelcomeBanner] = useState<boolean>(true);

  // Filter and Search State
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedBudget, setSelectedBudget] = useState<string>('All Budgets');
  const [selectedLocation, setSelectedLocation] = useState<string>('All India');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Modal Visibility States
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [preselectedProvider, setPreselectedProvider] = useState<Provider | null>(null);
  const [isProviderModalOpen, setIsProviderModalOpen] = useState(false);
  const [selectedProviderDetail, setSelectedProviderDetail] = useState<Provider | null>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [legalModal, setLegalModal] = useState<{ isOpen: boolean; title: string; content: string }>({
    isOpen: false,
    title: '',
    content: ''
  });

  const handleLogin = (session: UserSession) => {
    setUserSession(session);
    setIsGuestMode(false);
    setShowWelcomeBanner(true);
    try {
      localStorage.setItem('hvc_first_user_session', JSON.stringify(session));
    } catch (e) {
      console.error('Failed to save session to localStorage:', e);
    }
  };

  const handleLogout = () => {
    setUserSession(null);
    setIsGuestMode(false);
    try {
      localStorage.removeItem('hvc_first_user_session');
    } catch (e) {
      console.error('Failed to remove session from localStorage:', e);
    }
  };

  const handleContinueAsGuest = () => {
    setIsGuestMode(true);
  };

  // Filtered providers computation
  const filteredProviders = useMemo(() => {
    return FEATURED_PROVIDERS.filter((provider) => {
      // 1. Category Filter
      if (selectedCategory !== 'All' && provider.category !== selectedCategory) {
        return false;
      }

      // 2. Location Filter
      if (selectedLocation !== 'All India' && provider.location !== selectedLocation) {
        return false;
      }

      // 3. Budget Range Filter
      if (selectedBudget !== 'All Budgets') {
        if (selectedBudget === '₹5L – ₹15L' && provider.minBudgetNumber > 15) return false;
        if (selectedBudget === '₹15L – ₹35L' && (provider.minBudgetNumber < 12 || provider.minBudgetNumber > 35)) return false;
        if (selectedBudget === '₹35L – ₹75L' && provider.minBudgetNumber < 15) return false;
        if (selectedBudget === '₹75L+' && provider.minBudgetNumber < 20) return false;
      }

      // 4. Keyword Query Filter
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchesName = provider.name.toLowerCase().includes(q);
        const matchesTag = provider.tagline.toLowerCase().includes(q);
        const matchesDesc = provider.description.toLowerCase().includes(q);
        const matchesLocation = provider.location.toLowerCase().includes(q);
        const matchesSpec = provider.specializations.some((s) => s.toLowerCase().includes(q));
        const matchesClients = provider.pastClients.some((c) => c.toLowerCase().includes(q));

        if (!matchesName && !matchesTag && !matchesDesc && !matchesLocation && !matchesSpec && !matchesClients) {
          return false;
        }
      }

      return true;
    });
  }, [selectedCategory, selectedBudget, selectedLocation, searchQuery]);

  const handleResetFilters = () => {
    setSelectedCategory('All');
    setSelectedBudget('All Budgets');
    setSelectedLocation('All India');
    setSearchQuery('');
  };

  const handleOpenEnquiry = (provider?: Provider) => {
    setPreselectedProvider(provider || null);
    setIsEnquiryModalOpen(true);
  };

  const handleOpenProviderDetail = (provider: Provider) => {
    setSelectedProviderDetail(provider);
  };

  const handleOpenLegal = (title: string, content: string) => {
    setLegalModal({
      isOpen: true,
      title,
      content
    });
  };

  const scrollToProviders = () => {
    const el = document.getElementById('explore-services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // If the user has not logged in and has not chosen to preview as guest, show the Launch Gate first!
  if (!userSession && !isGuestMode) {
    return (
      <LaunchAuthGate
        onLogin={handleLogin}
        onContinueAsGuest={handleContinueAsGuest}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#111827] flex flex-col antialiased selection:bg-blue-600 selection:text-white">
      
      {/* First User Welcome Notice Banner */}
      {userSession && showWelcomeBanner && (
        <aside aria-label="First user announcement" className="bg-[#0B1528] text-white px-4 py-2.5 text-xs border-b border-cyan-500/30 sticky top-0 z-50 shadow-sm">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5 flex-wrap">
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-cyan-400/15 text-cyan-300 font-semibold text-[11px] border border-cyan-400/30">
                <Sparkles className="w-3 h-3 text-cyan-400" />
                <span>Founding User #1</span>
              </span>
              <span className="text-slate-300">
                Welcome <strong className="text-white font-bold">{userSession.name}</strong> ({userSession.companyName || userSession.email}). You are logged in as our first user with full marketplace access!
              </span>
            </div>
            <button
              onClick={() => setShowWelcomeBanner(false)}
              className="text-slate-400 hover:text-white p-1 rounded-md hover:bg-slate-800 transition-colors shrink-0 cursor-pointer"
              title="Dismiss banner"
              aria-label="Dismiss first user announcement"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </aside>
      )}

      {/* Guest Preview Notice */}
      {!userSession && isGuestMode && (
        <aside aria-label="Guest mode notice" className="bg-amber-950/90 text-amber-100 px-4 py-2 text-xs border-b border-amber-600/30 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
              <span>You are viewing HighValue Connect in guest preview mode.</span>
            </div>
            <button
              onClick={() => setIsGuestMode(false)}
              className="font-semibold text-white underline hover:text-amber-200 cursor-pointer shrink-0"
            >
              Log In & Join Website →
            </button>
          </div>
        </aside>
      )}

      {/* 1. Premium Navigation Bar */}
      <Navbar
        onOpenEnquiry={() => handleOpenEnquiry()}
        onOpenProviderModal={() => setIsProviderModalOpen(true)}
        onOpenAuth={() => setIsAuthModalOpen(true)}
        userSession={userSession}
        onLogout={handleLogout}
      />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <HeroSection
          onFindProviders={scrollToProviders}
          onBecomeProvider={() => setIsProviderModalOpen(true)}
          onOpenEnquiry={() => handleOpenEnquiry()}
        />

        {/* 3. Search and Discovery Section */}
        <SearchDiscovery
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          selectedBudget={selectedBudget}
          onSelectBudget={setSelectedBudget}
          selectedLocation={selectedLocation}
          onSelectLocation={setSelectedLocation}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onExecuteSearch={scrollToProviders}
          onResetFilters={handleResetFilters}
          resultsCount={filteredProviders.length}
        />

        {/* 4. Popular Service Categories */}
        <CategoryGrid
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        {/* 5. How It Works */}
        <HowItWorks
          onOpenEnquiry={() => handleOpenEnquiry()}
        />

        {/* 6. Featured Service Providers */}
        <FeaturedProviders
          providers={filteredProviders}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          onSelectProvider={handleOpenProviderDetail}
          onRequestIntro={(provider) => handleOpenEnquiry(provider)}
          onResetFilters={handleResetFilters}
        />

        {/* 7. Why Choose HighValue Connect? */}
        <WhyChooseUs />

        {/* 8. Customer CTA Section */}
        <CustomerCTA
          onOpenEnquiry={() => handleOpenEnquiry()}
        />

        {/* 9. Provider CTA Section */}
        <ProviderCTA
          onOpenProviderModal={() => setIsProviderModalOpen(true)}
        />
      </main>

      {/* 10. Professional Footer */}
      <Footer
        onSelectCategory={setSelectedCategory}
        onOpenLegalModal={handleOpenLegal}
        onOpenEnquiry={() => handleOpenEnquiry()}
        onOpenProviderModal={() => setIsProviderModalOpen(true)}
      />

      {/* Interactive Modals */}
      <ProjectEnquiryModal
        isOpen={isEnquiryModalOpen}
        onClose={() => setIsEnquiryModalOpen(false)}
        preselectedProvider={preselectedProvider}
        userSession={userSession}
      />

      <ProviderModal
        isOpen={isProviderModalOpen}
        onClose={() => setIsProviderModalOpen(false)}
        userSession={userSession}
      />

      <ProviderDetailModal
        provider={selectedProviderDetail}
        onClose={() => setSelectedProviderDetail(null)}
        onRequestIntro={(provider) => handleOpenEnquiry(provider)}
      />

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onOpenEnquiry={() => handleOpenEnquiry()}
        onOpenProviderModal={() => setIsProviderModalOpen(true)}
        userSession={userSession}
        onLogin={handleLogin}
        onLogout={handleLogout}
      />

      <LegalModal
        isOpen={legalModal.isOpen}
        title={legalModal.title}
        content={legalModal.content}
        onClose={() => setLegalModal({ isOpen: false, title: '', content: '' })}
      />

    </div>
  );
}
