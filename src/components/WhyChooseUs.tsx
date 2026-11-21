import React from 'react';
import { 
  Target, 
  FileCheck2, 
  SearchCheck, 
  Compass, 
  Lock, 
  ArrowRight,
  ShieldAlert
} from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/mockData';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case '1':
        return <Target className="w-5 h-5 text-blue-600" />;
      case '2':
        return <FileCheck2 className="w-5 h-5 text-cyan-600" />;
      case '3':
        return <SearchCheck className="w-5 h-5 text-indigo-600" />;
      case '4':
        return <Compass className="w-5 h-5 text-sky-600" />;
      case '5':
        return <Lock className="w-5 h-5 text-emerald-600" />;
      default:
        return <Target className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section id="why-choose-us" className="py-24 bg-white border-t border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
            Enterprise Advantage
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why Choose HighValue Connect?
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Built from the ground up to solve the friction, ambiguity, and risk associated with procuring high-stakes software engineering, AI deployment, and strategic consulting.
          </p>
        </div>

        {/* 5 Value Pillars Grid (Asymmetric Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {WHY_CHOOSE_US.map((item, index) => {
            // Give 1st and 5th items slight prominence
            const isFeatured = index === 0;

            return (
              <div
                key={item.id}
                className={`p-7 rounded-2xl border transition-all ${
                  isFeatured
                    ? 'bg-slate-50 border-slate-300/80 shadow-xs'
                    : 'bg-white border-slate-200/80 hover:border-slate-300'
                }`}
              >
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-xs mb-5">
                  {getIcon(item.id)}
                </div>

                <div className="text-xs font-mono text-slate-400 mb-1">
                  0{item.id}. Pillar
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2.5">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}

          {/* 6th Card: Anti-Spam Guarantee Box */}
          <div className="p-7 rounded-2xl bg-slate-900 text-white border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center mb-5">
                <Lock className="w-5 h-5 text-cyan-400" />
              </div>
              <div className="text-xs font-mono text-cyan-400 mb-1">
                Zero Public Telemetry
              </div>
              <h3 className="text-lg font-bold text-white mb-2.5">
                The Non-Spam SLA
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Unlike open freelancing directories, your requirement is never sold to hundreds of random bidders. You maintain 100% control over which agencies can review your technical specifications.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800 text-[11px] text-slate-400 font-mono">
              Strict Non-Disclosure Guarantee
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
