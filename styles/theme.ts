import { ViewStyle } from 'react-native';

export const defaultTheme = {
    colors: {
        background: '#FAF7F4',
        text: '#2B2B2B',
        primary: '#2B2B2B',
        secondary: '#EAE6E1',
        accent: '#F7C6CC',
    },
    fontSizes: {
        xs: 12,
        sm: 14,
        md: 16,
        lg: 20,
        xl: 28,
    },
    spacing: {
        xs: 4,
        sm: 8,
        md: 16,
        lg: 24,
        xl: 32,
    },
    fonts: {
        regular: 'System',
        bold: 'System',
    },

    effects: {
        blurGlass: {
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
            borderRadius: 16,
            overflow: 'hidden',
            backdropFilter: 'blur(20px)', // Web-specific
        },

        nativeBlurGlass: {
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
            borderRadius: 0,
            overflow: 'hidden',
        }as ViewStyle,
    },
};
