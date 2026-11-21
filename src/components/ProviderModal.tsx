import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Building, ShieldCheck, Loader2, ArrowRight } from 'lucide-react';
import { SERVICE_CATEGORIES, INDIAN_TECH_HUBS } from '../data/mockData';
import { UserSession } from '../types/auth';

interface ProviderModalProps {
  isOpen: boolean;
  onClose: () => void;
  userSession?: UserSession | null;
}

export const ProviderModal: React.FC<ProviderModalProps> = ({ isOpen, onClose, userSession }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState({
    agencyName: userSession?.companyName || '',
    website: '',
    category: 'AI & Automation',
    teamSize: '20–50 Engineers',
    location: 'Bengaluru',
    contactName: userSession?.name || '',
    email: userSession?.email || '',
    phone: '',
    minProjectThreshold: '₹15 Lakhs'
  });

  useEffect(() => {
    if (userSession) {
      setFormData((prev) => ({
        ...prev,
        contactName: prev.contactName || userSession.name,
        email: prev.email || userSession.email,
        agencyName: prev.agencyName || userSession.companyName || ''
      }));
    }
  }, [userSession, isOpen]);

  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!isOpen) return null;

  const validate = () => {
    const err: Record<string, string> = {};
    if (!formData.agencyName.trim()) err.agencyName = 'Agency name is required.';
    if (!formData.website.trim()) err.website = 'Company website is required.';
    if (!formData.contactName.trim()) err.contactName = 'Contact person name is required.';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      err.email = 'Valid corporate email is required.';
    }
    if (!formData.phone.trim() || formData.phone.length < 10) {
      err.phone = 'Valid 10-digit mobile number is required.';
    }
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1000);
  };

  const handleResetAndClose = () => {
    setIsSuccess(false);
    setErrors({});
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-xs">
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="p-5 sm:p-6 bg-[#0B1220] text-white flex items-center justify-between border-b border-slate-800">
          <div>
            <div className="text-xs font-mono text-cyan-400">HighValue Connect · Provider Network</div>
            <h3 className="text-lg font-bold text-white mt-0.5">
              {isSuccess ? 'Application Received' : 'Apply to Join as a Service Provider'}
            </h3>
          </div>
          <button
            onClick={handleResetAndClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto flex-1">
          {isSuccess ? (
            <div className="py-6 text-center space-y-5">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <h4 className="text-xl font-bold text-slate-900">
                  Partner Application Submitted
                </h4>
                <p className="mt-2 text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you for applying to the HighValue Connect provider marketplace. Our partner onboarding committee will review your portfolio case studies and reach out via {formData.email} within 48 hours.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-left text-xs text-slate-700 space-y-1.5">
                <div className="font-semibold text-slate-900">What to prepare for partner verification:</div>
                <p>• 2 references or case studies demonstrating delivery on ₹10L+ contracts</p>
                <p>• GSTIN or corporate entity registration details</p>
                <p>• Primary architect / delivery lead credentials</p>
              </div>

              <button
                onClick={handleResetAndClose}
                className="px-6 py-2.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-all cursor-pointer"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-100 text-xs text-blue-900 leading-normal">
                <strong>High-Value Lead Marketplace:</strong> As an approved agency partner, you receive targeted, qualified project briefs from verified enterprise buyers with confirmed budgets of ₹5 Lakhs to ₹1 Crore+.
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-800 mb-1">
                    Agency / Consultancy Name *
                  </label>
                  <input
                    type="text"
                    value={formData.agencyName}
                    onChange={(e) => setFormData({ ...formData, agencyName: e.target.value })}
                    placeholder="e.g. ApexCore Software"
                    className={`w-full px-3 py-2 text-xs bg-slate-50 border rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 ${
                      errors.agencyName ? 'border-rose-500' : 'border-slate-200'
                    }`}
                  />
                  {errors.agencyName && <p className="text-[11px] text-rose-500 mt-0.5">{errors.agencyName}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-800 mb-1">
                    Company Website / Portfolio *
                  </label>
                  <input
                    type="text"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    placeholder="https://youragency.com"
                    className={`w-full px-3 py-2 text-xs bg-slate-50 border rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 ${
                      errors.website ? 'border-rose-500' : 'border-slate-200'
                    }`}
                  />
                  {errors.website && <p className="text-[11px] text-rose-500 mt-0.5">{errors.website}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-800 mb-1">
                    Primary Service Focus
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 cursor-pointer"
                  >
                    {SERVICE_CATEGORIES.map((c) => (
                      <option key={c.id} value={c.title}>
                        {c.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-800 mb-1">
                    Primary Base / Hub
                  </label>
                  <select
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 cursor-pointer"
                  >
                    {INDIAN_TECH_HUBS.map((h) => (
                      <option key={h} value={h}>
                        {h}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-800 mb-1">
                    Technical Team Size
                  </label>
                  <select
                    value={formData.teamSize}
                    onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 cursor-pointer"
                  >
                    <option value="10–25 Engineers">10–25 Engineers</option>
                    <option value="25–50 Engineers">25–50 Engineers</option>
                    <option value="50–100 Engineers">50–100 Engineers</option>
                    <option value="100+ Engineers">100+ Engineers</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-800 mb-1">
                    Minimum Project Size Desired
                  </label>
                  <select
                    value={formData.minProjectThreshold}
                    onChange={(e) => setFormData({ ...formData, minProjectThreshold: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 cursor-pointer"
                  >
                    <option value="₹5 Lakhs">₹5 Lakhs</option>
                    <option value="₹10 Lakhs">₹10 Lakhs</option>
                    <option value="₹15 Lakhs">₹15 Lakhs</option>
                    <option value="₹25 Lakhs+">₹25 Lakhs+</option>
                  </select>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-800 mb-1">
                    Partner Contact *
                  </label>
                  <input
                    type="text"
                    value={formData.contactName}
                    onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                    placeholder="Founder / Partner"
                    className={`w-full px-3 py-2 text-xs bg-slate-50 border rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 ${
                      errors.contactName ? 'border-rose-500' : 'border-slate-200'
                    }`}
                  />
                  {errors.contactName && <p className="text-[11px] text-rose-500 mt-0.5">{errors.contactName}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-800 mb-1">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="founder@agency.com"
                    className={`w-full px-3 py-2 text-xs bg-slate-50 border rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 ${
                      errors.email ? 'border-rose-500' : 'border-slate-200'
                    }`}
                  />
                  {errors.email && <p className="text-[11px] text-rose-500 mt-0.5">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-800 mb-1">
                    Direct Phone (+91) *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className={`w-full px-3 py-2 text-xs bg-slate-50 border rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 ${
                      errors.phone ? 'border-rose-500' : 'border-slate-200'
                    }`}
                  />
                  {errors.phone && <p className="text-[11px] text-rose-500 mt-0.5">{errors.phone}</p>}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={handleResetAndClose}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-800 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 disabled:bg-slate-600 rounded-xl transition-all shadow-md cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      <span>Submitting Application...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Partner Application</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
