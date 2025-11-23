import { Brand } from './brands';

export const translations: Record<Brand, Record<string, { welcome: string; description: string }>> = {
    spotlight: {
        au: {
            welcome: 'Welcome to Spotlight AU',
            description: 'Australian version of Spotlight.'
        },
        nz: {
            welcome: 'Welcome to Spotlight NZ',
            description: 'New Zealand version of Spotlight.'
        },
        sg: {
            welcome: 'Welcome to Spotlight SG',
            description: 'Singapore version of Spotlight.'
        },
        my: {
            welcome: 'Welcome to Spotlight MY',
            description: 'Malaysia version of Spotlight.'
        },
    },
    harrisscarfe: {
        au: {
            welcome: 'Welcome to Harris Scarfe AU',
            description: 'Australian Harris Scarfe store.'
        },
    },
    anaconda: {
        au: {
            welcome: 'Welcome to Anaconda AU',
            description: 'Australian Anaconda outdoor gear.'
        },
    },
    koo: {
        au: {
            welcome: 'Welcome to Koo AU',
            description: 'Australian Koo platform.'
        },
    },
};
