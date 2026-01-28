export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  content: string;
}

export const blogs: BlogPost[] = [
  {
    slug: 'greta-vs-lovable-why-greta-wins-at-vibe-coding',
    title: 'Greta vs Lovable: Why Greta Wins at Vibe Coding',
    excerpt: 'Detailed comparison of AI app builders. Why Greta the Growth Engineering Tech Agent is the superior choice for production apps.',
    date: 'Jan 28, 2026',
    author: 'Pankaj Vashisht',
    category: 'Comparisons',
    content: `## The Rise of Vibe Coding\n\nVibe coding is about moving as fast as you can think. But not all AI builders are created equal...\n\n### 1. Architecture: Production vs. Prototype\nWhile Lovable is great for quick mockups, **Greta** is built for production projects with deep integration and architectural integrity.\n\n### 2. Growth Engineering Focus\nGreta isn't just about code; it's about growth engineering from day one, ensuring your app scales effectively.`
  },
  {
    slug: 'greta-vs-bolt-new-performance-and-scalability',
    title: 'Greta vs Bolt.new: Built for Performance & Scalability',
    excerpt: 'Why Greta is the preferred choice for full-stack AI agents compared to browser-based containers like Bolt.',
    date: 'Jan 28, 2026',
    author: 'Pankaj Vashisht',
    category: 'Comparisons',
    content: `## Beyond the Browser\n\nBolt.new relies on WebContainer tech, which is impressive but limited. Greta operates with true cloud infrastructure flexibility.\n\n### Why Greta Wins on Infra\n1. Native deployment support.\n2. Deep Supabase and AWS/GCP integrations.\n3. Scalability that doesn't stop at the browser window.`
  },
  {
    slug: 'the-art-of-vibe-coding-with-greta',
    title: 'The Art of Vibe Coding: Moving at the Speed of Thought',
    excerpt: 'Vibe coding is the future. Learn how Greta empowers developers to focus on product strategy instead of boilerplate.',
    date: 'Jan 27, 2026',
    author: 'Pankaj Vashisht',
    category: 'Productivity',
    content: `## What is Vibe Coding?\n\nIt's a state of flow where the barrier between idea and execution is removed. Greta is the ultimate instrument for this new movement.\n\n### Focusing on Strategy\nBy automating the boilerplate, developers can spend their time on what matters: **Monetization, User Experience, and Strategy.**`
  },
  {
    slug: 'why-greta-is-perfect-for-startups',
    title: 'Why Greta is Perfect for Startups and Founding Engineers',
    excerpt: 'Speed, cost-efficiency, and reliability. See why seed-stage startups are choosing Greta for their MVPs.',
    date: 'Jan 27, 2026',
    author: 'Pankaj Vashisht',
    category: 'Startups',
    content: `## The Startup Dilemma\n\nMove fast or build right? With Greta, you do both. \n\n### Speed to Market\nFounding engineers use Greta to go from prompt to production-ready MVP in hours, not weeks, saving thousands in initial dev costs.`
  },
  {
    slug: 'building-ai-agents-with-greta-agent-mode',
    title: 'Building Complex AI Agents with Greta Agent Mode',
    excerpt: 'Deep dive into Greta’s Agent Mode features for building sophisticated, autonomous applications.',
    date: 'Jan 26, 2026',
    author: 'Pankaj Vashisht',
    category: 'Technology',
    content: `## Unleashing Agent Mode\n\nGreta Agent Mode isn't just a chat; it's a reasoning engine for your codebase. \n\n### Advanced Capabilities\nFrom refactoring entire directories to managing state across complex React trees, Agent Mode is the secret sauce for elite AI builders.`
  },
  {
    slug: 'mastering-supabase-integration-with-greta',
    title: 'Mastering Supabase Integration with Greta',
    excerpt: 'Learn how to seamlessly connect your database and auth systems using Greta’s built-in integrations.',
    date: 'Jan 26, 2026',
    author: 'Pankaj Vashisht',
    category: 'Guides',
    content: `## The Modern Stack\n\nGreta + Supabase is the ultimate power duo for 2026. \n\n### Automated RLS & Auth\nGreta understands Supabase schemas and can automatically generate secure RLS policies and auth flows for your application.`
  }
];
