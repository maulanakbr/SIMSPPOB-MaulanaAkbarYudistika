import {StyleSheet} from 'react-native';

import theme from '@/theme';

export default StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  avatar: {
    height: theme.sizes.height.medium,
    width: theme.sizes.width.medium,
  },
});
