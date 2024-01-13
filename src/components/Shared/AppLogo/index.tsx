import * as React from 'react';
import {Image, View, type ViewProps} from 'react-native';

import {Text} from 'react-native-paper';

import style from './style';

type SharedAppLogoProps = {
  variant?: 'Larger' | 'Smaller' | 'Logo Only';
} & ViewProps;

export default function AppLogo({variant = 'Larger', ...props}: SharedAppLogoProps) {
  return (
    <View
      style={
        variant === 'Larger'
          ? style.brandsLogoContainerLarger
          : [style.brandsLogoContainerLarger, {gap: 8}]
      }
      {...props}>
      <Image
        source={require('@/assets/Logo.png')}
        style={
          variant === 'Larger'
            ? style.brandsLogoIconLarger
            : variant === 'Logo Only'
              ? style.brandsLogoOnly
              : style.brandsLogoIconSmaller
        }
      />
      <Text
        variant={variant === 'Larger' ? 'headlineMedium' : 'bodyLarge'}
        style={variant === 'Logo Only' ? {display: 'none'} : style.brandsLogoText}>
        SIMS PPOB
      </Text>
    </View>
  );
}
