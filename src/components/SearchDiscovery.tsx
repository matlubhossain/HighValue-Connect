import React from 'react';
import { Search, MapPin, IndianRupee, Layers, X, Filter } from 'lucide-react';
import { INDIAN_TECH_HUBS, BUDGET_RANGES, SERVICE_CATEGORIES } from '../data/mockData';

interface SearchDiscoveryProps {
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
  selectedBudget: string;
  onSelectBudget: (budget: string) => void;
  selectedLocation: string;
  onSelectLocation: (loc: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onExecuteSearch: () => void;
  onResetFilters: () => void;
  resultsCount: number;
}

export const SearchDiscovery: React.FC<SearchDiscoveryProps> = ({
  selectedCategory,
  onSelectCategory,
  selectedBudget,
  onSelectBudget,
  selectedLocation,
  onSelectLocation,
  searchQuery,
  onSearchChange,
  onExecuteSearch,
  onResetFilters,
  resultsCount
}) => {
  const isFiltered = 
    selectedCategory !== 'All' || 
    selectedBudget !== 'All Budgets' || 
    selectedLocation !== 'All India' || 
    searchQuery.trim() !== '';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onExecuteSearch();
  };

  return (
    <section id="explore-services" className="relative -mt-8 z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl shadow-xl shadow-slate-900/5 border border-slate-200/80 p-5 sm:p-6 lg:p-7">
        
        {/* Header strip */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-5 border-b border-slate-100">
          <div>
            <h2 className="text-lg font-bold text-slate-900 tracking-tight">
              Search & Discovery Engine
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Filter by enterprise domain, Indian tech corridor, and project budget threshold
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold text-slate-600 font-mono tabular-nums">
              {resultsCount} providers available
            </span>
            {isFiltered && (
              <button
                onClick={onResetFilters}
                className="inline-flex items-center gap-1 text-xs font-medium text-rose-600 hover:text-rose-700 bg-rose-50 px-2.5 py-1 rounded-md transition-colors cursor-pointer"
              >
                <X className="w-3 h-3" />
                <span>Reset Filters</span>
              </button>
            )}
          </div>
        </div>

        {/* Search controls form */}
        <form onSubmit={handleSubmit} className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4">
          
          {/* Keyword Search Input */}
          <div className="lg:col-span-4">
            <label htmlFor="search-input" className="block text-xs font-semibold text-slate-700 mb-1.5">
              Project Keywords or Technology
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                <Search className="w-4 h-4" />
              </div>
              <input
                id="search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="e.g. LLM Agents, Kubernetes, Next.js, ERP"
                className="w-full pl-9 pr-8 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-slate-900 placeholder-slate-400 transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => onSearchChange('')}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600"
                  aria-label="Clear search input"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Service Category */}
          <div className="lg:col-span-3">
            <label htmlFor="category-select" className="block text-xs font-semibold text-slate-700 mb-1.5">
              Service Category
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                <Layers className="w-4 h-4" />
              </div>
              <select
                id="category-select"
                value={selectedCategory}
                onChange={(e) => onSelectCategory(e.target.value)}
                className="w-full pl-9 pr-8 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-slate-900 transition-all cursor-pointer appearance-none"
              >
                <option value="All">All Categories (5)</option>
                {SERVICE_CATEGORIES.map((cat) => (
                  <option key={cat.id} value={cat.title}>
                    {cat.title}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Budget Range */}
          <div className="lg:col-span-2">
            <label htmlFor="budget-select" className="block text-xs font-semibold text-slate-700 mb-1.5">
              Budget Range
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                <IndianRupee className="w-4 h-4" />
              </div>
              <select
                id="budget-select"
                value={selectedBudget}
                onChange={(e) => onSelectBudget(e.target.value)}
                className="w-full pl-9 pr-8 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-slate-900 transition-all cursor-pointer appearance-none"
              >
                {BUDGET_RANGES.map((b) => (
                  <option key={b.label} value={b.label}>
                    {b.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* City / Service Area */}
          <div className="lg:col-span-2">
            <label htmlFor="location-select" className="block text-xs font-semibold text-slate-700 mb-1.5">
              City / Service Area
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                <MapPin className="w-4 h-4" />
              </div>
              <select
                id="location-select"
                value={selectedLocation}
                onChange={(e) => onSelectLocation(e.target.value)}
                className="w-full pl-9 pr-8 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-slate-900 transition-all cursor-pointer appearance-none"
              >
                {INDIAN_TECH_HUBS.map((hub) => (
                  <option key={hub} value={hub}>
                    {hub}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Prominent Search Button */}
          <div className="lg:col-span-1 flex items-end">
            <button
              type="submit"
              className="w-full h-[42px] inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 rounded-xl transition-all shadow-md shadow-blue-600/20 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              <Search className="w-3.5 h-3.5" />
              <span>Search</span>
            </button>
          </div>

        </form>

        {/* Quick Suggestion Chips */}
        <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center gap-2 text-xs text-slate-500">
          <span className="font-medium text-slate-400">Popular Searches:</span>
          {['Generative AI Agents', 'Fintech Microservices', 'AWS Cloud Migration', 'Cross-Platform Mobile', 'Enterprise ERP'].map((chip) => (
            <button
              key={chip}
              type="button"
              onClick={() => {
                onSearchChange(chip);
                onExecuteSearch();
              }}
              className="px-2 py-0.5 rounded text-[11px] bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer"
            >
              {chip}
            </button>
          ))}
        </div>

      </div>
    </section>
  );
};
