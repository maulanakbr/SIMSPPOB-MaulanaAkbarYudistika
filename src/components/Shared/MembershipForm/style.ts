import {StyleSheet} from 'react-native';

import {colors, sizes} from '@/lib/constants';

const {height, width} = sizes;

export default StyleSheet.create({
  inputStacksContainer: {
    gap: 20,
  },
  formContainer: {
    gap: 35,
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
