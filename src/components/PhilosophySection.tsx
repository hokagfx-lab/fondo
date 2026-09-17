import { ShieldCheck, EyeOff, Radio, Compass } from 'lucide-react';

export function PhilosophySection({ onOpenPreview }: { onOpenPreview: () => void }) {
  const pillars = [
    {
      icon: EyeOff,
      title: 'No Anxiety Counters',
      description: 'Zero red badges, zero guilt. Read whenever you wish without a counter telling you how far behind you are.',
    },
    {
      icon: ShieldCheck,
      title: 'Local-First & Private',
      description: 'Runs on local SQLite storage with client-side encryption. Your reading habits remain entirely yours.',
    },
    {
      icon: Radio,
      title: 'The Open Internet',
      description: 'Subscribe to any blog, substack, newsletter, or publication. No corporate algorithms curating your thoughts.',
    },
    {
      icon: Compass,
      title: 'Pure Typography',
      description: 'Designed around timeless editorial typefaces, gentle contrast, and natural pacing for contemplation.',
    },
  ];

  return (
    <section id="alcove-philosophy" className="w-full max-w-4xl mx-auto mt-28 sm:mt-36 px-4">
      <div className="text-center mb-12">
        <h2 className="font-serif-italic text-2xl sm:text-3xl text-neutral-200 mb-3">
          Designed for quiet contemplation.
        </h2>
        <p className="text-sm text-neutral-400 max-w-xl mx-auto leading-relaxed">
          The web was made for independent writers and curious readers. Alcove strips away the algorithmic gamification to return to what matters.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {pillars.map((pillar, i) => {
          const Icon = pillar.icon;
          return (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-neutral-300 mb-4">
                  <Icon className="w-4 h-4" />
                </div>
                <h3 className="text-base font-medium text-white mb-2">{pillar.title}</h3>
                <p className="text-xs text-neutral-400 leading-relaxed">{pillar.description}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-10 text-center">
        <button
          type="button"
          onClick={onOpenPreview}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 text-xs text-white font-medium transition-all hover:scale-102 active:scale-98 cursor-pointer"
        >
          <span>Explore reader preview</span>
          <span className="text-neutral-400 font-serif-italic">→</span>
        </button>
      </div>
    </section>
  );
}
