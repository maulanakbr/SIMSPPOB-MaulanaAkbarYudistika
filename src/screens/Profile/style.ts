import {StyleSheet} from 'react-native';

import theme from '@/theme';

export default StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background,
    flex: 1,
    gap: theme.sizes.gap.medium,
    paddingHorizontal: theme.sizes.padding.small,
    paddingVertical: theme.sizes.padding.xsmall,
    justifyContent: 'center',
  },
  avatarContainer: {
    position: 'relative',
  },
  avatar: {
    alignSelf: 'center',
    height: 150,
    width: 150,
  },
  profileFormStack: {
    gap: theme.sizes.gap.small,
  },
  outlinedButton: {
    justifyContent: 'center',
    borderColor: theme.colors.primary,
    borderRadius: theme.sizes.borderRadius.xsmall,
    height: theme.sizes.height.large,
  },
  uploadAvatarButton: {
    position: 'absolute',
    bottom: 10,
    right: 90,
    backgroundColor: theme.colors.background,
    borderRadius: 100,
    borderColor: theme.colors.secondary,
    borderWidth: 0.3,
  },
});
