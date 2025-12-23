import type { IconName } from "@/types/icon-name";

export const LAYOUT_CONFIG = {
    hero: {
    headline: 'Intelligent AI Agents',
    subheadline: 'Built for Your Business',
    description:
      'Transform your workflow with autonomous AI agents that handle complex tasks, learn from your data, and deliver results 24/7. No coding required.',
    cta: {
      primary: {
        text: 'Get Started Free',
        href: '#contact',
      },
      secondary: {
        text: 'See How It Works',
        href: '#how-it-works',
      },
    },
    stats: [
      { value: '10k+', label: 'Active Agents' },
      { value: '99.9%', label: 'Uptime' },
      { value: '5M+', label: 'Tasks Automated' },
    ],
  },

  footer: {
    tagline:
      'Intelligent automation for modern teams. Transform your workflow with AI.',
    columns: [
      {
        title: 'Product',
        links: [
          { name: 'Features', href: '#features' },
          { name: 'Pricing', href: '#pricing' },
          { name: 'Integrations', href: '#' },
          { name: 'API Docs', href: '#' },
          { name: 'Changelog', href: '#' },
        ],
      },
      {
        title: 'Company',
        links: [
          { name: 'About Us', href: '#' },
          { name: 'Blog', href: '#' },
          { name: 'Careers', href: '#' },
          { name: 'Press Kit', href: '#' },
          { name: 'Contact', href: '#contact' },
        ],
      },
      {
        title: 'Legal',
        links: [
          { name: 'Privacy Policy', href: '#' },
          { name: 'Terms of Service', href: '#' },
          { name: 'Cookie Policy', href: '#' },
          { name: 'Security', href: '#' },
          { name: 'Compliance', href: '#' },
        ],
      },
    ],
    social: [
      { name: 'Twitter', href: '#', icon: 'twitter' },
      { name: 'GitHub', href: '#', icon: 'github' },
      { name: 'Dribbble', href: '#', icon: 'dribbble' },
      { name: 'LinkedIn', href: '#', icon: 'linkedin' },
    ] as {
      name: string;
      href: string;
      icon: IconName;
    }[],
    copyright: `${new Date().getFullYear()} AI Agent Platform. All rights reserved.`,
  },
}