import {StyleSheet} from 'react-native';

import theme from '@/theme';

export default StyleSheet.create({
  brandsLogoContainerLarger: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 14,
    justifyContent: 'center',
  },
  brandsLogoIconLarger: {
    height: theme.sizes.height.medium,
    width: theme.sizes.width.medium,
  },
  brandsLogoIconSmaller: {
    height: theme.sizes.height.small,
    width: theme.sizes.width.small,
  },
  brandsLogoText: {
    fontWeight: 'bold',
  },
  brandsLogoOnly: {
    height: 70,
    width: 70,
  },
});
