import React from 'react';
import { ArrowRight, CheckCircle2, Shield, Sparkles } from 'lucide-react';

interface CustomerCTAProps {
  onOpenEnquiry: () => void;
}

export const CustomerCTA: React.FC<CustomerCTAProps> = ({ onOpenEnquiry }) => {
  return (
    <section id="customer-cta" className="py-20 bg-[#0B1220] text-white relative overflow-hidden">
      {/* Subtle radial ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[36rem] h-[36rem] bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-4">
          <span>Enterprise Project Intake</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight text-balance">
          Have a Project in Mind?
        </h2>

        <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Submit your requirements in under 3 minutes. Our technical matching team will pair your specifications with 2 to 3 vetted service providers within 48 hours.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenEnquiry}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 rounded-xl transition-all shadow-lg shadow-blue-600/30 whitespace-nowrap cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            <span>Submit Your Project</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Quiet trust markers */}
        <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-y-2 gap-x-8 text-xs text-slate-400">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-cyan-400" />
            <span>100% Free for Enterprise Clients</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Shield className="w-4 h-4 text-cyan-400" />
            <span>Pre-vetted Indian Agencies Only</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-cyan-400" />
            <span>No Unsolicited Cold Outreach</span>
          </div>
        </div>

      </div>
    </section>
  );
};
