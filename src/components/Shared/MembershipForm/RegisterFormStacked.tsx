import * as React from 'react';
import {type NativeSyntheticEvent, type TextInputChangeEventData, View} from 'react-native';

import {useTheme} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';

import {AppTextInput} from '@/components/UI';
import theme from '@/theme';

import style from './style';

import type {SharedMembershipFormProps} from '.';

export default function RegisterFormStacked({
  onChangeRegister,
}: Pick<SharedMembershipFormProps, 'onChangeRegister'>) {
  const {colors} = useTheme<typeof theme>();

  return (
    <View style={style.inputStacksContainer}>
      <AppTextInput
        icon={() => <Icon name="at-sign" color={colors.tertiary} size={20} />}
        onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>) =>
          onChangeRegister!(e, 'email')
        }
        placeholder="masukkan email anda"
      />
      <AppTextInput
        icon={() => <Icon name="user" color={colors.tertiary} size={20} />}
        onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>) =>
          onChangeRegister!(e, 'first_name')
        }
        placeholder="nama depan"
      />
      <AppTextInput
        icon={() => <Icon name="user" color={colors.tertiary} size={20} />}
        onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>) =>
          onChangeRegister!(e, 'last_name')
        }
        placeholder="name belakang"
      />
      <AppTextInput
        icon={() => <Icon name="lock" color={colors.tertiary} size={20} />}
        placeholder="buat password"
        onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>) =>
          onChangeRegister!(e, 'password')
        }
        secureTextEntry={true}
      />
      <AppTextInput
        icon={() => <Icon name="lock" color={colors.tertiary} size={20} />}
        onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>) =>
          onChangeRegister!(e, 'confirmPassword')
        }
        placeholder="konfirmasi password"
        secureTextEntry={true}
      />
    </View>
  );
}
