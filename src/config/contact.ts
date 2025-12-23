import type { ContactConfig } from "@/types/contact-config";

export const contactConfig: ContactConfig = {
    title: 'Start Building Today',
    subtitle:
        'Join thousands of teams using AI agents to automate their workflows. Get started in minutes with our free tier.',
    benefits: [
        'No credit card required',
        'Setup in under 5 minutes',
        'Cancel anytime',
        '24/7 customer support',
    ],
    email: 'hello@aiagentplatform.com',
    form: {
        cta: 'Get Started Free',
        fields: [
            {
                title: 'Name',
                label: 'Full Name',
                placeholder: 'John Doe',
                required: true,
            },
            {
                title: 'Email',
                label: 'Work Email',
                placeholder: 'john@company.com',
                required: true,
            },
            {
                title: 'Company',
                label: 'Company',
                placeholder: 'Your Company Inc.',
                required: false,
            },
            {
                title: 'Message',
                label: 'What would you like to automate?',
                placeholder: 'Tell us about your workflow and automation needs...',
                required: false,
            },
        ]
    },
};