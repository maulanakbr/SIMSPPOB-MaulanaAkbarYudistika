import {StyleSheet} from 'react-native';

import {colors, sizes} from '@/lib/constants';

export default StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.bg,
    flex: 1,
    gap: 50,
    justifyContent: 'center',
    padding: 20,
  },
  headlineContainer: {
    alignItems: 'center',
  },
  headlineText: {
    fontWeight: '700',
    textAlign: 'center',
  },
});
