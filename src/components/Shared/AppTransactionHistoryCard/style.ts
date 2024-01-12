import {StyleSheet} from 'react-native';

import theme from '@/theme';

export default StyleSheet.create({
  cardContainer: {
    padding: theme.sizes.padding.small,
    borderRadius: theme.sizes.borderRadius.medium,
    borderWidth: 1,
    borderColor: theme.colors.tertiary,
    gap: theme.sizes.gap.small,
  },
  cardSubContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: theme.sizes.gap.small,
    justifyContent: 'space-between',
  },
  cardSubContent: {
    flexDirection: 'row',
    gap: theme.sizes.gap.small,
  },
});
