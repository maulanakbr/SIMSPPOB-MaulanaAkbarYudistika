import {StyleSheet} from 'react-native';

import theme from '@/theme';

export default StyleSheet.create({
  cardContainer: {
    backgroundColor: theme.colors.primary,
    padding: theme.sizes.padding.small,
    borderRadius: theme.sizes.borderRadius.medium,
  },
  cardSubContainer: {
    gap: theme.sizes.gap.small,
  },
  cardSubContent: {
    fontWeight: '800',
    color: theme.colors.textSecondary,
  },
  cardActionButton: {
    alignItems: 'flex-start',
  },
});
