import * as React from 'react';
import {TextInput as RNTextInput, TextInputProps} from 'react-native';

import style from './style';

export type UITextInputProps = {
  placeholder?: string;
  secureTextEntry?: boolean;
} & TextInputProps;

export default function TextInput({placeholder, secureTextEntry = false, ...props}: UITextInputProps) {
  return <RNTextInput placeholder={placeholder} secureTextEntry={secureTextEntry} style={style.main} {...props} />;
}
