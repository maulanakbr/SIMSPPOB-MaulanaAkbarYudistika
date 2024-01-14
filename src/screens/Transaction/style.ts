import {StyleSheet} from 'react-native';

import theme from '@/theme';

export default StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background,
    paddingHorizontal: theme.sizes.padding.small,
    paddingVertical: theme.sizes.padding.xsmall,
    gap: 25,
  },
});
