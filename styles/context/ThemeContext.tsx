import React, { createContext, useContext } from 'react';
import { defaultTheme } from '../theme';

export const ThemeContext = createContext(defaultTheme);
export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <ThemeContext.Provider value={defaultTheme}>
            {children}
        </ThemeContext.Provider>
    );
};
