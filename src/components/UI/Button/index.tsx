import * as React from 'react';
import {GestureResponderEvent, TouchableOpacity, TouchableOpacityProps} from 'react-native';

import style from './style';

type UIButtonProps = {
  children: React.ReactNode;
  variants: 'active' | 'disabled';
  onPress?: (e: GestureResponderEvent) => void;
} & TouchableOpacityProps;

export default function Button({children, variants, onPress, ...props}: UIButtonProps) {
  const prefferedVariants = variants === 'active' ? style.active : style.disabled;

  return (
    <TouchableOpacity onPress={onPress} style={prefferedVariants} {...props}>
      {children}
    </TouchableOpacity>
  );
}
