import type { PricingPlansConfig } from "@/types/pricing-plans-config";

export const CANVACN18_PRICING: PricingPlansConfig = {
    title: 'Simple, Transparent Pricing',
    subtitle:
    'Choose the plan that fits your needs. Upgrade or downgrade anytime.',
    plans: [
        {
            name: 'Free',
            price: '$0',
            period: '/month',
            description: 'Perfect for individuals and testing',
            features: [
                'Up to 3 agents',
                '1,000 tasks/month',
                'Basic integrations',
                'Email support',
            ],
            cta: {
            text: 'Get Started',
            href: '#contact',
            },
            featured: false,
        },
        {
            name: 'Pro',
            price: '$49',
            period: '/month',
            description: 'For growing teams and businesses',
            badge: 'MOST POPULAR',
            features: [
                'Unlimited agents',
                '50,000 tasks/month',
                'All integrations',
                'Priority support',
                'Advanced analytics',
                'Team collaboration',
            ],
            cta: {
            text: 'Start Free Trial',
            href: '#contact',
            },
            featured: true,
        },
        {
            name: 'Enterprise',
            price: 'Custom',
            period: '',
            description: 'For large-scale operations',
            features: [
                'Unlimited everything',
                'Custom integrations',
                'Dedicated support',
                'SLA guarantee',
                'On-premise option',
                'Custom training',
            ],
            cta: {
            text: 'Contact Sales',
            href: '#contact',
            },
            featured: false,
        },
    ],
};