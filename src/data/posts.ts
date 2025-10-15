import type { Posts } from './types';

export const posts: Posts = [
  {
    id: '1',
    title: 'Designing for Humans: Micro-interactions',
    excerpt: 'How tiny transitions and micro-interactions make interfaces feel alive. Tips, patterns and accessibility notes.',
    date: '2025-07-10',
    tags: ['design', 'ux'],
    slug: '/blog/designing-for-humans-micro-interactions',
  },
  {
    id: '2',
    title: 'From Idea to Production: My React + Next.js Workflow',
    excerpt: 'A practical walkthrough of a lean dev workflow using Next.js, TypeScript and optimized builds.',
    date: '2025-05-02',
    tags: ['nextjs', 'react', 'dev'],
    slug: '/blog/idea-to-production-nextjs',
  },
  {
    id: '3',
    title: 'Animating with Purpose: Motion in Interfaces',
    excerpt: 'When to add motion, when to avoid it, and how to keep performance smooth on low-end devices.',
    date: '2025-03-14',
    tags: ['animation', 'performance'],
    slug: '/blog/animating-with-purpose',
  },
];

export default posts;
