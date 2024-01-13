import {StyleSheet} from 'react-native';

import theme from '@/theme';

export default StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background,
    flex: 1,
    paddingHorizontal: theme.sizes.padding.small,
    paddingVertical: theme.sizes.padding.xsmall,
    gap: theme.sizes.gap.large,
  },
  dialog: {
    backgroundColor: theme.colors.background,
    borderRadius: theme.sizes.borderRadius.small,
  },
  dialogContent: {
    gap: 20,
  },
  dialogActions: {
    flexDirection: 'column',
    gap: 2,
  },
});
