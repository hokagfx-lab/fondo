import { BellOff, Globe, ShieldCheck } from 'lucide-react';

export function ValuePropsSection() {
  const valueProps = [
    {
      id: 'prop-noise',
      icon: BellOff,
      title: 'Without the noise',
      description:
        'No unread counts, no red notification badges, and no algorithmic feeds competing for your attention. Your reading list waits patiently for when you have time.',
    },
    {
      id: 'prop-open-web',
      icon: Globe,
      title: 'The open web',
      description:
        'Keep up with any blog, newsletter, publication, YouTube channel, or podcast feed. Read whatever you love without being confined to closed social platforms.',
    },
    {
      id: 'prop-local-first',
      icon: ShieldCheck,
      title: 'Local-first & private',
      description:
        'Runs locally on your device with client-side encrypted SQLite storage. No tracking, no profiling, and zero personal data leaving your hands.',
    },
  ];

  return (
    <section
      id="alcove-value-propositions"
      className="w-full max-w-5xl mx-auto mt-24 sm:mt-32 px-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-14">
        {valueProps.map((prop) => {
          const Icon = prop.icon;
          return (
            <div
              key={prop.id}
              id={prop.id}
              className="flex flex-col text-left group"
            >
              {/* Icon placed next to or above pure text */}
              <div className="flex items-center gap-3 mb-3">
                <div className="text-white/80 group-hover:text-white transition-colors duration-200">
                  <Icon className="w-5 h-5 stroke-[1.75]" />
                </div>
                <h3 className="text-base sm:text-lg font-medium text-white tracking-tight">
                  {prop.title}
                </h3>
              </div>

              {/* Pure text description - no card containers, no borders */}
              <p className="text-sm text-neutral-400 font-light leading-relaxed pl-8 sm:pl-8">
                {prop.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
