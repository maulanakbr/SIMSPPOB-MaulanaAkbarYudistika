import * as React from 'react';
import {TextInput as RNTextInput, TextInputProps} from 'react-native';

import style from './style';

type UITextInputProps = {
  onChangeText?: () => void;
  placeholder: string;
  secureTextEntry?: boolean;
} & TextInputProps;

export default function TextInput({onChangeText, placeholder, secureTextEntry = false, ...props}: UITextInputProps) {
  return (
    <RNTextInput
      placeholder={placeholder}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      style={style.main}
      {...props}
    />
  );
}
