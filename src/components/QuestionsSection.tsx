import { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';

interface QuestionItem {
  id: string;
  question: string;
  answer: string;
}

const QUESTIONS: QuestionItem[] = [
  {
    id: 'q-what-is-alcove',
    question: 'What is Alcove?',
    answer:
      'Alcove is a peaceful RSS reader built for quiet contemplation. It brings together your favourite websites, blogs, substacks, and newsletters into a calm, focused reading space free from algorithmic noise, ads, and engagement-driven traps.',
  },
  {
    id: 'q-no-unread-counts',
    question: 'Why are there no unread counts or badges?',
    answer:
      'Traditional RSS readers and email apps treat unread articles like items on a high-pressure to-do list, generating guilt when numbers climb into the hundreds or thousands. Alcove removes all unread counts and urgency badges entirely. Your reading list waits patiently for when you have time, never demanding your immediate attention.',
  },
  {
    id: 'q-local-first-privacy',
    question: 'How does local-first storage and privacy work?',
    answer:
      'Alcove is architected around client-side SQLite instances powered by Evolu. Your subscriptions, saved articles, and reading history are stored locally on your machine and encrypted client-side. We cannot see what you read, and your reading habits are never logged, tracked, or monetized.',
  },
  {
    id: 'q-opml-import',
    question: 'Can I import my existing subscriptions (OPML)?',
    answer:
      'Yes. You can import your standard OPML file from Feedly, Feedbin, NetNewsWire, Inoreader, or any other reader in seconds. You can also export your entire subscription list at any time—you always retain full ownership of your data.',
  },
  {
    id: 'q-newsletters-youtube',
    question: 'Can I follow newsletters and YouTube channels too?',
    answer:
      'Yes. Any creator, publication, or platform that publishes an RSS, Atom, or JSON feed—including Ghost publications, Substack newsletters, independent personal blogs, YouTube channels, and podcasts—can be added directly to Alcove.',
  },
  {
    id: 'q-is-it-free',
    question: 'Is Alcove free to use?',
    answer:
      'Alcove is completely free to use during our early access beta period. Our mission is to champion the open, peaceful web with craft and sustainable software.',
  },
  {
    id: 'q-early-access-timeline',
    question: 'When will early access invitations roll out?',
    answer:
      'Invitations are being sent in gentle, continuous cohorts to ensure stability and gather direct feedback from early readers. Sign up with your email at the top of the page to reserve your position on the waitlist.',
  },
];

export function QuestionsSection() {
  // First question open by default for immediate preview
  const [openIds, setOpenIds] = useState<string[]>(['q-what-is-alcove']);

  const toggleQuestion = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section
      id="alcove-questions-section"
      className="w-full max-w-3xl mx-auto mt-28 sm:mt-36 px-6 text-left"
    >
      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-neutral-400 mb-4">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Questions & Answers</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-normal text-white tracking-tight mb-3">
          <span>A few things you </span>
          <span className="font-serif-italic italic text-neutral-200">
            might want to know.
          </span>
        </h2>
        <p className="text-sm text-neutral-400 font-light max-w-lg mx-auto">
          Everything you need to know about the reader, our local-first architecture, and early access.
        </p>
      </div>

      {/* Accordion Questions List */}
      <div className="divide-y divide-white/10 border-t border-b border-white/10">
        {QUESTIONS.map((item) => {
          const isOpen = openIds.includes(item.id);
          return (
            <div key={item.id} id={item.id} className="py-5 sm:py-6">
              <button
                type="button"
                onClick={() => toggleQuestion(item.id)}
                className="w-full flex items-center justify-between text-left gap-4 group cursor-pointer focus:outline-none"
                aria-expanded={isOpen}
              >
                <span className="text-base sm:text-lg font-medium text-neutral-200 group-hover:text-white transition-colors duration-150">
                  {item.question}
                </span>
                <span
                  className={`p-1 rounded-full text-neutral-400 group-hover:text-white transition-transform duration-200 shrink-0 ${
                    isOpen ? 'rotate-180 text-white' : ''
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </span>
              </button>

              {isOpen && (
                <div className="pt-3 pr-6 sm:pr-8 text-sm text-neutral-400 font-light leading-relaxed animate-fade-in">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Still have questions hint */}
      <div className="mt-8 text-center flex flex-col sm:flex-row items-center justify-center gap-2 text-xs text-neutral-400">
        <span className="flex items-center gap-1.5">
          <MessageSquare className="w-3.5 h-3.5 text-neutral-400" />
          Have another question or suggestion?
        </span>
        <a
          href="https://x.com/alcovenews"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:underline underline-offset-4 font-medium"
        >
          Ask us on X @AlcoveNews
        </a>
      </div>
    </section>
  );
}
