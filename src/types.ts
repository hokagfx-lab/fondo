export interface FeedArticle {
  id: string;
  title: string;
  source: string;
  author: string;
  date: string;
  readTime: string;
  summary: string;
  content: string[];
  category: 'essay' | 'technology' | 'design' | 'craft';
}

export interface WaitlistRecord {
  email: string;
  timestamp: number;
  queueNumber: number;
}
