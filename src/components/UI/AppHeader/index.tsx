import * as React from 'react';
import {Image, View, ViewProps} from 'react-native';

import {AppLogo} from '@/components/Shared';

import style from './style';

type UIAppHeaderProps = {
  imgSource: string | undefined;
} & ViewProps;

export default function AppHeader({imgSource, ...props}: UIAppHeaderProps) {
  return (
    <View style={[style.headerContainer, props.style]}>
      <AppLogo variant="Smaller" />
      <Image
        source={
          imgSource && !imgSource?.includes('null')
            ? {uri: imgSource}
            : require('@/assets/Profile-Photo.png')
        }
        style={style.avatar}
      />
    </View>
  );
}
