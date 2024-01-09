import {StyleSheet} from 'react-native';

import {colors, sizes} from '@/lib/constants';

const {margin, fontSize, fontWeight} = sizes;

export default StyleSheet.create({
  header: {
    color: colors.textPrimary,
    fontSize: fontSize.l,
    fontWeight: fontWeight.l,
    marginBottom: margin.xl,
    textAlign: 'center',
  },
  subheader: {
    color: colors.textPrimary,
    fontSize: fontSize.m,
    fontWeight: fontWeight.l,
    marginBottom: margin.xl,
    textAlign: 'center',
  },
  base: {
    color: colors.textPrimary,
    fontSize: fontSize.s,
    fontWeight: fontWeight.l,
    textAlign: 'center',
  },
  textButtonActive: {
    color: colors.textSecondary,
    fontSize: fontSize.s,
    fontWeight: fontWeight.s,
  },
  textButtonDisabled: {
    color: colors.textPrimary,
    fontSize: fontSize.m,
    fontWeight: fontWeight.s,
  },
});
