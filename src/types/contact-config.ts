export type ContactConfig = {
    title: string;
    subtitle: string;
    benefits: string[];
    email: string;
    form: {
        cta: string;
        fields: {
            title: string;
            label: string;
            placeholder: string;
            required: boolean;
        }[];
    };
};