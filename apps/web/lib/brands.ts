export type Brand = 'spotlight' | 'harrisscarfe' | 'anaconda' | 'koo';

export interface BrandConfig {
    name: string;
    locales: string[];
    theme: {
        primary: string;
        secondary: string;
        background: string;
        text: string;
    };
}

export const brands: Record<Brand, BrandConfig> = {
    spotlight: {
        name: 'Spotlight',
        locales: ['au', 'nz', 'sg', 'my'],
        theme: {
            primary: '#00549E', // Example blue
            secondary: '#E31837', // Example red
            background: '#ffffff',
            text: '#333333',
        },
    },
    harrisscarfe: {
        name: 'Harris Scarfe',
        locales: ['au'],
        theme: {
            primary: '#000000',
            secondary: '#d4af37', // Goldish
            background: '#f9f9f9',
            text: '#1a1a1a',
        },
    },
    anaconda: {
        name: 'Anaconda',
        locales: ['au'],
        theme: {
            primary: '#E65300', // Orange
            secondary: '#4B5563',
            background: '#ffffff',
            text: '#111827',
        },
    },
    koo: {
        name: 'Koo',
        locales: ['au'],
        theme: {
            primary: '#6B7280', // Grey
            secondary: '#10B981', // Green
            background: '#fafafa',
            text: '#1f2937',
        },
    },
};

export const defaultBrand: Brand = 'spotlight';
