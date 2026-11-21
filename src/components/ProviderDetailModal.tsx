import React from 'react';
import { 
  X, 
  MapPin, 
  Star, 
  Users, 
  Calendar, 
  Clock, 
  IndianRupee, 
  CheckCircle2, 
  ArrowRight, 
  Building2, 
  Award,
  AlertCircle 
} from 'lucide-react';
import { Provider } from '../data/mockData';

interface ProviderDetailModalProps {
  provider: Provider | null;
  onClose: () => void;
  onRequestIntro: (provider: Provider) => void;
}

export const ProviderDetailModal: React.FC<ProviderDetailModalProps> = ({
  provider,
  onClose,
  onRequestIntro
}) => {
  if (!provider) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-xs">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="p-6 bg-[#0B1220] text-white flex items-start justify-between border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-xs text-slate-400 mb-1">
              <span className="text-cyan-400 font-mono">{provider.category}</span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                {provider.location}
              </span>
            </div>
            <h3 className="text-xl font-bold text-white tracking-tight">
              {provider.name}
            </h3>
            <p className="text-xs text-slate-300 mt-1 max-w-lg">
              {provider.tagline}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close provider modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-xs text-slate-700">
          
          {/* Commercials & SLA Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200 font-mono">
            <div>
              <span className="text-[10px] uppercase text-slate-600 block">Min Contract</span>
              <span className="text-sm font-bold text-slate-900">{provider.minBudget}</span>
            </div>
            <div>
              <span className="text-[10px] uppercase text-slate-600 block">Avg Engagement</span>
              <span className="text-sm font-bold text-slate-900">{provider.avgProjectSize}</span>
            </div>
            <div>
              <span className="text-[10px] uppercase text-slate-600 block">Engineering Size</span>
              <span className="text-sm font-bold text-slate-900">{provider.teamSize}</span>
            </div>
            <div>
              <span className="text-[10px] uppercase text-slate-600 block">Turnaround SLA</span>
              <span className="text-sm font-bold text-emerald-600">{provider.responseRate}</span>
            </div>
          </div>

          {/* Demo rating notice */}
          <div className="p-3 rounded-xl bg-amber-50/80 border border-amber-200/80 flex items-start gap-2.5 text-amber-900">
            <Star className="w-4 h-4 fill-amber-500 text-amber-500 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold">{provider.rating} / 5.0 Rating</span> ({provider.reviewCount} Simulated Client Evaluations)
              <p className="text-[11px] text-amber-800 mt-0.5">
                Note: In accordance with our honesty standards, this rating is a simulated benchmark for demonstration purposes on our aggregator portal.
              </p>
            </div>
          </div>

          {/* About / Capability narrative */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2">
              Studio Overview & Practice Specialization
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {provider.description}
            </p>
          </div>

          {/* Key Milestone / Case Study */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900">
              <Award className="w-4 h-4 text-blue-600" />
              <span>Verified Delivery Milestone</span>
            </div>
            <p className="text-xs font-medium text-slate-800">
              &quot;{provider.keyHighlight}&quot;
            </p>
            <div className="text-xs text-emerald-600 font-semibold font-mono">
              Proven Result: {provider.clientImpact}
            </div>
          </div>

          {/* Technical Specializations */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2">
              Verified Technical Stack & Competencies
            </h4>
            <div className="flex flex-wrap gap-2">
              {provider.specializations.map((spec) => (
                <span
                  key={spec}
                  className="px-2.5 py-1 text-xs text-slate-700 bg-slate-100 rounded-lg font-medium"
                >
                  {spec}
                </span>
              ))}
            </div>
          </div>

          {/* Representative Client Portfolios */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2">
              Representative Enterprise Clients
            </h4>
            <div className="flex items-center gap-3">
              {provider.pastClients.map((client) => (
                <div
                  key={client}
                  className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 font-mono"
                >
                  {client}
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-800 cursor-pointer"
          >
            Close
          </button>

          <button
            onClick={() => {
              onClose();
              onRequestIntro(provider);
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all shadow-md shadow-blue-600/20 cursor-pointer"
          >
            <span>Request Introduction with {provider.name}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
};
