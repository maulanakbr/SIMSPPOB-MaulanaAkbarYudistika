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
    height: theme.sizes.mHeight,
    width: theme.sizes.mWidth,
  },
  brandsLogoIconSmaller: {
    height: theme.sizes.sHeight,
    width: theme.sizes.sWidth,
  },
  brandsLogoText: {
    fontWeight: 'bold',
  },
});
