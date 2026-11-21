import React from 'react';
import { ArrowRight, TrendingUp, Check, Building, Award } from 'lucide-react';

interface ProviderCTAProps {
  onOpenProviderModal: () => void;
}

export const ProviderCTA: React.FC<ProviderCTAProps> = ({ onOpenProviderModal }) => {
  return (
    <section id="for-providers" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl shadow-slate-900/5 p-8 sm:p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600">
                <TrendingUp className="w-4 h-4" />
                <span>For Agency & Consultancy Founders</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Grow Your Business with Better Opportunities.
              </h2>

              <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                Tired of unqualified leads and race-to-the-bottom freelancing marketplaces? HighValue Connect gives boutique engineering studios and consultancies exclusive access to enterprise clients ready to invest ₹5 Lakhs to ₹1 Crore+ in high-value technology solutions.
              </p>

              {/* Provider benefits checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Pre-screened client budgets</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Max 3 providers per lead</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Direct executive buyer access</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Transparent lead acquisition costs</span>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={onOpenProviderModal}
                  className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 active:bg-black rounded-xl transition-all shadow-md shadow-slate-900/10 whitespace-nowrap cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                >
                  <span>Join as a Provider</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Card: Representative Agency Economics */}
            <div className="lg:col-span-5">
              <div className="p-6 sm:p-7 rounded-2xl bg-[#0B1220] text-white border border-slate-800 space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs font-bold text-white uppercase tracking-wider">Partner Network Terms</span>
                  </div>
                  <span className="text-[10px] text-cyan-400 font-mono">India Corridors</span>
                </div>

                <div className="space-y-4 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Minimum Lead Project Size</span>
                    <span className="text-white font-mono font-bold">₹5 Lakhs INR</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Average Lead Contract</span>
                    <span className="text-emerald-400 font-mono font-bold">₹28 Lakhs INR</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Competition Cap</span>
                    <span className="text-white font-mono font-bold">3 Agencies max / brief</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Verification SLA</span>
                    <span className="text-white font-mono font-bold">48 Hours</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 text-[11px] text-slate-300 leading-normal">
                  💡 We evaluate each agency partner for technical case studies, verified past clients, and senior team composition before granting lead marketplace access.
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
