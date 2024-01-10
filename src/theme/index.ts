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
    borderRadius: 6,
    sHeight: 20,
    mHeight: 40,
    sWidth: 20,
    mWidth: 40,
  },
} satisfies Record<string, unknown>;

export default theme;
