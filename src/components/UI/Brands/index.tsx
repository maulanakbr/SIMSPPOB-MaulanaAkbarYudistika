import * as React from 'react';
import {Image, View, ViewProps} from 'react-native';

import {Text} from 'react-native-paper';

import style from './style';

type UIBrandsProps = {
  variant?: 'Larger' | 'Smaller';
} & ViewProps;

export default function Brands({variant = 'Larger', ...props}: UIBrandsProps) {
  return (
    <View style={style.brandsLogoContainerLarger} {...props}>
      <Image
        source={require('@/assets/Logo.png')}
        style={variant === 'Larger' ? style.brandsLogoIconLarger : style.brandsLogoIconSmaller}
      />
      <Text variant="headlineMedium" style={style.brandsLogoText}>
        SIMS PPOB
      </Text>
    </View>
  );
}
