import { FeedArticle } from '../types';

export const SAMPLE_ARTICLES: FeedArticle[] = [
  {
    id: 'alcove-manifesto',
    title: 'Why the Open Web Needs a Quiet Place',
    source: "John O'Nolan",
    author: "John O'Nolan",
    date: 'Dec 18, 2025',
    readTime: '4 min read',
    category: 'essay',
    summary: 'The modern internet was built around notification badges, infinite scrolls, and engagement loops designed to trigger anxiety. We can build something gentler.',
    content: [
      'The modern internet was built around notification badges, infinite scrolls, and engagement loops designed to trigger anxiety. We can build something gentler.',
      'When RSS first arrived, it represented a promise: you decide what you read, when you read it, and who you hear from. There were no algorithms deciding that anger generated more clicks than contemplation.',
      'Over the last decade, social media turned the web into a continuous slot machine. Even traditional RSS readers adopted the aesthetics of email inboxes: red badges, unread counters reaching into the thousands, and a feeling of perpetual falling behind.',
      'Alcove is an experiment in stillness. There are no counters shouting at you how many articles you missed while living your life. When you open it, there is just good writing waiting patiently for your attention.',
      'Everything runs locally on your device. Your subscriptions, your reading history, your preferences belong entirely to you.'
    ]
  },
  {
    id: 'slow-attention',
    title: 'The Art of Slow Attention',
    source: 'Craig Mod',
    author: 'Craig Mod',
    date: 'Dec 15, 2025',
    readTime: '6 min read',
    category: 'essay',
    summary: 'Walking through ancient cedar forests taught me that deep contemplation requires giving up the frantic compulsion to know everything simultaneously.',
    content: [
      'Walking through ancient cedar forests taught me that deep contemplation requires giving up the frantic compulsion to know everything simultaneously.',
      'A century ago, reading an essay was an afternoon ritual. You brewed tea, pulled open a chair beside the window, and gave a writer thirty uninterrupted minutes of your life.',
      'Today, we scan headlines on subway platforms between algorithmic push notifications. Our attention is fractured into slivers of seconds.',
      'To reclaim quiet attention is not to become a luddite; it is simply to recognize that human thinking requires negative space. A quiet page is an alcove for the soul.'
    ]
  },
  {
    id: 'small-joys',
    title: 'An Inventory of Small Joys on the Web',
    source: 'Robin Sloan',
    author: 'Robin Sloan',
    date: 'Dec 12, 2025',
    readTime: '3 min read',
    category: 'craft',
    summary: 'Small personal blogs, hand-coded websites, and quiet RSS feeds are quietly having the most vibrant renaissance in twenty years.',
    content: [
      'Small personal blogs, hand-coded websites, and quiet RSS feeds are quietly having the most vibrant renaissance in twenty years.',
      'People are tired of algorithmic feeds optimizing for viral outrage. More and more writers and thinkers are stepping off the algorithmic hamster wheel and back onto their own domains.',
      'Subscribing to a newsletter or an RSS feed is a deliberate act of friendship between reader and author. It says: I trust you with my attention.',
      'When you remove the noise, the web is once again a wondrous garden of ideas.'
    ]
  },
  {
    id: 'local-first',
    title: 'Why Local-First Software is the Future of Privacy',
    source: 'Evolu & SQLite Notes',
    author: 'Elena Rostova',
    date: 'Dec 09, 2025',
    readTime: '5 min read',
    category: 'technology',
    summary: 'When data is stored on your device and encrypted at rest, the incentives for surveillance capitalism vanish.',
    content: [
      'When data is stored on your device and encrypted at rest, the incentives for surveillance capitalism vanish.',
      'Cloud-only architectures forced users to rent access to their own memories and thoughts. If a service shuts down, your archives vanish with it.',
      'Local-first software changes the contract: your data stays on your machine, always accessible offline, and syncs peer-to-peer or via encrypted relays.',
      'Alcove embraces this foundation so your reading sanctuary remains yours forever.'
    ]
  }
];
