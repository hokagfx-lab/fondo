import { BookOpen, Sparkles } from 'lucide-react';

interface Props {
  onOpenPreview: () => void;
}

export function BottomCTA({ onOpenPreview }: Props) {
  const scrollToWaitlist = () => {
    const input = document.getElementById('waitlist-email-input');
    if (input) {
      input.scrollIntoView({ behavior: 'smooth', block: 'center' });
      input.focus();
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="bottom-cta-section"
      className="w-full max-w-4xl mx-auto my-28 sm:my-36 px-6 text-center"
    >
      <div className="relative p-8 sm:p-12 rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.03] to-transparent overflow-hidden">
        {/* Subtle background glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-white/5 blur-3xl rounded-full pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative z-10 flex flex-col items-center">
          <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6">
            <Sparkles className="w-5 h-5 text-neutral-300" />
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-white mb-4 tracking-tight">
            <span>Ready for a </span>
            <span className="font-serif-italic italic text-neutral-200">
              calmer reading experience?
            </span>
          </h2>

          <p className="text-sm text-neutral-400 font-light max-w-md mx-auto mb-8 leading-relaxed">
            Reserve your early access spot today, or step inside the reader preview to experience zero-guilt reading right now.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
            <button
              type="button"
              onClick={scrollToWaitlist}
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-white text-black font-medium text-xs hover:bg-neutral-200 active:scale-98 transition-all cursor-pointer shadow-[0_0_20px_rgba(255,255,255,0.2)]"
            >
              Join the early access waitlist
            </button>

            <button
              type="button"
              onClick={onOpenPreview}
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-medium transition-all flex items-center justify-center gap-2 cursor-pointer hover:scale-102 active:scale-98"
            >
              <BookOpen className="w-4 h-4 text-neutral-300" />
              <span>Preview reader</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
