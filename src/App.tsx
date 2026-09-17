import { useState } from 'react';
import { Volume2, VolumeX, BookOpen } from 'lucide-react';
import { AmbientCanvas } from './components/AmbientCanvas';
import { HorizonGlow } from './components/HorizonGlow';
import { EarlyAccessForm } from './components/EarlyAccessForm';
import { ValuePropsSection } from './components/ValuePropsSection';
import { QuestionsSection } from './components/QuestionsSection';
import { BottomCTA } from './components/BottomCTA';
import { Footer } from './components/Footer';
import { ReaderPreviewModal } from './components/ReaderPreviewModal';
import { toggleAmbientSound } from './utils/audio';

export default function App() {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  const handleAudioToggle = () => {
    const nextState = !isAudioPlaying;
    const success = toggleAmbientSound(nextState);
    if (success || !nextState) {
      setIsAudioPlaying(nextState);
    }
  };

  return (
    <div className="relative min-h-screen bg-black text-white flex flex-col justify-between selection:bg-neutral-800 selection:text-white font-sans overflow-x-hidden">
      {/* Background celestial ambient particle canvas */}
      <AmbientCanvas />

      {/* Top Navigation Bar */}
      <header
        id="alcove-header"
        className="relative z-20 w-full max-w-6xl mx-auto px-6 py-6 sm:py-8 flex items-center justify-between"
      >
        <div className="flex items-center gap-3">
          <img
            src="https://framerusercontent.com/images/Z0uikyX7ZP9ZUDE1GGlLX2tIZtQ.png?width=460&height=498"
            alt="Alcove Emblem"
            className="w-7 h-7 sm:w-8 sm:h-8 object-contain filter drop-shadow-[0_0_12px_rgba(255,255,255,0.25)]"
            referrerPolicy="no-referrer"
          />
          <span className="font-serif-italic text-xl tracking-wide text-white">
            Alcove
          </span>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          {/* Ambient Soundscape toggle */}
          <button
            id="ambient-sound-toggle"
            type="button"
            onClick={handleAudioToggle}
            className={`p-2 rounded-full border transition-all text-xs flex items-center gap-1.5 cursor-pointer ${
              isAudioPlaying
                ? 'bg-white/15 border-white/30 text-white'
                : 'border-white/10 text-neutral-400 hover:text-white hover:border-white/20'
            }`}
            title={isAudioPlaying ? 'Mute ambient soundscape' : 'Play peaceful ambient soundscape'}
            aria-label={isAudioPlaying ? 'Mute ambient soundscape' : 'Play peaceful ambient soundscape'}
          >
            {isAudioPlaying ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
            <span className="hidden sm:inline text-[11px]">
              {isAudioPlaying ? 'Sound on' : 'Peaceful sound'}
            </span>
          </button>

          {/* Interactive Reader Preview button */}
          <button
            id="preview-reader-button"
            type="button"
            onClick={() => setIsPreviewOpen(true)}
            className="px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 text-xs text-white transition-all flex items-center gap-1.5 cursor-pointer hover:scale-102 active:scale-98"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Preview reader</span>
          </button>
        </div>
      </header>

      {/* Main Pitch Section */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 pt-12 pb-16 text-center max-w-5xl mx-auto w-full">
        {/* Alcove Icon / Emblem */}
        <div className="mb-6 sm:mb-8 flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-white/15 to-white/5 rounded-full blur-xl opacity-70 group-hover:opacity-100 transition duration-1000" />
            <img
              id="alcove-hero-logo"
              src="https://framerusercontent.com/images/Z0uikyX7ZP9ZUDE1GGlLX2tIZtQ.png?width=460&height=498"
              alt="Alcove Logo"
              className="relative w-14 h-14 sm:w-16 sm:h-16 object-contain filter drop-shadow-[0_0_24px_rgba(255,255,255,0.35)]"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Main Headline */}
        <h1
          id="hero-headline"
          className="text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-white mb-6 max-w-3xl leading-[1.14]"
        >
          <span className="text-[0.92em] font-light tracking-tight text-white inline-block align-baseline">
            A quiet place to{' '}
          </span>
          <span className="font-serif-italic text-[1.04em] text-neutral-100 italic inline-block align-baseline font-normal ml-1">
            see what's new.
          </span>
        </h1>

        {/* Subtitle */}
        <p
          id="hero-subtitle"
          className="text-base sm:text-lg text-neutral-400 max-w-xl mx-auto mb-10 leading-relaxed font-light"
        >
          Alcove is the best way to keep up with your favourite websites, newsletters, and subscriptions, without the noise.
        </p>

        {/* Early Access Form */}
        <EarlyAccessForm />

        {/* The Atmospheric Horizon Arc */}
        <HorizonGlow />

        {/* 3 Value Propositions: Pure text with icons next to them */}
        <ValuePropsSection />

        {/* Answer Questions / FAQ Section */}
        <QuestionsSection />

        {/* Bottom CTA Section */}
        <BottomCTA onOpenPreview={() => setIsPreviewOpen(true)} />
      </main>

      {/* Updated Footer */}
      <Footer onOpenPreview={() => setIsPreviewOpen(true)} />

      {/* Live Interactive Reader Preview Modal */}
      <ReaderPreviewModal
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
      />
    </div>
  );
}
