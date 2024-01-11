import * as React from 'react';
import {type NativeSyntheticEvent, type TextInputChangeEventData, View} from 'react-native';

import {useTheme} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';

import {AppTextInput} from '@/components/UI';
import theme from '@/theme';

import style from './style';

import type {SharedMembershipFormProps} from '.';

export default function LoginFormStacked({
  onChangeLogin,
}: Pick<SharedMembershipFormProps, 'onChangeLogin'>) {
  const {colors} = useTheme<typeof theme>();

  return (
    <View style={style.inputStacksContainer}>
      <AppTextInput
        icon={() => <Icon name="at-sign" color={colors.tertiary} size={20} />}
        onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>) => onChangeLogin!(e, 'email')}
        placeholder="masukkan email anda"
      />
      <AppTextInput
        icon={() => <Icon name="lock" color={colors.tertiary} size={20} />}
        onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>) =>
          onChangeLogin!(e, 'password')
        }
        placeholder="masukkan password anda"
        secureTextEntry={true}
      />
    </View>
  );
}
