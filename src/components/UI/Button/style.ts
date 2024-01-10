import {StyleSheet} from 'react-native';

import {colors, sizes} from '@/lib/constants';

const {margin, borderRadius, padding} = sizes;

export default StyleSheet.create({
  // active: {
  //   backgroundColor: colors.buttonBgActive,
  //   borderRadius: borderRadius.s,
  //   alignItems: 'center',
  //   padding: padding.xs,
  //   marginBottom: margin.s,
  // },
  // disabled: {
  //   backgroundColor: colors.buttonBgDisabled,
  //   padding: padding.s,
  // },
  buttonInput: {
    height: 50,
    borderRadius: 6,
    justifyContent: 'center',
  },
});
