import * as React from 'react';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';

import {ButtonProps, Button as RNPButton} from 'react-native-paper';

import style from './style';

// type UIButtonProps = {
//   children: React.ReactNode;
//   variants: 'active' | 'disabled';
//   onPress?: () => void;
// };

type UIButtonProps = {
  mode?: 'text' | 'outlined' | 'contained' | 'elevated' | 'contained-tonal' | undefined;
  title: string;
} & Omit<ButtonProps, 'children'>;

export default function Button({title, mode, ...props}: UIButtonProps) {
  // const prefferedVariants = variants === 'active' ? style.active : style.disabled;

  return (
    <RNPButton
      mode={mode}
      buttonColor={mode !== 'text' ? '#F42619' : undefined}
      textColor={mode !== 'text' ? undefined : '#F42619'}
      style={style.buttonInput}
      {...props}>
      {title}
    </RNPButton>
    // <TouchableOpacity onPress={onPress} style={prefferedVariants} {...props}>
    //   {children}
    // </TouchableOpacity>
  );
}
