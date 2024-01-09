import {StyleSheet} from 'react-native';

import {colors, sizes} from '@/lib/constants';

const {height, width} = sizes;

export default StyleSheet.create({
  avatar: {
    height: height.xs,
    width: width.xs,
  },
  greetHeader: {
    textAlign: 'left',
  },
  imgLogo: {
    height: height.xs,
    width: width.xs,
  },
  navigation: {
    color: colors.primary,
  },
});
