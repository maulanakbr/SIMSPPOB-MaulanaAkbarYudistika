import * as React from 'react';

import {type ButtonProps, Button as RNPButton, useTheme} from 'react-native-paper';

import theme from '@/theme';

import style from './style';

type UIAppButtonProps = {
  mode?: 'text' | 'outlined' | 'contained' | 'elevated' | 'contained-tonal' | undefined;
  title: string;
} & Omit<ButtonProps, 'children'>;

export default function AppButton({title, mode, ...props}: UIAppButtonProps) {
  const {colors} = useTheme<typeof theme>();

  return (
    <RNPButton
      mode={mode}
      buttonColor={mode !== 'text' ? colors.primary : undefined}
      style={style.buttonInput}
      textColor={mode !== 'text' ? undefined : colors.primary}
      {...props}>
      {title}
    </RNPButton>
  );
}
