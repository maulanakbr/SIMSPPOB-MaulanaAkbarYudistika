import {StyleSheet} from 'react-native';

import theme from '@/theme';

export default StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background,
    flex: 1,
    padding: 20,
    gap: 20,
  },
  serviceList: {
    paddingTop: 20,
  },
});
