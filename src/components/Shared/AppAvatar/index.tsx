import * as React from 'react';
import {
  type GestureResponderEvent,
  Image,
  type ImageSourcePropType,
  Pressable,
  View,
} from 'react-native';

import style from './style';

type SharedAppAvatarProps = {
  children: React.ReactNode;
  imageSource?: ImageSourcePropType | undefined;
  onPress?: (e: GestureResponderEvent) => void;
};

export default function AppAvatar({children, imageSource, onPress}: SharedAppAvatarProps) {
  return (
    <View style={style.avatarContainer}>
      <Pressable onPress={onPress}>
        <Image source={imageSource} style={style.avatar} />
        {children}
      </Pressable>
    </View>
  );
}
