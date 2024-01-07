import {StyleSheet} from 'react-native';

import {colors, sizes} from '@/lib/constants';

const {borderRadius, borderWidth, fontSize, height, padding} = sizes;

export default StyleSheet.create({
  main: {
    borderColor: colors.tertiary,
    borderRadius: borderRadius.s,
    borderWidth: borderWidth.s,
    color: colors.textTertiary,
    fontSize: fontSize.xs,
    height: height.s,
    padding: padding.xs,
  },
});
