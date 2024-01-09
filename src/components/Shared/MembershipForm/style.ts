import {StyleSheet} from 'react-native';

import {colors, sizes} from '@/lib/constants';

const {height, width} = sizes;

export default StyleSheet.create({
  imgLogo: {
    height: height.xs,
    width: width.xs,
  },
  navigation: {
    color: colors.primary,
  },
});
