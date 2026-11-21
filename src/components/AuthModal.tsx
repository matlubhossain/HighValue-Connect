import React, { useState } from 'react';
import { X, Lock, Mail, ArrowRight, ShieldCheck, Check, Sparkles, Building2, User, LogOut } from 'lucide-react';
import { UserRole, UserSession, DEMO_FIRST_USERS } from '../types/auth';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenEnquiry: () => void;
  onOpenProviderModal: () => void;
  userSession: UserSession | null;
  onLogin: (session: UserSession) => void;
  onLogout: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  onOpenEnquiry,
  onOpenProviderModal,
  userSession,
  onLogin,
  onLogout
}) => {
  const [role, setRole] = useState<UserRole>('client');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isRegister, setIsRegister] = useState(false);

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    const newSession: UserSession = {
      id: `user-${Date.now()}`,
      name: name.trim() || email.split('@')[0].replace(/[._-]/g, ' '),
      email: email.trim(),
      role: role,
      companyName: role === 'client' ? 'Apex Enterprise Partner' : 'Cognitive Scale Agency',
      title: role === 'client' ? 'Technology Director' : 'Principal Consultant',
      isFirstUser: true,
      joinedAt: new Date().toISOString()
    };

    onLogin(newSession);
    onClose();
  };

  const handleQuickSignIn = (preset: UserSession) => {
    onLogin(preset);
    onClose();
  };

  const handleSignOut = () => {
    onLogout();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-xs">
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
        
        {/* Header */}
        <div className="p-5 bg-[#0B1220] text-white flex items-center justify-between border-b border-slate-800">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-mono text-cyan-400">
              <Sparkles className="w-3.5 h-3.5" />
              <span>HighValue Connect Portal</span>
            </div>
            <h3 className="text-lg font-bold text-white mt-0.5">
              {userSession ? 'Active User Profile' : isRegister ? 'Join as First User' : 'Sign In to Portal'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close auth modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          {userSession ? (
            <div className="py-2 space-y-4">
              <div className="text-center">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-400 text-white font-bold text-lg mx-auto flex items-center justify-center shadow-lg shadow-blue-500/20">
                  {userSession.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                </div>
                <div className="mt-3">
                  <div className="flex items-center justify-center gap-1.5">
                    <h4 className="text-base font-bold text-slate-900">{userSession.name}</h4>
                    {userSession.isFirstUser && (
                      <span className="px-2 py-0.5 bg-cyan-100 text-cyan-800 border border-cyan-300 text-[10px] font-bold rounded-full">
                        First User
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5">{userSession.email}</p>
                  <p className="text-xs font-medium text-slate-600 mt-0.5">
                    {userSession.companyName} · <span className="capitalize text-blue-600">{userSession.role}</span>
                  </p>
                </div>
              </div>

              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-600 space-y-2">
                <div className="font-semibold text-slate-800">Quick Actions:</div>
                <button
                  onClick={() => {
                    onClose();
                    onOpenEnquiry();
                  }}
                  className="w-full py-2 px-3 text-left font-medium text-blue-600 hover:bg-blue-50 rounded-lg transition-colors flex items-center justify-between"
                >
                  <span>→ Submit New Project Requirement</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => {
                    onClose();
                    onOpenProviderModal();
                  }}
                  className="w-full py-2 px-3 text-left font-medium text-blue-600 hover:bg-blue-50 rounded-lg transition-colors flex items-center justify-between"
                >
                  <span>→ Review Lead Marketplace (Provider)</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="pt-2 flex gap-2">
                <button
                  type="button"
                  onClick={handleSignOut}
                  className="flex-1 py-2.5 text-xs font-semibold text-rose-600 bg-rose-50 hover:bg-rose-100 border border-rose-200 rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>Sign Out</span>
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <div>
              {/* Role switcher tabs */}
              <div className="flex p-1 bg-slate-100 rounded-xl mb-4">
                <button
                  type="button"
                  onClick={() => setRole('client')}
                  className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                    role === 'client'
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  Enterprise Client
                </button>
                <button
                  type="button"
                  onClick={() => setRole('provider')}
                  className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                    role === 'provider'
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  Service Provider
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleLogin} className="space-y-3.5">
                {isRegister && (
                  <div>
                    <label className="block text-xs font-semibold text-slate-800 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Aarav Sharma"
                      className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 text-slate-900"
                    />
                  </div>
                )}

                <div>
                  <label className="block text-xs font-semibold text-slate-800 mb-1">
                    {role === 'client' ? 'Corporate Work Email' : 'Partner Account Email'}
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={role === 'client' ? 'name@enterprise.in' : 'lead@agency.in'}
                    className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 text-slate-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-800 mb-1">
                    Password
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••••••"
                    className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 text-slate-900"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 rounded-xl transition-all shadow-md shadow-blue-600/20 cursor-pointer"
                >
                  {isRegister ? 'Register & Join Website' : 'Sign In & Join Website'}
                </button>
              </form>

              <div className="mt-3 text-center">
                <button
                  type="button"
                  onClick={() => setIsRegister(!isRegister)}
                  className="text-xs text-blue-600 hover:underline cursor-pointer"
                >
                  {isRegister ? 'Already have an account? Sign in' : 'First time here? Register as first user'}
                </button>
              </div>

              {/* 1-Click Fast Demo Credentials */}
              <div className="mt-5 pt-4 border-t border-slate-100">
                <span className="text-[11px] text-slate-400 block mb-2 font-medium">
                  Instant 1-Click First User Access:
                </span>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => handleQuickSignIn(DEMO_FIRST_USERS[0])}
                    className="py-1.5 px-2 text-[11px] font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors text-center cursor-pointer truncate"
                  >
                    Founding Client
                  </button>
                  <button
                    type="button"
                    onClick={() => handleQuickSignIn(DEMO_FIRST_USERS[1])}
                    className="py-1.5 px-2 text-[11px] font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors text-center cursor-pointer truncate"
                  >
                    Founding Provider
                  </button>
                </div>
              </div>

            </div>
          )}
        </div>

      </div>
    </div>
  );
};
