import * as React from 'react';

// import {TextInput as RNTextInput, TextInputProps} from 'react-native';
import {TextInput as RNPTextInput, TextInputProps} from 'react-native-paper';
import {IconSource} from 'react-native-paper/lib/typescript/components/Icon';

import style from './style';

// export type UITextInputProps = {
//   placeholder?: string;
//   secureTextEntry?: boolean;
// } & TextInputProps;

export type UITextInputProps = {
  icon: IconSource;
  placeholder: string;
} & TextInputProps;

export default function TextInput({placeholder, icon, ...props}: UITextInputProps) {
  return (
    // <RNTextInput
    //   placeholder={placeholder}
    //   secureTextEntry={secureTextEntry}
    //   style={style.main}
    //   {...props}
    // />
    <RNPTextInput
      mode="outlined"
      left={<RNPTextInput.Icon icon={icon} size={20} />}
      placeholder={placeholder}
      outlineStyle={style.textInputOutline}
      placeholderTextColor="#CDCBCB"
      {...props}
    />
  );
}
