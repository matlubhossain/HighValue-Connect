import React, { useState, useEffect } from 'react';
import { 
  X, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  Building2, 
  IndianRupee, 
  Calendar, 
  MapPin, 
  FileText, 
  Lock, 
  Sparkles,
  Loader2,
  Copy,
  Check
} from 'lucide-react';
import { Provider, SERVICE_CATEGORIES, INDIAN_TECH_HUBS } from '../data/mockData';
import { UserSession } from '../types/auth';

interface ProjectEnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedProvider?: Provider | null;
  userSession?: UserSession | null;
}

export const ProjectEnquiryModal: React.FC<ProjectEnquiryModalProps> = ({
  isOpen,
  onClose,
  preselectedProvider,
  userSession
}) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [refId, setRefId] = useState('');
  const [copied, setCopied] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    title: '',
    category: 'AI & Automation',
    description: '',
    budget: '₹15L – ₹35L',
    timeline: 'Within 30 Days',
    location: 'Bengaluru',
    companyName: userSession?.companyName || '',
    fullName: userSession?.name || '',
    email: userSession?.email || '',
    phone: '',
    requireNda: true
  });

  // Update when userSession changes
  useEffect(() => {
    if (userSession) {
      setFormData((prev) => ({
        ...prev,
        fullName: prev.fullName || userSession.name,
        email: prev.email || userSession.email,
        companyName: prev.companyName || userSession.companyName || ''
      }));
    }
  }, [userSession, isOpen]);

  // Errors state
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (preselectedProvider) {
      setFormData((prev) => ({
        ...prev,
        category: preselectedProvider.category,
        title: `Project enquiry for ${preselectedProvider.name}`
      }));
    }
  }, [preselectedProvider]);

  if (!isOpen) return null;

  const validateStep1 = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.title.trim()) {
      newErrors.title = 'Please provide a brief project title.';
    }
    if (!formData.description.trim() || formData.description.length < 20) {
      newErrors.description = 'Please describe your project scope in at least 20 characters.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    setErrors({});
    return true;
  };

  const validateStep3 = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Company / organization name is required.';
    }
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Contact person name is required.';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = 'Please provide a valid work email address.';
    }
    if (!formData.phone.trim() || formData.phone.length < 10) {
      newErrors.phone = 'Please provide a valid 10-digit mobile number.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (step === 1 && validateStep1()) setStep(2);
    else if (step === 2 && validateStep2()) setStep(3);
  };

  const handlePrev = () => {
    if (step === 3) setStep(2);
    else if (step === 2) setStep(1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep3()) return;

    setIsSubmitting(true);
    // Simulate matching engine submission
    setTimeout(() => {
      const randomCode = Math.floor(10000 + Math.random() * 90000);
      setRefId(`HVC-2026-${randomCode}`);
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  const handleCopyRef = () => {
    navigator.clipboard.writeText(refId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleResetAndClose = () => {
    setIsSuccess(false);
    setStep(1);
    setRefId('');
    setErrors({});
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-xs">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Modal Top Header */}
        <div className="p-5 sm:p-6 bg-[#0B1220] text-white flex items-center justify-between border-b border-slate-800">
          <div>
            <div className="text-xs font-mono text-cyan-400">HighValue Connect · Enterprise RFP Intake</div>
            <h3 className="text-lg font-bold text-white mt-0.5">
              {isSuccess ? 'Project Requirement Submitted' : 'Submit Your Project Requirements'}
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

        {/* Multi-step progress bar (if not finished) */}
        {!isSuccess && (
          <div className="px-6 py-3 bg-slate-50 border-b border-slate-200 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <span className={`w-5 h-5 rounded-full flex items-center justify-center font-bold text-[11px] ${step >= 1 ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-600'}`}>
                1
              </span>
              <span className={step === 1 ? 'font-bold text-slate-900' : 'text-slate-500'}>Scope</span>
            </div>
            <span className="text-slate-300">──</span>
            <div className="flex items-center gap-2">
              <span className={`w-5 h-5 rounded-full flex items-center justify-center font-bold text-[11px] ${step >= 2 ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-600'}`}>
                2
              </span>
              <span className={step === 2 ? 'font-bold text-slate-900' : 'text-slate-500'}>Budget & Hub</span>
            </div>
            <span className="text-slate-300">──</span>
            <div className="flex items-center gap-2">
              <span className={`w-5 h-5 rounded-full flex items-center justify-center font-bold text-[11px] ${step >= 3 ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-600'}`}>
                3
              </span>
              <span className={step === 3 ? 'font-bold text-slate-900' : 'text-slate-500'}>Contact</span>
            </div>
          </div>
        )}

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1">
          {isSuccess ? (
            /* Success confirmation screen */
            <div className="py-6 text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <h4 className="text-2xl font-bold text-slate-900">
                  Project Successfully Dispatched!
                </h4>
                <p className="mt-2 text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Your enterprise requirement has been queued in the HighValue Match Engine. Our technical advisors are shortlisting 2–3 matching providers right now.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 max-w-md mx-auto flex items-center justify-between">
                <div className="text-left">
                  <span className="text-[10px] uppercase font-mono text-slate-600 block">Requirement Reference ID</span>
                  <span className="text-base font-mono font-bold text-blue-600">{refId}</span>
                </div>
                <button
                  onClick={handleCopyRef}
                  className="px-3 py-1.5 text-xs font-semibold text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-100 flex items-center gap-1.5 cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-100 max-w-md mx-auto text-left text-xs text-blue-900 space-y-2">
                <div className="font-semibold text-blue-950 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                  <span>What happens next?</span>
                </div>
                <ul className="space-y-1 text-slate-700 list-disc list-inside">
                  <li>Technical advisory validation of brief within 24 hours</li>
                  <li>Direct confidential introduction to top 2–3 agency leads</li>
                  <li>You receive comparative technical and pricing proposals</li>
                </ul>
              </div>

              <div className="pt-2">
                <button
                  onClick={handleResetAndClose}
                  className="px-6 py-3 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all shadow-md cursor-pointer"
                >
                  Return to HighValue Connect
                </button>
              </div>
            </div>
          ) : (
            /* Multi-step Form Content */
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* STEP 1: Scope */}
              {step === 1 && (
                <div className="space-y-4">
                  {preselectedProvider && (
                    <div className="p-3 bg-blue-50 rounded-xl border border-blue-100 text-xs text-blue-900 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>
                        Requesting introduction with: <strong>{preselectedProvider.name}</strong> ({preselectedProvider.location})
                      </span>
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-semibold text-slate-800 mb-1">
                      Project Title or Objective *
                    </label>
                    <input
                      type="text"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      placeholder="e.g. Autonomous Customer Support LLM Agent, Core ERP Modernization"
                      className={`w-full px-3.5 py-2.5 text-sm bg-slate-50 border rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 ${
                        errors.title ? 'border-rose-500' : 'border-slate-200'
                      }`}
                    />
                    {errors.title && <p className="text-xs text-rose-500 mt-1">{errors.title}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-800 mb-1">
                      Primary Service Category *
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 cursor-pointer"
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
                      Detailed Project Scope & Desired Outcomes *
                    </label>
                    <textarea
                      rows={4}
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      placeholder="Explain your technical requirements, expected integrations, compliance constraints, and current stage of development..."
                      className={`w-full px-3.5 py-2.5 text-sm bg-slate-50 border rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 ${
                        errors.description ? 'border-rose-500' : 'border-slate-200'
                      }`}
                    />
                    {errors.description && <p className="text-xs text-rose-500 mt-1">{errors.description}</p>}
                    <p className="text-[11px] text-slate-600 mt-1">Minimum 20 characters.</p>
                  </div>
                </div>
              )}

              {/* STEP 2: Commercials & Timeline */}
              {step === 2 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-800 mb-1">
                      Target Project Budget (INR) *
                    </label>
                    <div className="grid grid-cols-2 gap-2.5">
                      {[
                        '₹5L – ₹15L',
                        '₹15L – ₹35L',
                        '₹35L – ₹75L',
                        '₹75L+'
                      ].map((budgetOption) => (
                        <button
                          key={budgetOption}
                          type="button"
                          onClick={() => setFormData({ ...formData, budget: budgetOption })}
                          className={`p-3 text-xs font-semibold rounded-xl border text-left transition-all cursor-pointer ${
                            formData.budget === budgetOption
                              ? 'bg-blue-50 border-blue-600 text-blue-900 ring-1 ring-blue-600'
                              : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                          }`}
                        >
                          {budgetOption}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-800 mb-1">
                      Target Start Timeline
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 cursor-pointer"
                    >
                      <option value="Immediately (Within 2 Weeks)">Immediately (Within 2 Weeks)</option>
                      <option value="Within 30 Days">Within 30 Days</option>
                      <option value="1 to 3 Months">1 to 3 Months</option>
                      <option value="Exploratory / Planning Stage">Exploratory / Planning Stage</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-800 mb-1">
                      Preferred Tech Hub / Delivery Model
                    </label>
                    <select
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 cursor-pointer"
                    >
                      {INDIAN_TECH_HUBS.map((hub) => (
                        <option key={hub} value={hub}>
                          {hub}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              )}

              {/* STEP 3: Company & Contact */}
              {step === 3 && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-800 mb-1">
                        Company / Organization Name *
                      </label>
                      <input
                        type="text"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        placeholder="e.g. Acme FinTech Labs"
                        className={`w-full px-3.5 py-2.5 text-sm bg-slate-50 border rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 ${
                          errors.companyName ? 'border-rose-500' : 'border-slate-200'
                        }`}
                      />
                      {errors.companyName && <p className="text-xs text-rose-500 mt-1">{errors.companyName}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-800 mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Rajesh Sharma"
                        className={`w-full px-3.5 py-2.5 text-sm bg-slate-50 border rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 ${
                          errors.fullName ? 'border-rose-500' : 'border-slate-200'
                        }`}
                      />
                      {errors.fullName && <p className="text-xs text-rose-500 mt-1">{errors.fullName}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-800 mb-1">
                        Corporate Work Email *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="rajesh@company.in"
                        className={`w-full px-3.5 py-2.5 text-sm bg-slate-50 border rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 ${
                          errors.email ? 'border-rose-500' : 'border-slate-200'
                        }`}
                      />
                      {errors.email && <p className="text-xs text-rose-500 mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-800 mb-1">
                        Mobile Number (+91) *
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className={`w-full px-3.5 py-2.5 text-sm bg-slate-50 border rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 ${
                          errors.phone ? 'border-rose-500' : 'border-slate-200'
                        }`}
                      />
                      {errors.phone && <p className="text-xs text-rose-500 mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <label className="flex items-start gap-2.5 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.requireNda}
                        onChange={(e) => setFormData({ ...formData, requireNda: e.target.checked })}
                        className="mt-1 rounded text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-xs text-slate-700 leading-normal">
                        <strong>Require mutual Non-Disclosure Agreement (NDA):</strong> matched service providers must sign our standard bilateral NDA prior to receiving proprietary source code or data schemas.
                      </span>
                    </label>
                  </div>
                </div>
              )}

              {/* Form Navigation Controls */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-slate-100 rounded-xl cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back</span>
                  </button>
                ) : (
                  <div />
                )}

                {step < 3 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all shadow-md shadow-blue-600/20 cursor-pointer"
                  >
                    <span>Next: {step === 1 ? 'Budget & Timeline' : 'Contact Details'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 disabled:bg-blue-400 rounded-xl transition-all shadow-md shadow-blue-600/30 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Matching Providers...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Project Brief</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                )}
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
