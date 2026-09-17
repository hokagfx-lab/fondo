import React, { useState, useEffect } from 'react';
import { ArrowRight, Check, Sparkles } from 'lucide-react';
import { WaitlistRecord } from '../types';

export function EarlyAccessForm() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [queuePos, setQueuePos] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('alcove_early_access');
      if (saved) {
        const record: WaitlistRecord = JSON.parse(saved);
        setSubmitted(true);
        setEmail(record.email);
        setQueuePos(record.queueNumber);
      }
    } catch {
      // Ignore localStorage errors
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const trimmed = email.trim();
    if (!trimmed || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setError('Please enter a valid email address');
      return;
    }

    setLoading(true);

    setTimeout(() => {
      const assignedQueue = Math.floor(Math.random() * 200) + 1420;
      const record: WaitlistRecord = {
        email: trimmed,
        timestamp: Date.now(),
        queueNumber: assignedQueue,
      };

      try {
        localStorage.setItem('alcove_early_access', JSON.stringify(record));
      } catch {
        // Safe fallback
      }

      setLoading(false);
      setSubmitted(true);
      setQueuePos(assignedQueue);
    }, 600);
  };

  const handleReset = () => {
    try {
      localStorage.removeItem('alcove_early_access');
    } catch {
      // Safe fallback
    }
    setSubmitted(false);
    setEmail('');
    setQueuePos(null);
  };

  return (
    <div id="early-access-section" className="w-full max-w-md mx-auto text-center">
      <p className="text-xs sm:text-sm text-neutral-400 font-normal tracking-wide mb-3">
        Sign up for early access. No spam. No jibberjabber.
      </p>

      {submitted ? (
        <div
          id="early-access-confirmed"
          className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md text-left transition-all duration-300"
        >
          <div className="flex items-center gap-2.5 text-white mb-2">
            <div className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center text-white">
              <Check className="w-3.5 h-3.5" />
            </div>
            <span className="text-sm font-medium">You’re on the waitlist</span>
            {queuePos && (
              <span className="ml-auto text-xs px-2.5 py-0.5 rounded-full bg-white/10 text-neutral-300 font-mono">
                #{queuePos}
              </span>
            )}
          </div>
          <p className="text-xs text-neutral-400 leading-relaxed pl-8">
            We’ve saved <span className="text-neutral-200">{email}</span>. A quiet notification will arrive when your spot opens.
          </p>
          <div className="mt-4 pt-3 border-t border-white/5 pl-8 flex items-center justify-between">
            <span className="text-[11px] text-neutral-500">Local-first & private</span>
            <button
              type="button"
              onClick={handleReset}
              className="text-[11px] text-neutral-400 hover:text-white underline underline-offset-4 transition-colors cursor-pointer"
            >
              Use different email
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="relative flex flex-col gap-2">
          <div className="relative flex items-center">
            <input
              id="waitlist-email-input"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (error) setError(null);
              }}
              placeholder="Your email..."
              aria-label="Email address for early access"
              disabled={loading}
              className="w-full h-12 pl-4 pr-32 bg-black/40 text-sm text-white placeholder:text-neutral-500 rounded-full border border-neutral-800 hover:border-neutral-700 focus:outline-none focus:border-white/40 focus:ring-1 focus:ring-white/20 transition-all duration-200"
            />
            <button
              id="waitlist-submit-button"
              type="submit"
              disabled={loading}
              className="absolute right-1.5 top-1.5 bottom-1.5 px-4 rounded-full bg-white text-black text-xs font-medium hover:bg-neutral-200 active:scale-98 transition-all flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
            >
              {loading ? (
                <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
              ) : (
                <>
                  <span>Join waitlist</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </>
              )}
            </button>
          </div>

          {error && (
            <p className="text-xs text-rose-400 text-left pl-3 animate-fade-in">
              {error}
            </p>
          )}

          <div className="flex items-center justify-center gap-4 mt-2 text-[11px] text-neutral-500">
            <span className="inline-flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-neutral-400" /> Free during beta
            </span>
            <span>•</span>
            <span>No tracking</span>
            <span>•</span>
            <span>No algorithm</span>
          </div>
        </form>
      )}
    </div>
  );
}
