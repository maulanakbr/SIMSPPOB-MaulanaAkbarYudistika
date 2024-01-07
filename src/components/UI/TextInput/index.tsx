import * as React from 'react';
import {TextInput as RNTextInput, TextInputProps} from 'react-native';

import style from './style';

export type UITextInputProps = {
  placeholder?: string;
  secureTextEntry?: boolean;
} & TextInputProps;

const TextInput = React.forwardRef<RNTextInput, UITextInputProps>(({placeholder, secureTextEntry = false, ...props}, ref) => {
  return <RNTextInput ref={ref} placeholder={placeholder} secureTextEntry={secureTextEntry} style={style.main} {...props} />;
});

export default TextInput;
