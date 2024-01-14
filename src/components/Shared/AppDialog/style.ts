import {StyleSheet} from 'react-native';

import theme from '@/theme';

export default StyleSheet.create({
  dialog: {
    backgroundColor: theme.colors.background,
    borderRadius: theme.sizes.borderRadius.small,
  },
  dialogContent: {
    gap: 20,
  },
  dialogActions: {
    flexDirection: 'column',
    gap: 2,
  },
  dialogSuccessIcon: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: theme.colors.iconBgSuccess,
    borderRadius: 80,
    height: 60,
    justifyContent: 'center',
    width: 60,
  },
});
