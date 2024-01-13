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
  subContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: theme.sizes.gap.small,
  },
  serviceImg: {
    width: theme.sizes.width.medium,
    height: theme.sizes.height.medium,
  },
});
