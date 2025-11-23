import { theme as spotlightTheme } from './brands/spotlight/theme';
import { theme as anacondaTheme } from './brands/anaconda/theme';
import { theme as harrisscarfeTheme } from './brands/harrisscarfe/theme';
import { theme as kooTheme } from './brands/koo/theme';

export type Brand = 'spotlight' | 'harrisscarfe' | 'anaconda' | 'koo';

export interface BrandConfig {
    name: string;
    locales: string[];
    theme: {
        primary: string;
        primaryAltTwo: string;
        primaryAltThree: string;
        secondary: string;
        secondaryAltTwo: string;
        secondaryAltThree: string;
        secondaryAltFour: string;
        secondaryAltFive: string;
        focusSuccess: string;
        focusSuccessLight: string;
        focusBlue: string;
        background: string;
        text: string;
        blue: string;
        green: string;
        orange: string;
        red: string;
        white: string;
        black: string;
    };
}



export const brands: Record<Brand, BrandConfig> = {
    spotlight: spotlightTheme,
    harrisscarfe: {
        name: 'Harris Scarfe',
        locales: ['au'],
        theme: harrisscarfeTheme,
    },
    anaconda: {
        name: 'Anaconda',
        locales: ['au'],
        theme: anacondaTheme,
    },
    koo: {
        name: 'Koo',
        locales: ['au'],
        theme: kooTheme,
    },
};

export const defaultBrand: Brand = 'spotlight';
