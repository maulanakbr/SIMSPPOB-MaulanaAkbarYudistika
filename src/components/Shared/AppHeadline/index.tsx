import * as React from 'react';
import {TextProps, View} from 'react-native';

import {Text} from 'react-native-paper';

import style from './style';

type SharedAppHeadlineProps = {
  title?: string;
  textInput?: [string, string];
  variant?: 'withSubtitle' | 'noSubtitle' | 'small' | 'dialog';
} & TextProps;

export default function AppHeadline({
  textInput,
  title,
  variant = 'noSubtitle',
  ...props
}: SharedAppHeadlineProps) {
  const titleFromTextInput = textInput?.[0];
  const subtitleFromTextInput = textInput?.[1];

  return (
    <View
      style={[
        {alignItems: variant === 'noSubtitle' || variant === 'dialog' ? 'center' : 'flex-start'},
        props.style,
      ]}>
      <Text
        variant={
          variant === 'noSubtitle'
            ? 'headlineLarge'
            : variant === 'withSubtitle'
              ? 'headlineSmall'
              : variant === 'dialog'
                ? 'bodyLarge'
                : 'labelLarge'
        }
        style={
          variant === 'noSubtitle'
            ? style.headlineText
            : variant === 'withSubtitle'
              ? [style.headlineText, {fontWeight: '500'}]
              : variant === 'dialog'
                ? [style.headlineText, {fontSize: 18, fontWeight: '500'}]
                : [style.headlineText, {fontWeight: '600'}]
        }>
        {variant === 'withSubtitle' || variant === 'dialog' ? titleFromTextInput : title}
      </Text>
      {variant === 'withSubtitle' ||
        (variant === 'dialog' && (
          <Text variant="headlineSmall" style={style.headlineText}>
            {variant === 'dialog' ? `${subtitleFromTextInput} ?` : subtitleFromTextInput}
          </Text>
        ))}
    </View>
  );
}
