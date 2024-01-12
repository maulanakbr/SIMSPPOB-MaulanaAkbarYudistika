import * as React from 'react';

import {TextInput as RNPTextInput, TextInputProps, useTheme} from 'react-native-paper';
import {IconSource} from 'react-native-paper/lib/typescript/components/Icon';

import {AppHeadline} from '@/components/Shared';
import theme from '@/theme';

import style from './style';

export type UIAppTextInputProps = {
  icon?: IconSource;
  placeholder?: string;
  label?: string;
} & TextInputProps;

export default function AppTextInput({placeholder, icon, label, ...props}: UIAppTextInputProps) {
  const {colors} = useTheme<typeof theme>();

  return (
    <React.Fragment>
      {label && <AppHeadline title={label} variant="small" />}
      <RNPTextInput
        mode="outlined"
        left={<RNPTextInput.Icon icon={icon as IconSource} size={20} />}
        placeholder={placeholder}
        outlineStyle={style.textInputOutline}
        placeholderTextColor={colors.textTertiary}
        {...props}
      />
    </React.Fragment>
  );
}
