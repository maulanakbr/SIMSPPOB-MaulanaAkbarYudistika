import {StyleSheet} from 'react-native';

import theme from '@/theme';

export default StyleSheet.create({
  mainContainer: {
    backgroundColor: theme.colors.background,
    flex: 1,
    gap: 50,
    justifyContent: 'center',
    padding: 20,
  },
});
