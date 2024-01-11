import {MD3LightTheme as DefaultTheme, MD3LightTheme} from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#FFFEFE',
    primary: '#F42619',
    secondary: '#282828',
    tertiary: '#CDCBCB',
    textPrimary: '#282828',
    textSecondary: '#FFFEFE',
    textTertiary: '#CDCBCB',
    textSuccess: '#51BD94',
    textDanger: '#FF562F',
    buttonBgActive: '#F42619',
    buttonBgDisabled: '#CDCBCB',
    modalBackdrop: '#D1D1D1',
    toastDanger: '#FFF5F3',
    iconActive: '#282828',
    iconNotActive: '#CDCBCB',
    iconBgSuccess: '#51BD94',
    iconBgDanger: '#FF562F',
  },
  sizes: {
    borderRadius: {
      small: 6,
      medium: 14,
    },
    fontSize: {
      small: 12,
    },
    gap: {
      small: 12,
    },
    height: {
      small: 20,
      medium: 40,
      large: 50,
    },
    width: {
      small: 20,
      medium: 40,
      large: 50,
    },
    marging: {
      small: 30,
    },
    padding: {
      small: 20,
    },
  },
} satisfies Record<string, unknown>;

export default theme;
