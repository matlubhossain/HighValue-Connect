import React from 'react';
import { 
  Bot, 
  Code2, 
  Smartphone, 
  Cloud, 
  Briefcase, 
  ArrowUpRight, 
  ChevronRight,
  TrendingUp 
} from 'lucide-react';
import { SERVICE_CATEGORIES, ServiceCategory } from '../data/mockData';

interface CategoryGridProps {
  selectedCategory: string;
  onSelectCategory: (categoryTitle: string) => void;
}

export const CategoryGrid: React.FC<CategoryGridProps> = ({
  selectedCategory,
  onSelectCategory
}) => {
  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'ai-automation':
        return <Bot className="w-5 h-5 text-blue-600" />;
      case 'software-dev':
        return <Code2 className="w-5 h-5 text-cyan-600" />;
      case 'web-mobile':
        return <Smartphone className="w-5 h-5 text-indigo-600" />;
      case 'cloud-it':
        return <Cloud className="w-5 h-5 text-sky-600" />;
      case 'business-consulting':
        return <Briefcase className="w-5 h-5 text-slate-700" />;
      default:
        return <TrendingUp className="w-5 h-5 text-blue-600" />;
    }
  };

  const handleCardClick = (title: string) => {
    onSelectCategory(title);
    const providersSection = document.getElementById('providers-section');
    if (providersSection) {
      providersSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
              High-Value Capabilities
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Popular Service Categories
            </h2>
            <p className="mt-2 text-base text-slate-600 max-w-2xl">
              Explore specialized technological practices with verified delivery teams ready to handle high-budget enterprise challenges.
            </p>
          </div>

          <div className="mt-4 md:mt-0">
            <button
              onClick={() => onSelectCategory('All')}
              className={`text-xs font-semibold px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
                selectedCategory === 'All'
                  ? 'bg-slate-900 text-white border-slate-900'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
              }`}
            >
              View All Categories
            </button>
          </div>
        </div>

        {/* 5 Service Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICE_CATEGORIES.map((category) => {
            const isSelected = selectedCategory === category.title;

            return (
              <div
                key={category.id}
                role="button"
                tabIndex={0}
                onClick={() => handleCardClick(category.title)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleCardClick(category.title);
                  }
                }}
                className={`group relative flex flex-col justify-between p-6 rounded-2xl bg-white border transition-all duration-200 text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                  isSelected
                    ? 'border-blue-600 ring-1 ring-blue-600 shadow-lg shadow-blue-500/10'
                    : 'border-slate-200/90 hover:border-slate-300 hover:shadow-md'
                }`}
              >
                <div>
                  {/* Card Header with Icon & Active Selection indicator */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:scale-105 transition-transform">
                      {getCategoryIcon(category.id)}
                    </div>
                    <div className="flex items-center text-slate-400 group-hover:text-blue-600 transition-colors">
                      <span className="text-xs font-medium mr-1">Filter</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Category Title */}
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {category.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    {category.description}
                  </p>
                </div>

                {/* Subcategories & Metadata */}
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <div className="flex items-center justify-between text-xs text-slate-500 font-mono mb-3">
                    <span>{category.activeProviders} Vetted Agencies</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-semibold text-slate-700">{category.leadBudgetRange}</span>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {category.popularSubcategories.slice(0, 3).map((sub) => (
                      <span
                        key={sub}
                        className="text-[11px] text-slate-600 bg-slate-100/80 px-2 py-0.5 rounded"
                      >
                        {sub}
                      </span>
                    ))}
                    {category.popularSubcategories.length > 3 && (
                      <span className="text-[11px] text-slate-400 px-1 py-0.5">
                        +{category.popularSubcategories.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

              </div>
            );
          })}

          {/* 6th Card: Custom Enterprise Requirement Banner */}
          <div className="flex flex-col justify-between p-6 rounded-2xl bg-gradient-to-br from-[#0B1220] to-[#1E293B] text-white border border-slate-800">
            <div>
              <div className="text-xs font-mono text-cyan-400 mb-2">Bespoke Scope</div>
              <h3 className="text-lg font-bold text-white mb-2">
                Have a Complex or Hybrid Tech Requirement?
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                If your project crosses multiple engineering disciplines (e.g. AI + Cloud Infrastructure + Core ERP), our technical partner advisory creates custom consortia.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
              <span className="text-xs text-slate-400">Advisory matching</span>
              <button
                onClick={() => {
                  const ctaSection = document.getElementById('customer-cta');
                  if (ctaSection) {
                    ctaSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1 cursor-pointer"
              >
                <span>Consult an Advisor</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
