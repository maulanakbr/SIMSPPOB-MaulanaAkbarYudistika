import * as React from 'react';
import {Image, View} from 'react-native';

import {AppLogo} from '@/components/Shared';

import style from './style';

type UIAppHeaderProps = {
  imgSource: string | undefined;
};

export default function AppHeader({imgSource}: UIAppHeaderProps) {
  return (
    <View style={style.headerContainer}>
      <AppLogo variant="Smaller" />
      <Image
        source={
          !imgSource?.includes('null') ? {uri: imgSource} : require('@/assets/Profile-Photo.png')
        }
        style={style.avatar}
      />
    </View>
  );
}
