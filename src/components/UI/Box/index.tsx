import * as React from 'react';
import {View, ViewProps} from 'react-native';

import style from './style';

type UIBoxProps = {
  children: React.ReactNode;
  variants: 'container' | 'flexRow' | 'centeredFlexRow' | 'flexCol' | 'flexBetween';
} & ViewProps;

export default function Box({children, variants = 'container', ...props}: UIBoxProps) {
  const prefferedVariants =
    variants === 'container'
      ? style.container
      : variants === 'flexRow'
        ? style.flexRow
        : variants === 'centeredFlexRow'
          ? style.centeredflexRow
          : variants === 'flexCol'
            ? style.flexCol
            : style.flexBetween;

  return (
    <View style={prefferedVariants} {...props}>
      {children}
    </View>
  );
}
