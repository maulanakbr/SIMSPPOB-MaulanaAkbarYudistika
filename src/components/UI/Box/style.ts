import {StyleSheet} from 'react-native';

import {colors, sizes} from '@/lib/constants';

const {margin, padding, spacing} = sizes;

export default StyleSheet.create({
  container: {
    backgroundColor: colors.bg,
    height: '100%',
    justifyContent: 'center',
    padding: padding.s,
  },
  flexRow: {
    flexDirection: 'row',
    gap: spacing.s,
    justifyContent: 'center',
  },
  centeredflexRow: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: spacing.s,
    justifyContent: 'center',
  },
  flexCol: {
    justifyContent: 'center',
    gap: spacing.m,
  },
  flexBetween: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: spacing.s,
    justifyContent: 'space-between',
    marginBottom: margin.xl,
  },
});
