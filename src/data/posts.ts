import type { Posts } from './types';

export const posts: Posts = [
  {
    id: '4',
    title: 'Getting Started with React: A Developer’s First Impressions',
    excerpt: 'My journey of learning React — how it shifted my mindset from static pages to dynamic, component-driven UIs.',
    date: '2025-06-01',
    tags: ['react', 'frontend', 'javascript'],
    slug: '/blog/getting-started-with-react',
    content: `
      <h2>Understanding React’s Core Idea</h2>
      <p>Before React, I used to structure websites like a pile of HTML, CSS, and jQuery scripts. It worked — until things got messy. React introduced me to <strong>component-based architecture</strong>, where everything is reusable, modular, and easier to reason about.</p>

      <h3>Why React Clicked for Me</h3>
      <ul>
        <li><strong>Declarative UI:</strong> Instead of telling the browser how to do things, I just describe <em>what</em> I want the UI to look like.</li>
        <li><strong>Reusable Components:</strong> A button, modal, or input can live as its own piece — no more spaghetti code.</li>
        <li><strong>State Management:</strong> Data flows predictably, making debugging simpler.</li>
      </ul>

      <h3>The Learning Curve</h3>
      <p>JSX looked weird at first — mixing HTML and JS felt wrong. But once I understood it’s just syntactic sugar for creating UI logic, everything clicked.</p>

      <h3>Pro Tips for Beginners</h3>
      <ol>
        <li>Think in components — every UI piece should serve a single purpose.</li>
        <li>Use the React DevTools to inspect component trees and state.</li>
        <li>Understand the difference between props and state early on.</li>
      </ol>

      <p>React didn’t just make building apps easier — it changed the way I <em>think</em> about building user interfaces.</p>
    `,
  },
  {
    id: '5',
    title: 'Next.js: The React Framework That Changed My Workflow',
    excerpt: 'How Next.js simplified my React projects with file-based routing, server rendering, and better developer experience.',
    date: '2025-07-20',
    tags: ['nextjs', 'react', 'ssr'],
    slug: '/blog/nextjs-changed-my-workflow',
    content: `
      <h2>Why Next.js?</h2>
      <p>After working on a few pure React projects, I hit the usual walls — routing setup, SEO issues, and deployment headaches. Then I tried <strong>Next.js</strong> and instantly felt like I’d leveled up.</p>

      <h3>What Makes Next.js Different</h3>
      <ul>
        <li><strong>File-based Routing:</strong> No more react-router configs. Just create a file and you’ve got a route.</li>
        <li><strong>SSR and SSG:</strong> Better SEO and faster page loads out of the box.</li>
        <li><strong>Built-in API Routes:</strong> A mini backend right inside your frontend project.</li>
        <li><strong>Optimized Deployments:</strong> Works flawlessly with Vercel and static exports.</li>
      </ul>

      <h3>My Typical Setup</h3>
      <pre><code>npx create-next-app@latest my-site --typescript --tailwind --app</code></pre>
      <p>I then configure <code>ESLint</code>, <code>Prettier</code>, and my folder structure for components, hooks, and utils.</p>

      <h3>Key Takeaways</h3>
      <ol>
        <li>SSR isn’t scary — it just makes your site more powerful.</li>
        <li>Use dynamic routes to make scalable page structures.</li>
        <li>Learn about <code>getStaticProps</code> and <code>getServerSideProps</code> — they’re game changers.</li>
      </ol>

      <p>Next.js gave me production-grade tools while keeping development fast and enjoyable. It’s now my default React setup for almost everything.</p>
    `,
  },
  {
    id: '6',
    title: 'State Management in React: From Redux to Zustand',
    excerpt: 'How I moved from Redux to simpler solutions like Zustand and learned to manage state more effectively.',
    date: '2025-08-08',
    tags: ['react', 'zustand', 'redux', 'state-management'],
    slug: '/blog/state-management-redux-zustand',
    content: `
      <h2>The State Management Struggle</h2>
      <p>When my React projects started growing, prop drilling became a nightmare. Redux was my first solution — powerful, but heavy. Over time, I found lighter, more modern tools like <strong>Zustand</strong> and <strong>Jotai</strong>.</p>

      <h3>Redux: The Classic</h3>
      <p>Redux was revolutionary. It taught me about predictable state updates and single sources of truth. But it came with a lot of boilerplate — reducers, actions, constants, and store setup.</p>

      <h3>Zustand: The Modern Simplicity</h3>
      <p>Zustand felt like fresh air. It’s just a few lines of code and gives you global state that feels as simple as using <code>useState</code>.</p>
      <pre><code>import { create } from 'zustand'

const useStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}))</code></pre>

      <h3>When to Choose What</h3>
      <ul>
        <li><strong>Redux:</strong> Large-scale apps, complex business logic, time travel debugging.</li>
        <li><strong>Zustand:</strong> Smaller projects, simplicity, or when you just want state without ceremony.</li>
        <li><strong>React Context:</strong> For lightweight state or themes.</li>
      </ul>

      <h3>Final Thoughts</h3>
      <p>State management isn’t about picking the “best” tool — it’s about using the one that fits your app’s scale. These days, I use Zustand for most side projects and Redux Toolkit for bigger client apps.</p>
    `,
  },
];

export default posts;
