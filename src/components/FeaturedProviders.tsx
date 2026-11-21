import React, { useState } from 'react';
import { 
  Building2, 
  MapPin, 
  Star, 
  ArrowRight, 
  Users, 
  Clock, 
  IndianRupee, 
  ExternalLink, 
  AlertCircle,
  RotateCcw,
  Sparkles
} from 'lucide-react';
import { Provider, FEATURED_PROVIDERS, SERVICE_CATEGORIES } from '../data/mockData';

interface FeaturedProvidersProps {
  providers: Provider[];
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
  onSelectProvider: (provider: Provider) => void;
  onRequestIntro: (provider: Provider) => void;
  onResetFilters: () => void;
}

export const FeaturedProviders: React.FC<FeaturedProvidersProps> = ({
  providers,
  selectedCategory,
  onSelectCategory,
  onSelectProvider,
  onRequestIntro,
  onResetFilters
}) => {
  const [activeTab, setActiveTab] = useState<string>('All');

  // Sync tab with external selectedCategory if changed externally
  const currentCategory = selectedCategory !== 'All' ? selectedCategory : activeTab;

  const handleTabClick = (catTitle: string) => {
    setActiveTab(catTitle);
    onSelectCategory(catTitle);
  };

  return (
    <section id="providers-section" className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
              Vetted Provider Catalog
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Featured Service Providers
            </h2>
            <p className="mt-2 text-sm text-slate-600 max-w-2xl">
              Representative boutique studios, enterprise software houses, and advisory consultancies across India.
            </p>
          </div>

          <div className="mt-4 md:mt-0 flex items-center gap-2">
            <span className="text-xs text-slate-500 font-mono tabular-nums">
              Showing {providers.length} agencies
            </span>
          </div>
        </div>

        {/* Category Filter Bar (Functional Buttons) */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-4 mb-8 scrollbar-none">
          <button
            onClick={() => handleTabClick('All')}
            className={`px-3.5 py-2 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer shrink-0 ${
              currentCategory === 'All'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
            }`}
          >
            All Specialties ({FEATURED_PROVIDERS.length})
          </button>
          {SERVICE_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleTabClick(cat.title)}
              className={`px-3.5 py-2 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer shrink-0 ${
                currentCategory === cat.title
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Demo Data Notice: Transparent label */}
        <div className="mb-8 p-3 rounded-xl bg-blue-50/70 border border-blue-100 flex items-center gap-2.5 text-xs text-blue-900">
          <AlertCircle className="w-4 h-4 text-blue-600 shrink-0" />
          <span>
            <strong>Transparency Notice:</strong> All company cards below feature realistic sample agencies with clearly marked <em>Demo Ratings</em> to illustrate our matching and discovery architecture.
          </span>
        </div>

        {/* Empty State */}
        {providers.length === 0 ? (
          <div className="py-16 px-6 text-center bg-white rounded-2xl border border-slate-200">
            <div className="w-12 h-12 rounded-full bg-slate-100 mx-auto flex items-center justify-center text-slate-400 mb-4">
              <Building2 className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-1">
              No service providers found for this criteria
            </h3>
            <p className="text-xs text-slate-500 max-w-md mx-auto mb-6">
              Try broadening your budget threshold, selecting &quot;All India&quot;, or clearing keyword filters to see more results.
            </p>
            <button
              onClick={onResetFilters}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Search Filters</span>
            </button>
          </div>
        ) : (
          /* Provider Cards Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {providers.map((provider) => (
              <div
                key={provider.id}
                className="bg-white rounded-2xl border border-slate-200/90 hover:border-slate-300 p-6 flex flex-col justify-between transition-all hover:shadow-md"
              >
                <div>
                  
                  {/* Top line metadata: clean unboxed text */}
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-blue-600">{provider.category}</span>
                      <span aria-hidden="true">·</span>
                      <span className="flex items-center gap-1 text-slate-600">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        {provider.location}
                      </span>
                    </div>

                    <div className="flex items-center gap-1 text-slate-600">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>{provider.responseRate}</span>
                    </div>
                  </div>

                  {/* Provider Name & Demo Rating */}
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 hover:text-blue-600 transition-colors">
                        {provider.name}
                      </h3>
                      <p className="text-xs text-slate-600 font-medium mt-1">
                        {provider.tagline}
                      </p>
                    </div>

                    {/* Clearly labeled demo rating */}
                    <div className="shrink-0 text-right">
                      <div className="flex items-center justify-end gap-1 text-amber-500 font-bold text-xs font-mono">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        <span>{provider.rating.toFixed(1)}</span>
                        <span className="text-slate-400 font-normal">({provider.reviewCount})</span>
                      </div>
                      <span className="block text-[10px] text-slate-600 uppercase font-mono mt-0.5">
                        Demo Rating
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-600 leading-relaxed mt-3 mb-4">
                    {provider.description}
                  </p>

                  {/* Portfolio highlight card */}
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 mb-4">
                    <div className="text-[10px] font-mono uppercase text-slate-600 mb-1">
                      Recent Portfolio Milestone
                    </div>
                    <p className="text-xs font-medium text-slate-800 leading-snug">
                      &quot;{provider.keyHighlight}&quot;
                    </p>
                    <div className="text-[11px] text-emerald-600 font-semibold mt-1">
                      Impact: {provider.clientImpact}
                    </div>
                  </div>

                  {/* Specialization Tags (Unboxed text tags) */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {provider.specializations.map((spec) => (
                      <span
                        key={spec}
                        className="text-[11px] text-slate-600 bg-slate-100 px-2 py-0.5 rounded"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>

                </div>

                {/* Bottom Row: Commercial Terms & Action Buttons */}
                <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <span className="text-[10px] text-slate-600 block uppercase font-mono">
                      Entry Project Budget
                    </span>
                    <span className="text-sm font-bold text-slate-900 font-mono tabular-nums">
                      {provider.minBudget}
                    </span>
                    <span className="text-[11px] text-slate-600 ml-1">
                      (avg {provider.avgProjectSize})
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onSelectProvider(provider)}
                      className="px-3 py-2 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
                    >
                      View Profile
                    </button>
                    <button
                      onClick={() => onRequestIntro(provider)}
                      className="px-3.5 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors shadow-xs cursor-pointer inline-flex items-center gap-1"
                    >
                      <span>Request Intro</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
