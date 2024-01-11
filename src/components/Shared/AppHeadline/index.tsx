import * as React from 'react';
import {View} from 'react-native';

import {Text} from 'react-native-paper';

import style from './style';

type SharedAppHeadlineProps = {
  title?: string;
  textInput?: [string, string];
  variant?: 'withSubtitle' | 'noSubtitle';
};

export default function AppHeadline({
  textInput,
  title,
  variant = 'noSubtitle',
}: SharedAppHeadlineProps) {
  const titleFromTextInput = textInput?.[0];
  const subtitleFromTextInput = textInput?.[1];

  return (
    <View style={{alignItems: variant === 'noSubtitle' ? 'center' : 'flex-start'}}>
      <Text
        variant={variant === 'noSubtitle' ? 'headlineLarge' : 'headlineMedium'}
        style={
          variant === 'noSubtitle' ? style.headlineText : [style.headlineText, {fontWeight: '500'}]
        }>
        {variant === 'withSubtitle' ? titleFromTextInput : title}
      </Text>
      {variant === 'withSubtitle' && (
        <Text variant="headlineMedium" style={style.headlineText}>
          {subtitleFromTextInput}
        </Text>
      )}
    </View>
  );
}
