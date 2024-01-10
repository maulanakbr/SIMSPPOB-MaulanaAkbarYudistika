import * as React from 'react';

import {ButtonProps, Button as RNPButton} from 'react-native-paper';

import style from './style';

type UIButtonProps = {
  mode?: 'text' | 'outlined' | 'contained' | 'elevated' | 'contained-tonal' | undefined;
  title: string;
} & Omit<ButtonProps, 'children'>;

export default function Button({title, mode, ...props}: UIButtonProps) {
  return (
    <RNPButton
      mode={mode}
      buttonColor={mode !== 'text' ? '#F42619' : undefined}
      textColor={mode !== 'text' ? undefined : '#F42619'}
      style={style.buttonInput}
      {...props}>
      {title}
    </RNPButton>
  );
}
