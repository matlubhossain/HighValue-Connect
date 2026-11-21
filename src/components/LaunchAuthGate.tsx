import React, { useState } from 'react';
import { 
  Lock, 
  Mail, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles, 
  User, 
  Building2, 
  Eye, 
  EyeOff, 
  CheckCircle2, 
  Zap, 
  ChevronRight,
  ShieldAlert
} from 'lucide-react';
import { UserRole, UserSession, DEMO_FIRST_USERS } from '../types/auth';

interface LaunchAuthGateProps {
  onLogin: (session: UserSession) => void;
  onContinueAsGuest: () => void;
}

export const LaunchAuthGate: React.FC<LaunchAuthGateProps> = ({
  onLogin,
  onContinueAsGuest
}) => {
  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [role, setRole] = useState<UserRole>('client');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Form states
  const [name, setName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [title, setTitle] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (mode === 'register') {
      if (!name.trim()) newErrors.name = 'Full name is required.';
      if (!companyName.trim()) newErrors.companyName = 'Company / Agency name is required.';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email)) {
      newErrors.email = 'Please provide a valid corporate or work email.';
    }
    if (!password.trim() || password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsLoading(true);
    setTimeout(() => {
      const session: UserSession = {
        id: `user-${Date.now()}`,
        name: mode === 'register' ? name : (email.split('@')[0].replace(/[._-]/g, ' ') || 'First User'),
        email: email.trim(),
        role: role,
        companyName: mode === 'register' ? companyName : (role === 'client' ? 'Enterprise Client Corp' : 'Specialized Agency Labs'),
        title: title.trim() || (role === 'client' ? 'Technology Director' : 'Principal Consultant'),
        isFirstUser: true,
        joinedAt: new Date().toISOString()
      };
      setIsLoading(false);
      onLogin(session);
    }, 600);
  };

  const handleQuickPreset = (preset: UserSession) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onLogin(preset);
    }, 400);
  };

  return (
    <div className="min-h-screen bg-[#070D18] text-white flex flex-col justify-between relative overflow-hidden">
      {/* Background ambient lighting glows */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-blue-600/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Top Simple Brand Header */}
      <header className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between border-b border-slate-800/60">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-blue-500/25">
            <span className="font-mono font-extrabold text-base text-white tracking-tighter">HV</span>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-white text-lg tracking-tight">HighValue</span>
              <span className="font-normal text-cyan-400 text-lg">Connect</span>
            </div>
            <p className="text-[11px] text-slate-400 font-medium">India's Premier High-Value Sales Aggregator</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Launch Version 1.0 (Live)
          </span>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="relative z-10 flex-1 flex items-center justify-center px-4 sm:px-6 py-10 sm:py-16">
        <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: First User Greeting & Platform Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/25 text-cyan-300 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Genesis Access · You are the First User</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Welcome to the <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-200 bg-clip-text text-transparent">
                First User Launch
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              HighValue Connect has just gone live! As our inaugural first user, please log in or create your founding profile to join the platform and explore verified enterprise technology partners.
            </p>

            {/* Key First User Privileges */}
            <div className="space-y-3.5 pt-2">
              <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <div className="font-semibold text-white">Founding Member Badge & Zero Fees</div>
                  <div className="text-slate-400 mt-0.5">Gain permanent priority placement and waived facilitation fees for life.</div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <ShieldCheck className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <div className="font-semibold text-white">Direct Executive Matching</div>
                  <div className="text-slate-400 mt-0.5">Curated connections for high-ticket contracts between ₹5 Lakhs and ₹1 Crore+.</div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <Zap className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <div className="font-semibold text-white">Full Platform Unlocked Upon Entry</div>
                  <div className="text-slate-400 mt-0.5">Explore 5 service categories, verified Indian agencies, project submission & lead discovery.</div>
                </div>
              </div>
            </div>

            {/* Subtle guest bypass link */}
            <div className="pt-2">
              <button
                type="button"
                onClick={onContinueAsGuest}
                className="text-xs text-slate-400 hover:text-slate-200 transition-colors inline-flex items-center gap-1.5 underline underline-offset-4 cursor-pointer"
              >
                <span>Or preview the website as a guest visitor</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Login & Join Card */}
          <div className="lg:col-span-6">
            <div className="bg-[#0E172A]/90 backdrop-blur-xl border border-slate-700/80 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-black/80">
              
              {/* Tab Switcher: Log In vs Create First Account */}
              <div className="flex p-1 bg-slate-800/90 rounded-xl mb-6 border border-slate-700/60">
                <button
                  type="button"
                  onClick={() => {
                    setMode('login');
                    setErrors({});
                  }}
                  className={`flex-1 py-2.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                    mode === 'login'
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Log In & Join
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setMode('register');
                    setErrors({});
                  }}
                  className={`flex-1 py-2.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                    mode === 'register'
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Create First Account
                </button>
              </div>

              {/* Role Toggle */}
              <div className="mb-5">
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  Joining As:
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setRole('client')}
                    className={`py-2 px-3 rounded-xl border text-xs font-semibold transition-all cursor-pointer flex items-center justify-center gap-2 ${
                      role === 'client'
                        ? 'bg-blue-950/70 border-cyan-400/80 text-cyan-300 ring-1 ring-cyan-400/50'
                        : 'bg-slate-800/60 border-slate-700 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Building2 className="w-3.5 h-3.5" />
                    <span>Enterprise Client</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setRole('provider')}
                    className={`py-2 px-3 rounded-xl border text-xs font-semibold transition-all cursor-pointer flex items-center justify-center gap-2 ${
                      role === 'provider'
                        ? 'bg-blue-950/70 border-cyan-400/80 text-cyan-300 ring-1 ring-cyan-400/50'
                        : 'bg-slate-800/60 border-slate-700 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Zap className="w-3.5 h-3.5" />
                    <span>Service Provider</span>
                  </button>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {mode === 'register' && (
                  <>
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Full Name <span className="text-rose-400">*</span>
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="e.g. Aarav Sharma"
                          className="w-full pl-10 pr-4 py-2.5 bg-slate-900/80 border border-slate-700 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                        />
                      </div>
                      {errors.name && <p className="text-[11px] text-rose-400 mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        {role === 'client' ? 'Company Name' : 'Agency / Studio Name'} <span className="text-rose-400">*</span>
                      </label>
                      <div className="relative">
                        <Building2 className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                        <input
                          type="text"
                          value={companyName}
                          onChange={(e) => setCompanyName(e.target.value)}
                          placeholder={role === 'client' ? 'e.g. Apex Health Enterprises' : 'e.g. CognitiveScale Labs'}
                          className="w-full pl-10 pr-4 py-2.5 bg-slate-900/80 border border-slate-700 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                        />
                      </div>
                      {errors.companyName && <p className="text-[11px] text-rose-400 mt-1">{errors.companyName}</p>}
                    </div>
                  </>
                )}

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    {role === 'client' ? 'Corporate Work Email' : 'Agency Contact Email'} <span className="text-rose-400">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={role === 'client' ? 'name@enterprise.in' : 'founder@agency.in'}
                      className="w-full pl-10 pr-4 py-2.5 bg-slate-900/80 border border-slate-700 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                    />
                  </div>
                  {errors.email && <p className="text-[11px] text-rose-400 mt-1">{errors.email}</p>}
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="block text-xs font-medium text-slate-300">
                      Password <span className="text-rose-400">*</span>
                    </label>
                    <span className="text-[10px] text-slate-400">Min 6 characters</span>
                  </div>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••••••"
                      className="w-full pl-10 pr-10 py-2.5 bg-slate-900/80 border border-slate-700 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-2.5 text-slate-400 hover:text-white"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                  {errors.password && <p className="text-[11px] text-rose-400 mt-1">{errors.password}</p>}
                </div>

                {/* Primary CTA */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full mt-2 py-3.5 px-4 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isLoading ? (
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>{mode === 'login' ? 'Log In & Join Website' : 'Create First Account & Join'}</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>

              {/* 1-Click Fast Presets */}
              <div className="mt-6 pt-5 border-t border-slate-800">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                    Instant 1-Click Launch Presets:
                  </span>
                  <span className="text-[10px] text-cyan-400 font-mono">Instant Entry</span>
                </div>

                <div className="space-y-2">
                  {DEMO_FIRST_USERS.map((preset) => (
                    <button
                      key={preset.id}
                      type="button"
                      onClick={() => handleQuickPreset(preset)}
                      className="w-full text-left p-2.5 rounded-xl bg-slate-900/60 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/50 transition-all flex items-center justify-between group cursor-pointer"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-400 text-white text-[11px] font-bold flex items-center justify-center">
                          {preset.name.split(' ').map((n) => n[0]).join('')}
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-white group-hover:text-cyan-300 transition-colors">
                            {preset.name}
                          </div>
                          <div className="text-[10px] text-slate-400">
                            {preset.companyName} · {preset.role === 'client' ? 'Client' : preset.role === 'provider' ? 'Provider' : 'Admin'}
                          </div>
                        </div>
                      </div>
                      <div className="text-[10px] font-semibold text-slate-400 group-hover:text-white flex items-center gap-1">
                        <span>Join</span>
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </button>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 py-4 text-center text-xs text-slate-400 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p>© 2026 HighValue Connect Technologies India. All rights reserved.</p>
        <div className="flex items-center gap-4 text-slate-400 text-[11px]">
          <span>Security Verified</span>
          <span>·</span>
          <span>Bangalore · Mumbai · Delhi-NCR</span>
        </div>
      </footer>
    </div>
  );
};
