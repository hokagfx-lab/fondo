export function HorizonGlow() {
  return (
    <div
      id="complete-circle-glow-container"
      className="pointer-events-none absolute top-4 sm:top-6 md:top-8 left-1/2 -translate-x-1/2 flex items-center justify-center -z-10 w-full max-w-full"
      aria-hidden="true"
    >
      {/* Deep atmospheric radial glow */}
      <div
        className="absolute w-[360px] sm:w-[580px] md:w-[700px] lg:w-[800px] h-[360px] sm:h-[580px] md:h-[700px] lg:h-[800px] opacity-35 blur-[90px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, rgba(255,255,255,0.2) 0%, rgba(210,225,245,0.06) 45%, transparent 75%)',
        }}
      />

      {/* Complete celestial circle - fully visible */}
      <div
        className="relative w-[310px] h-[310px] xs:w-[370px] xs:h-[370px] sm:w-[480px] sm:h-[480px] md:w-[580px] md:h-[580px] lg:w-[660px] lg:h-[660px] rounded-full border border-white/50 circle-glow bg-gradient-to-b from-white/[0.04] via-white/[0.015] to-transparent"
      >
        {/* Soft secondary halo ring */}
        <div className="absolute inset-0 rounded-full border border-white/30 blur-[2px] opacity-80" />

        {/* Delicate inner accent ring */}
        <div className="absolute inset-3 sm:inset-5 rounded-full border border-white/[0.12] opacity-70" />

        {/* Ambient radial lighting in core */}
        <div className="absolute inset-0 rounded-full circle-ambient" />
      </div>
    </div>
  );
}
