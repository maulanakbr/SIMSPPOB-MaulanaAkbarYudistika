import * as React from 'react';

import {type ButtonProps, Button as RNPButton, useTheme} from 'react-native-paper';

import theme from '@/theme';

import style from './style';

type UIButtonProps = {
  mode?: 'text' | 'outlined' | 'contained' | 'elevated' | 'contained-tonal' | undefined;
  title: string;
} & Omit<ButtonProps, 'children'>;

export default function Button({title, mode, ...props}: UIButtonProps) {
  const {colors} = useTheme<typeof theme>();

  return (
    <RNPButton
      mode={mode}
      buttonColor={mode !== 'text' ? colors.primary : undefined}
      textColor={mode !== 'text' ? undefined : colors.primary}
      style={style.buttonInput}
      {...props}>
      {title}
    </RNPButton>
  );
}
