import {StyleSheet} from 'react-native';

import theme from '@/theme';

export default StyleSheet.create({
  bannerImg: {
    borderRadius: theme.sizes.borderRadius.small,
    height: theme.sizes.height.xlarge,
    overflow: 'hidden',
    marginRight: 10,
    width: theme.sizes.width.xlarge,
  },
});
