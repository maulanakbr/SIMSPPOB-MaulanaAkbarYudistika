import * as React from 'react';
import {NativeSyntheticEvent, Text, TextInputChangeEventData, View} from 'react-native';

import {useTheme} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';

import {AppTextInput} from '@/components/UI';
import theme from '@/theme';
import {ProfileData} from '@/types';

import style from './style';

type SharedAppProfileUpdateForm = {
  defaultValue: ProfileData | null;
  onChange: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
  disabled: boolean;
};

export default function AppProfileUpdateForm({
  defaultValue,
  disabled,
  onChange,
}: SharedAppProfileUpdateForm) {
  const {colors} = useTheme<typeof theme>();

  return (
    <View style={style.profileFormStack}>
      <AppTextInput
        defaultValue={defaultValue?.email}
        icon={() => <Icon name="at-sign" color={colors.tertiary} size={20} />}
        label="Email"
        disabled
      />
      <AppTextInput
        defaultValue={defaultValue?.first_name}
        icon={() => <Icon name="user" color={colors.tertiary} size={20} />}
        label="Nama Depan"
        onChange={onChange}
        disabled={disabled}
      />
      <AppTextInput
        defaultValue={defaultValue?.last_name}
        icon={() => <Icon name="user" color={colors.tertiary} size={20} />}
        label="Nama Belakang"
        onChange={onChange}
        disabled={disabled}
      />
    </View>
  );
}
