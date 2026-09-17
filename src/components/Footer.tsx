import { ArrowUp, BookOpen, Heart } from 'lucide-react';

interface FooterProps {
  onOpenPreview: () => void;
}

export function Footer({ onOpenPreview }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="alcove-footer"
      className="relative z-20 w-full border-t border-white/10 bg-black pt-16 pb-12 px-6 text-neutral-400"
    >
      <div className="max-w-5xl mx-auto">
        {/* Top footer row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-white/10">
          <div className="flex items-center gap-3">
            <img
              src="https://framerusercontent.com/images/Z0uikyX7ZP9ZUDE1GGlLX2tIZtQ.png?width=460&height=498"
              alt="Alcove Emblem"
              className="w-8 h-8 object-contain filter drop-shadow-[0_0_12px_rgba(255,255,255,0.25)]"
              referrerPolicy="no-referrer"
            />
            <div>
              <span className="font-serif-italic text-xl tracking-wide text-white block">
                Alcove
              </span>
              <span className="text-xs text-neutral-400 font-light">
                A quiet place to see what's new.
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-neutral-400">
            <button
              type="button"
              onClick={onOpenPreview}
              className="hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <BookOpen className="w-3.5 h-3.5 text-neutral-400" />
              <span>Preview Reader</span>
            </button>
            <span>•</span>
            <a
              id="twitter-link"
              href="https://x.com/alcovenews"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              @AlcoveNews
            </a>
            <span>•</span>
            <span className="text-neutral-400">Local-first & Private</span>
            <span>•</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-300 hover:text-white transition-all cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-neutral-400 gap-4">
          <div className="flex items-center gap-1">
            <span>Crafted for the open web with</span>
            <Heart className="w-3 h-3 text-neutral-400 fill-neutral-400 inline" />
            <span>and quiet contemplation.</span>
          </div>

          <div className="flex items-center gap-4">
            <span>© {new Date().getFullYear()} Alcove</span>
            <span>•</span>
            <span>Standard OPML Supported</span>
            <span>•</span>
            <span>Client-side Encrypted</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
