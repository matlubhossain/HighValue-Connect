import React from 'react';
import { FileEdit, UserCheck, Scale, ArrowRight, ShieldCheck, Clock, Check } from 'lucide-react';
import { HOW_IT_WORKS_STEPS } from '../data/mockData';

interface HowItWorksProps {
  onOpenEnquiry: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenEnquiry }) => {
  const stepIcons = [
    <FileEdit key="icon-1" className="w-5 h-5 text-blue-600" />,
    <UserCheck key="icon-2" className="w-5 h-5 text-cyan-600" />,
    <Scale key="icon-3" className="w-5 h-5 text-indigo-600" />
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white border-y border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
            Procurement Lifecycle
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            How HighValue Connect Works
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Eliminating months of speculative vendor sourcing with a structured, verified 3-step matching workflow engineered for enterprise buyers.
          </p>
        </div>

        {/* 3 Steps Progression */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          {HOW_IT_WORKS_STEPS.map((stepItem, index) => (
            <div
              key={stepItem.step}
              className="relative p-7 rounded-2xl bg-slate-50/80 border border-slate-200/80 hover:border-slate-300 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Step Index & Icon */}
                <div className="flex items-center justify-between mb-5">
                  <span className="font-mono text-2xl font-black text-slate-300">
                    {stepItem.step}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-xs">
                    {stepIcons[index]}
                  </div>
                </div>

                {/* Step Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-2.5">
                  {stepItem.title}
                </h3>

                {/* Step Summary */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {stepItem.summary}
                </p>
              </div>

              {/* Bullet Highlights */}
              <div className="pt-4 border-t border-slate-200/60 space-y-2">
                {stepItem.bulletPoints.map((point) => (
                  <div key={point} className="flex items-center gap-2 text-xs text-slate-700">
                    <Check className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>

            </div>
          ))}

        </div>

        {/* Supporting trust strip & CTA banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-bold text-white">
              Ready to submit your technology requirements?
            </h4>
            <p className="text-xs sm:text-sm text-slate-400">
              No agency bidding spam. Zero aggregator fees for enterprise clients. Average response in 48 hours.
            </p>
          </div>

          <button
            onClick={onOpenEnquiry}
            className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all shadow-md shadow-blue-600/30 whitespace-nowrap shrink-0 cursor-pointer"
          >
            <span>Start Free Requirement Submission</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
