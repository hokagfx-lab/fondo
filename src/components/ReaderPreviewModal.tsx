import { useState, useEffect } from 'react';
import { X, BookOpen, Sparkles, Feather, Bookmark, CheckCircle2 } from 'lucide-react';
import { SAMPLE_ARTICLES } from '../data/articles';
import { FeedArticle } from '../types';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export function ReaderPreviewModal({ isOpen, onClose }: Props) {
  const [selectedArticle, setSelectedArticle] = useState<FeedArticle>(SAMPLE_ARTICLES[0]);
  const [useSerifFont, setUseSerifFont] = useState(true);
  const [fontSize, setFontSize] = useState<'normal' | 'large'>('normal');
  const [readItems, setReadItems] = useState<string[]>([]);
  const [savedItems, setSavedItems] = useState<string[]>([]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const isRead = readItems.includes(selectedArticle.id);
  const isSaved = savedItems.includes(selectedArticle.id);

  const toggleRead = (id: string) => {
    setReadItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const toggleSaved = (id: string) => {
    setSavedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div
      id="reader-preview-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-xl animate-fade-in"
      onClick={onClose}
    >
      <div
        id="reader-preview-window"
        className="relative w-full max-w-5xl h-[88vh] bg-black border border-neutral-800 rounded-2xl sm:rounded-3xl shadow-2xl flex flex-col overflow-hidden text-neutral-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Window Bar */}
        <div className="h-14 px-5 border-b border-neutral-800/80 flex items-center justify-between bg-neutral-900/40">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-neutral-700/60" />
              <div className="w-3 h-3 rounded-full bg-neutral-700/60" />
              <div className="w-3 h-3 rounded-full bg-neutral-700/60" />
            </div>
            <div className="h-4 w-px bg-neutral-800 ml-2" />
            <div className="flex items-center gap-2 text-xs font-medium text-neutral-300">
              <span className="font-serif-italic text-sm text-white">Alcove</span>
              <span className="text-neutral-500 font-normal">/ Peaceful Stream</span>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            {/* Font settings */}
            <div className="flex items-center bg-neutral-900 border border-neutral-800 rounded-full px-2 py-1 text-xs">
              <button
                type="button"
                onClick={() => setUseSerifFont(true)}
                className={`px-2 py-0.5 rounded-full text-xs transition-colors cursor-pointer ${
                  useSerifFont ? 'bg-white/15 text-white font-serif' : 'text-neutral-400 hover:text-white'
                }`}
                title="Serif typography"
              >
                Serif
              </button>
              <button
                type="button"
                onClick={() => setUseSerifFont(false)}
                className={`px-2 py-0.5 rounded-full text-xs transition-colors cursor-pointer ${
                  !useSerifFont ? 'bg-white/15 text-white' : 'text-neutral-400 hover:text-white'
                }`}
                title="Sans typography"
              >
                Sans
              </button>
              <div className="w-px h-3 bg-neutral-800 mx-1" />
              <button
                type="button"
                onClick={() => setFontSize(fontSize === 'normal' ? 'large' : 'normal')}
                className="px-2 py-0.5 text-xs text-neutral-400 hover:text-white transition-colors cursor-pointer"
                title="Toggle font size"
              >
                {fontSize === 'normal' ? 'A' : 'A+'}
              </button>
            </div>

            <button
              id="close-reader-modal"
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Close reader preview"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Content split: Feed list on left (desktop), reader on right */}
        <div className="flex-1 flex overflow-hidden">
          {/* Feed Sidebar */}
          <div className="w-80 border-r border-neutral-800/80 hidden md:flex flex-col bg-neutral-950/40">
            <div className="p-4 border-b border-neutral-800/60 flex items-center justify-between text-xs text-neutral-400">
              <span className="uppercase tracking-wider text-[10px] text-neutral-500 font-semibold">
                Subscriptions
              </span>
              <span className="text-[11px] text-neutral-500 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-neutral-400" /> No unread numbers
              </span>
            </div>

            <div className="flex-1 overflow-y-auto divide-y divide-neutral-900/60 p-2">
              {SAMPLE_ARTICLES.map((article) => {
                const active = article.id === selectedArticle.id;
                const markedRead = readItems.includes(article.id);
                return (
                  <button
                    key={article.id}
                    type="button"
                    onClick={() => setSelectedArticle(article)}
                    className={`w-full text-left p-3 rounded-xl transition-all mb-1 cursor-pointer ${
                      active
                        ? 'bg-white/10 text-white'
                        : markedRead
                        ? 'opacity-50 hover:opacity-80 hover:bg-neutral-900/50 text-neutral-400'
                        : 'hover:bg-neutral-900/70 text-neutral-300'
                    }`}
                  >
                    <div className="flex items-center justify-between text-[11px] text-neutral-400 mb-1">
                      <span className="font-medium text-neutral-300">{article.source}</span>
                      <span>{article.date}</span>
                    </div>
                    <div className="text-sm font-medium leading-snug line-clamp-2">
                      {article.title}
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="p-3 border-t border-neutral-900 text-xs text-neutral-500 bg-neutral-950/60 flex items-center justify-between">
              <span>Local SQLite Store</span>
              <span className="text-neutral-400">Offline ready</span>
            </div>
          </div>

          {/* Reading Panes */}
          <div className="flex-1 overflow-y-auto p-6 sm:p-12 flex justify-center bg-black">
            <article
              className={`w-full max-w-2xl transition-all duration-300 ${
                useSerifFont ? 'font-serif text-[18px] sm:text-[20px]' : 'font-sans text-[15px] sm:text-[16px]'
              }`}
            >
              {/* Mobile article selector tabs */}
              <div className="md:hidden flex gap-2 overflow-x-auto pb-4 mb-6 border-b border-neutral-800 text-xs">
                {SAMPLE_ARTICLES.map((art) => (
                  <button
                    key={art.id}
                    onClick={() => setSelectedArticle(art)}
                    className={`px-3 py-1.5 rounded-full whitespace-nowrap text-xs transition-colors ${
                      selectedArticle.id === art.id
                        ? 'bg-white text-black'
                        : 'bg-neutral-900 text-neutral-400'
                    }`}
                  >
                    {art.source}
                  </button>
                ))}
              </div>

              {/* Meta bar */}
              <div className="flex items-center justify-between text-xs text-neutral-400 font-sans tracking-wide uppercase mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-white font-medium">{selectedArticle.source}</span>
                  <span>•</span>
                  <span>{selectedArticle.date}</span>
                  <span>•</span>
                  <span>{selectedArticle.readTime}</span>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => toggleSaved(selectedArticle.id)}
                    className={`flex items-center gap-1 text-xs transition-colors cursor-pointer ${
                      isSaved ? 'text-amber-300' : 'text-neutral-400 hover:text-white'
                    }`}
                    title="Bookmark"
                  >
                    <Bookmark className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">{isSaved ? 'Saved' : 'Save'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => toggleRead(selectedArticle.id)}
                    className={`flex items-center gap-1 text-xs transition-colors cursor-pointer ${
                      isRead ? 'text-emerald-400' : 'text-neutral-400 hover:text-white'
                    }`}
                    title="Mark as read"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">{isRead ? 'Finished' : 'Mark done'}</span>
                  </button>
                </div>
              </div>

              {/* Title */}
              <h1
                className={`font-normal text-white leading-tight mb-8 ${
                  useSerifFont
                    ? 'font-serif text-3xl sm:text-4xl lg:text-5xl'
                    : 'font-sans font-semibold text-2xl sm:text-3xl'
                }`}
              >
                {selectedArticle.title}
              </h1>

              {/* Content Paragraphs */}
              <div
                className={`space-y-6 leading-relaxed text-neutral-300 selection:bg-neutral-800 ${
                  fontSize === 'large' ? 'text-xl sm:text-2xl leading-loose' : ''
                }`}
              >
                {selectedArticle.content.map((para, idx) => (
                  <p key={idx} className="font-light tracking-wide text-neutral-300/95">
                    {para}
                  </p>
                ))}
              </div>

              {/* End of article serene signature */}
              <div className="mt-16 pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-neutral-500 font-sans gap-4">
                <div className="flex items-center gap-2">
                  <Feather className="w-4 h-4 text-neutral-400" />
                  <span>You have reached the end. Take a quiet breath.</span>
                </div>
                <button
                  type="button"
                  onClick={() => toggleRead(selectedArticle.id)}
                  className="px-4 py-2 rounded-full border border-neutral-800 text-neutral-300 hover:text-white hover:bg-neutral-900 transition-colors text-xs cursor-pointer flex items-center gap-1.5"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>{isRead ? 'Read again' : 'Done reading'}</span>
                </button>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
