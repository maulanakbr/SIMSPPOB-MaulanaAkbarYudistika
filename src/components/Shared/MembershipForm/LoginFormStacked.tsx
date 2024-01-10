import * as React from 'react';
import {type NativeSyntheticEvent, type TextInputChangeEventData, View} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

import {TextInput} from '@/components/UI';

import style from './style';

import type {SharedMembershipFormProps} from '.';

export default function LoginFormStacked({
  onChangeLogin,
}: Pick<SharedMembershipFormProps, 'onChangeLogin'>) {
  return (
    <View style={style.inputStacksContainer}>
      <TextInput
        icon={() => <Icon name="at-sign" color="#CDCBCB" size={20} />}
        onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>) => onChangeLogin!(e, 'email')}
        placeholder="masukkan email anda"
      />
      <TextInput
        icon={() => <Icon name="lock" color="#CDCBCB" size={20} />}
        onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>) =>
          onChangeLogin!(e, 'password')
        }
        placeholder="masukkan password anda"
        secureTextEntry={true}
      />
    </View>
  );
}
