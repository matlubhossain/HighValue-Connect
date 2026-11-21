import React from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUpRight, 
  ShieldCheck, 
  Linkedin, 
  Twitter, 
  Github 
} from 'lucide-react';
import { SERVICE_CATEGORIES } from '../data/mockData';

interface FooterProps {
  onSelectCategory: (cat: string) => void;
  onOpenLegalModal: (title: string, content: string) => void;
  onOpenEnquiry: () => void;
  onOpenProviderModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectCategory,
  onOpenLegalModal,
  onOpenEnquiry,
  onOpenProviderModal
}) => {
  const currentYear = 2026;

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePrivacyClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onOpenLegalModal(
      'Privacy Policy',
      'HighValue Connect takes data privacy and enterprise confidentiality seriously. Client requirements, contact numbers, and corporate scopes submitted through our platform are never sold to open marketing lists or published on public websites. Project briefs are shared exclusively with up to three verified agency partners that you approve during the matching process. We adhere to the Digital Personal Data Protection Act (DPDPA 2023) guidelines and maintain strict encryption on all submitted technical briefs.'
    );
  };

  const handleTermsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onOpenLegalModal(
      'Terms of Service',
      'By using HighValue Connect, enterprise clients agree that project submissions represent genuine intent to evaluate technology service providers for contracts meeting or exceeding the platform minimum budget threshold (₹5 Lakhs INR). HighValue Connect functions as an aggregator and discovery broker; contracts and formal statements of work are executed directly between the client and the chosen agency partner. Service providers registered on HighValue Connect undergo verification and must maintain professional standards, responsive turnaround SLAs, and accurate technical competency representations.'
    );
  };

  const handleHelpClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onOpenLegalModal(
      'Help & Client Support',
      'Our dedicated enterprise matching advisors are available Monday to Friday from 9:00 AM to 7:00 PM IST. If you have questions about matching with specialized providers, scoping complex multi-disciplinary RFPs, or checking provider background evaluations, contact our advisory desk directly at contact@highvalueconnect.in or call +91 80 4920 1800.'
    );
  };

  return (
    <footer id="about" className="bg-[#0B1220] text-slate-400 border-t border-slate-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Column 1: Brand & About */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-400 flex items-center justify-center">
                <span className="font-mono font-bold text-xs text-white">HV</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-white text-base tracking-tight">HighValue</span>
                <span className="font-normal text-cyan-400 text-base">Connect</span>
              </div>
            </div>

            <p className="text-slate-300 text-xs leading-relaxed max-w-sm">
              India’s dedicated high-value sales aggregator platform. We connect enterprise clients and founders with vetted engineering studios and consultancies for AI automation, custom software, cloud migrations, and digital transformation.
            </p>

            <div className="pt-2 text-slate-400 space-y-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Embassy TechVillage, Outer Ring Road, Bengaluru, KA 560103</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <a href="mailto:contact@highvalueconnect.in" className="hover:text-white transition-colors">
                  contact@highvalueconnect.in
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>+91 80 4920 1800 (Mon–Fri 9am–7pm IST)</span>
              </div>
            </div>
          </div>

          {/* Column 2: Explore Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Explore Services
            </h4>
            <ul className="space-y-2">
              {SERVICE_CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => {
                      onSelectCategory(cat.title);
                      scrollTo('providers-section');
                    }}
                    className="hover:text-white transition-colors text-left cursor-pointer"
                  >
                    {cat.title}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => {
                    onSelectCategory('All');
                    scrollTo('providers-section');
                  }}
                  className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium cursor-pointer"
                >
                  Browse All Categories →
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Indian Tech Corridors */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Regional Corridors
            </h4>
            <ul className="space-y-2 text-slate-300">
              <li>
                <span className="text-white font-medium">Bengaluru</span> · DeepTech & AI
              </li>
              <li>
                <span className="text-white font-medium">Mumbai</span> · FinTech & Enterprise Cloud
              </li>
              <li>
                <span className="text-white font-medium">Delhi-NCR</span> · SaaS & Advisory
              </li>
              <li>
                <span className="text-white font-medium">Hyderabad</span> · Cloud & IoT Systems
              </li>
              <li>
                <span className="text-white font-medium">Pune</span> · Core Software Engineering
              </li>
              <li>
                <span className="text-white font-medium">Pan-India</span> · Remote Delivery Consortia
              </li>
            </ul>
          </div>

          {/* Column 4: Platform & Support */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Platform & Legal
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollTo('how-it-works')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenProviderModal}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Provider Partnership
                </button>
              </li>
              <li>
                <button
                  onClick={handleHelpClick}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Help & Advisory Desk
                </button>
              </li>
              <li>
                <button
                  onClick={handlePrivacyClick}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={handleTermsClick}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Terms of Service
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Strip: Copyright & Socials */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500">
          <div>
            © {currentYear} HighValue Connect Technologies Pvt Ltd. All rights reserved.
          </div>

          <div className="flex items-center gap-5 text-slate-400">
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noreferrer"
              className="hover:text-cyan-400 transition-colors p-1"
              aria-label="HighValue Connect on LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noreferrer"
              className="hover:text-cyan-400 transition-colors p-1"
              aria-label="HighValue Connect on Twitter / X"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noreferrer"
              className="hover:text-cyan-400 transition-colors p-1"
              aria-label="HighValue Connect on GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
