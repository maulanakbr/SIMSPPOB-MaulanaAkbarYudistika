import * as React from 'react';
import {View, ViewProps} from 'react-native';

import style from './style';

type UIBoxProps = {
  children: React.ReactNode;
  variants: 'container' | 'flexRow' | 'flexCol';
} & ViewProps;

export default function Box({children, variants = 'container', ...props}: UIBoxProps) {
  const prefferedVariants = variants === 'container' ? style.container : variants === 'flexRow' ? style.flexRow : style.flexCol;

  return (
    <View style={prefferedVariants} {...props}>
      {children}
    </View>
  );
}
