import React, { createContext, useContext, ReactNode } from 'react';

// Define the shape of the theme. Adjust as needed for your project's theme structure.
export type Theme = Record<string, string | number>;

// Create a Context with an empty default value.
const ThemeContext = createContext<Theme | undefined>(undefined);

/**
 * ThemeProvider component that supplies a theme object to the React tree.
 *
 * @param props.theme - The theme object to provide. If omitted, an empty object is used.
 * @param props.children - React children.
 */
export const ThemeProvider = ({
    theme = {},
    children,
}: {
    theme?: Theme;
    children: ReactNode;
}) => {
    return (
        <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
    );
};

/**
 * Hook to access the current theme.
 * Throws an error if used outside of a ThemeProvider.
 */
export const useTheme = (): Theme => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
