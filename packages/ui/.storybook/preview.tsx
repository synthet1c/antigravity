import type { Preview } from "@storybook/react";
import React from "react";

const theme = {
    primary: '#323E48',
    primaryAltTwo: '#993466',
    primaryAltThree: '#DE9385',
    secondary: '#2C416E',
    secondaryAltTwo: '#BFCAAC',
    secondaryAltThree: '#D6C5B3',
    secondaryAltFour: '#E5BF85',
    secondaryAltFive: '#EFDFC5',
    focusSuccess: '#C0779B',
    focusSuccessLight: '#E0E4D7',
    focusBlue: '#DEE7E8',
    background: '#ffffff',
    text: '#191919',
    blue: '#8FB7D0',
    green: '#C0779B',
    orange: '#ED4E1C',
    red: '#C72833',
    white: '#ffffff',
    black: '#000000',
};

const withTheme = (Story: React.ComponentType) => (
    <div
        style={
            {
                '--primary': theme.primary,
                '--primary-alt-1': theme.primaryAltTwo,
                '--primary-alt-2': theme.primaryAltThree,
                '--secondary': theme.secondary,
                '--secondary-alt-1': theme.secondaryAltTwo,
                '--secondary-alt-2': theme.secondaryAltThree,
                '--secondary-alt-3': theme.secondaryAltFour,
                '--secondary-alt-4': theme.secondaryAltFive,
                '--focus-success': theme.focusSuccess,
                '--focus-success-light': theme.focusSuccessLight,
                '--focus-blue': theme.focusBlue,

                '--background': theme.background,
                '--text': theme.text,

                '--blue': theme.blue,
                '--green': theme.green,
                '--orange': theme.orange,
                '--red': theme.red,
                '--white': theme.white,
                '--black': theme.black,

                backgroundColor: 'var(--background)',
                color: 'var(--text)',
                fontFamily: 'system-ui, sans-serif',
            } as React.CSSProperties
        }
    >
        <Story />
    </div>
);

const preview: Preview = {
    decorators: [withTheme],
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
};

export default preview;
