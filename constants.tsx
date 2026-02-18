
import React from 'react';
import { Settings, Globe, PenTool, CheckCircle, Search, Rocket, MessageSquare, Database, Layout, ShieldCheck, Zap } from 'lucide-react';
import { Tool, Service, PortfolioItem } from './types';

// TOOLS SECTION: Update URLs or names here
export const TOOLS: Tool[] = [
  { name: 'Canva', logo: 'https://cdn.simpleicons.org/canva/000000' },
  { name: 'CapCut', logo: 'https://cdn.simpleicons.org/capcut/000000' },
  { name: 'Google Workspace', logo: 'https://cdn.simpleicons.org/google/000000' },
  { name: 'Kajabi', logo: 'https://cdn.simpleicons.org/kajabi/000000' },
  { name: 'Active Campaign', logo: 'https://cdn.simpleicons.org/activecampaign/000000' },
  { name: 'Squarespace', logo: 'https://cdn.simpleicons.org/squarespace/000000' },
  { name: 'GoHighLevel', logo: 'https://cdn.simpleicons.org/gohighlevel/000000' },
  { name: 'WordPress', logo: 'https://cdn.simpleicons.org/wordpress/000000' },
  { name: 'Monday.com', logo: 'https://cdn.simpleicons.org/mondaydotcom/000000' },
  { name: 'Trello', logo: 'https://cdn.simpleicons.org/trello/000000' },
  { name: 'Meta Suite', logo: 'https://cdn.simpleicons.org/meta/000000' },
  { name: 'Notion', logo: 'https://cdn.simpleicons.org/notion/000000' },
  { name: 'AI Tools', logo: 'https://cdn.simpleicons.org/openai/000000' }
];

// SERVICES SECTION
export const SERVICES: Service[] = [
  {
    id: 'operations',
    title: 'Operations & Course Support',
    description: 'Expert-level Kajabi setup, course backend management, and Active Campaign automation to streamline your product delivery.',
    icon: <Settings className="w-5 h-5" />
  },
  {
    id: 'marketing',
    title: 'Digital Marketing & SEO',
    description: 'Strategic content strategy and SEO optimization. I build keyword-rich frameworks that improve visibility and authority.',
    icon: <Search className="w-5 h-5" />
  },
  {
    id: 'social',
    title: 'Social Media Management',
    description: 'Comprehensive content creation and multi-platform management across Instagram, Facebook, and LinkedIn.',
    icon: <Globe className="w-5 h-5" />
  },
  {
    id: 'design',
    title: 'Canva Design Expert',
    description: 'Premium Canva designs for lead magnets, infographics, and social media feeds that convert followers into clients.',
    icon: <PenTool className="w-5 h-5" />
  }
];

// WORK EXPERIENCE SECTION
export const EXPERIENCE = [
  {
    title: 'Virtual Assistant & Digital Marketing Specialist',
    company: 'Zealous Digital Marketing',
    date: 'Dec 2024 – Present',
    points: [
      'Lead end-to-end content strategy for diverse business portfolios',
      'Execute on-page SEO optimization and keyword research',
      'Manage WordPress blog publishing and course backend support',
      'Design high-converting lead magnets and brand assets'
    ]
  },
  {
    title: 'Virtual Assistant',
    company: 'The Circadian Kids',
    date: 'Aug 2024 – Oct 2025',
    points: [
      'Full social media management (Instagram & Facebook)',
      'Kajabi course content creation and student management',
      'Active Campaign email marketing and funnel automation',
      'Squarespace website maintenance and daily engagement routines'
    ]
  },
  {
    title: 'Content Writer',
    company: 'Jewelry Store Marketers',
    date: 'Jan 2023 – Oct 2024',
    points: [
      'SEO-optimized blog and article production',
      'Brand voice development and consistent copywriting',
      'Podcast description writing and website copy enhancement'
    ]
  }
];

// TESTIMONIALS SECTION
export const TESTIMONIALS = [
  {
    quote: "Josephine was fantastic to work with. She was always efficient, quick to pick up new skills, and never hesitated to go the extra mile to get things done right. Really appreciated having her on board!",
    author: "Robin Wilson",
    role: "Business Owner",
    date: "Oct 2024"
  }
];

// PORTFOLIO PREVIEW: Replace these image URLs with your Canva exports or designs
export const PORTFOLIO: PortfolioItem[] = [
  {
    title: 'Premium Brand Identity',
    category: 'Canva Design',
    imageUrl: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=800&auto=format&fit=crop',
    link: 'https://josephinedelacruz.my.canva.site/portfolio'
  },
  {
    title: 'Course Launch Framework',
    category: 'Operations',
    imageUrl: 'https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=800&auto=format&fit=crop',
    link: 'https://josephinedelacruz.my.canva.site/portfolio'
  },
  {
    title: 'SEO Content Strategy',
    category: 'Marketing',
    imageUrl: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800&auto=format&fit=crop',
    link: 'https://josephinedelacruz.my.canva.site/portfolio'
  }
];
