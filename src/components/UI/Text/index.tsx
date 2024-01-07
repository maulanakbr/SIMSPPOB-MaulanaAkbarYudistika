import * as React from 'react';
import {Text as RNText, TextProps} from 'react-native';

import style from './style';

type UITextProps = {
  children: React.ReactNode;
  variants: 'header' | 'subheader' | 'base' | 'active' | 'disabled';
} & TextProps;

export default function Text({children, variants, ...props}: UITextProps) {
  const prefferedVariants =
    variants === 'header'
      ? style.header
      : variants === 'subheader'
        ? style.subheader
        : variants === 'base'
          ? style.base
          : variants === 'active'
            ? style.textButtonActive
            : style.textButtonDisabled;

  return (
    <RNText style={prefferedVariants} {...props}>
      {children}
    </RNText>
  );
}
