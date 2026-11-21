import React, { useState } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Search, 
  Building2, 
  Cpu, 
  Layers, 
  ChevronRight, 
  TrendingUp, 
  ShieldCheck, 
  Clock 
} from 'lucide-react';
import { PLATFORM_METRICS } from '../data/mockData';

interface HeroSectionProps {
  onFindProviders: () => void;
  onBecomeProvider: () => void;
  onOpenEnquiry: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onFindProviders,
  onBecomeProvider,
  onOpenEnquiry
}) => {
  // Interactive sample state for the hero dashboard visual
  const [activeBriefIndex, setActiveBriefIndex] = useState(0);

  const sampleBriefs = [
    {
      id: 'HVC-8941',
      title: 'Autonomous Claims AI & OCR Pipeline',
      industry: 'FinTech / InsurTech',
      location: 'Bengaluru (Hybrid)',
      budget: '₹35 Lakhs',
      timeline: '8–12 Weeks',
      status: '3 Verified Matches',
      tags: ['LLM Orchestration', 'Computer Vision', 'LangChain'],
      topMatch: {
        name: 'CognitiveScale Labs',
        location: 'Bengaluru',
        score: '98% Match',
        pastCase: 'Built claim automation for 4.2M patient network',
        avgTimeline: '2h response'
      },
      secondMatch: {
        name: 'NeuralMatrix Systems',
        location: 'Hyderabad',
        score: '94% Match',
        pastCase: 'Edge AI & automated document analytics',
        avgTimeline: '3h response'
      }
    },
    {
      id: 'HVC-8942',
      title: 'Multi-Tenant Microservices Architecture',
      industry: 'Core Logistics / B2B Supply Chain',
      location: 'Mumbai & Pan-India',
      budget: '₹55 Lakhs',
      timeline: '16–20 Weeks',
      status: '4 Verified Matches',
      tags: ['Go / Rust', 'Kafka Stream', 'PostgreSQL Scale'],
      topMatch: {
        name: 'NexusForge Software',
        location: 'Pune',
        score: '97% Match',
        pastCase: 'Engineered clearing system for ₹250Cr daily volume',
        avgTimeline: '2h response'
      },
      secondMatch: {
        name: 'ApexCore Systems',
        location: 'Bengaluru',
        score: '93% Match',
        pastCase: 'Migrated 14-year-old monolith with zero data loss',
        avgTimeline: '2h response'
      }
    }
  ];

  const currentBrief = sampleBriefs[activeBriefIndex];

  return (
    <section id="hero" className="relative bg-[#0B1220] text-white pt-12 pb-20 lg:pt-20 lg:pb-28 overflow-hidden">
      {/* Background ambient light gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[30rem] h-[30rem] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Value Proposition */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Regional trust indicator: clean unboxed text */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-300">
              <span className="text-cyan-400 font-semibold tracking-wide uppercase text-[11px]">India Enterprise Sales Aggregator</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Bengaluru</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Mumbai</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Delhi-NCR</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Hyderabad</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Pune</span>
            </div>

            {/* Primary Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] text-balance">
              Find the Right Experts for Your Next Big Project.
            </h1>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal max-w-2xl">
              Discover trusted experts for AI, software development, and business solutions. Share your requirements, compare suitable providers, and turn your next big idea into reality.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onFindProviders}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-semibold text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 rounded-xl transition-all shadow-lg shadow-blue-600/30 whitespace-nowrap cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                <span>Find Service Providers</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onBecomeProvider}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800 hover:text-white border border-slate-700/80 rounded-xl transition-all whitespace-nowrap cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
              >
                <span>Become a Provider</span>
              </button>
            </div>

            {/* Quiet trust notes */}
            <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Pre-vetted Indian agencies</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Curated matching in 48 hours</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Confidential enterprise briefs</span>
              </div>
            </div>

          </div>

          {/* Right Column: Sophisticated Dashboard Visual */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-[#0F172A] border border-slate-800 p-6 shadow-2xl shadow-black/60">
              
              {/* Visual Header & Interactive Toggle */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800/80">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-cyan-400" />
                  <div>
                    <h3 className="text-xs font-semibold text-white tracking-wide">HighValue Match Engine</h3>
                    <p className="text-[11px] text-slate-400">Live B2B Requirement Broker</p>
                  </div>
                </div>

                <button
                  onClick={() => setActiveBriefIndex((prev) => (prev === 0 ? 1 : 0))}
                  className="px-2.5 py-1 text-[11px] font-medium text-cyan-300 hover:text-white bg-slate-800/90 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors cursor-pointer"
                  title="Toggle live sample RFP brief"
                >
                  Switch RFP Sample
                </button>
              </div>

              {/* Active Enterprise Project Card */}
              <div className="mt-4 p-4 rounded-xl bg-[#0B1220] border border-slate-800">
                <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                  <span className="font-mono text-cyan-400">{currentBrief.id}</span>
                  <span className="text-emerald-400 font-medium">{currentBrief.status}</span>
                </div>

                <h4 className="text-sm font-bold text-white mb-1.5">{currentBrief.title}</h4>
                
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-400 mb-3">
                  <span>{currentBrief.industry}</span>
                  <span aria-hidden="true">·</span>
                  <span>{currentBrief.location}</span>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-800/60 text-xs">
                  <div>
                    <span className="text-slate-500 block text-[10px] uppercase font-mono">Verified Budget</span>
                    <span className="text-white font-bold text-sm font-mono tabular-nums text-emerald-400">{currentBrief.budget}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[10px] uppercase font-mono">Target Timeline</span>
                    <span className="text-slate-200 font-medium">{currentBrief.timeline}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 mt-3">
                  {currentBrief.tags.map((tag) => (
                    <span key={tag} className="text-[10px] text-slate-300 bg-slate-800/80 px-2 py-0.5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Matched Providers Previews */}
              <div className="mt-4 space-y-2.5">
                <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                  Top Recommended Providers ({activeBriefIndex === 0 ? 'AI & Automation' : 'Software Engineering'})
                </p>

                {/* Match 1 */}
                <div className="p-3 rounded-xl bg-slate-900/80 border border-blue-500/30 hover:border-blue-500/60 transition-all">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-white">{currentBrief.topMatch.name}</span>
                        <span className="text-[10px] text-slate-400">({currentBrief.topMatch.location})</span>
                      </div>
                      <p className="text-[11px] text-slate-300 mt-0.5">{currentBrief.topMatch.pastCase}</p>
                    </div>
                    <div className="text-right shrink-0 ml-2">
                      <span className="text-xs font-mono font-bold text-cyan-400 block">{currentBrief.topMatch.score}</span>
                      <span className="text-[10px] text-slate-400">{currentBrief.topMatch.avgTimeline}</span>
                    </div>
                  </div>
                </div>

                {/* Match 2 */}
                <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-800">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-white">{currentBrief.secondMatch.name}</span>
                        <span className="text-[10px] text-slate-400">({currentBrief.secondMatch.location})</span>
                      </div>
                      <p className="text-[11px] text-slate-400 mt-0.5">{currentBrief.secondMatch.pastCase}</p>
                    </div>
                    <div className="text-right shrink-0 ml-2">
                      <span className="text-xs font-mono font-bold text-slate-300 block">{currentBrief.secondMatch.score}</span>
                      <span className="text-[10px] text-slate-500">{currentBrief.secondMatch.avgTimeline}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick interactive trigger inside visual */}
              <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between">
                <span className="text-[11px] text-slate-400">Have a similar project?</span>
                <button
                  onClick={onOpenEnquiry}
                  className="text-xs font-medium text-cyan-400 hover:text-cyan-300 flex items-center gap-1 cursor-pointer"
                >
                  <span>Post Requirements</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          </div>

        </div>

        {/* Full-width High-Value Metrics Strip */}
        <div className="mt-16 lg:mt-24 pt-10 border-t border-slate-800/80">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {PLATFORM_METRICS.map((metric) => (
              <div key={metric.label} className="space-y-1">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-mono tabular-nums tracking-tight">
                  {metric.value}
                </div>
                <div className="text-sm font-semibold text-slate-200">
                  {metric.label}
                </div>
                <div className="text-xs text-slate-400">
                  {metric.detail}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
