import {StyleSheet} from 'react-native';

import theme from '@/theme';

export default StyleSheet.create({
  optionsButton: {
    alignItems: 'center',
    borderRadius: theme.sizes.borderRadius.small,
    borderColor: theme.colors.tertiary,
    height: theme.sizes.height.large,
    justifyContent: 'center',
    width: 105,
  },
  topUpList: {
    gap: theme.sizes.gap.medium,
  },
});
