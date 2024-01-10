import * as React from 'react';
import {type NativeSyntheticEvent, type TextInputChangeEventData, View} from 'react-native';

import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';

import {Button, TextInput} from '@/components/UI';
import type {LoginPayload, RegisterPayload} from '@/types';

import style from './style';

type AppNavParmamList = {
  Login: undefined;
  Register: undefined;
};

type MembershipFormProps = {
  isLoading: boolean;
  navigation?: NativeStackNavigationProp<AppNavParmamList, 'Login' | 'Register'>;
  onPress: () => void;
  onChangeLogin?: (
    e: NativeSyntheticEvent<TextInputChangeEventData>,
    key: keyof LoginPayload,
  ) => void;
  onChangeRegister?: (
    e: NativeSyntheticEvent<TextInputChangeEventData>,
    key: keyof RegisterPayload,
  ) => void;
  useFor: 'Login' | 'Register';
};

export default function MembershipForm({
  isLoading,
  navigation,
  onChangeLogin,
  onChangeRegister,
  onPress,
  useFor,
}: MembershipFormProps) {
  const navigateToRegisterOrLoginScreen = React.useCallback(() => {
    if (useFor === 'Login') {
      navigation?.replace('Register');
    } else {
      navigation?.replace('Login');
    }
  }, []);

  return (
    <View style={style.formContainer}>
      {useFor === 'Login' ? (
        <View style={style.inputStacksContainer}>
          <TextInput
            icon={() => <Icon name="at-sign" color="#CDCBCB" size={20} />}
            onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>) =>
              onChangeLogin!(e, 'email')
            }
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
      ) : (
        <View style={style.inputStacksContainer}>
          <TextInput
            icon={() => <Icon name="at-sign" color="#CDCBCB" size={20} />}
            onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>) =>
              onChangeRegister!(e, 'email')
            }
            placeholder="masukkan email anda"
          />
          <TextInput
            icon={() => <Icon name="user" color="#CDCBCB" size={20} />}
            onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>) =>
              onChangeRegister!(e, 'first_name')
            }
            placeholder="nama depan"
          />
          <TextInput
            icon={() => <Icon name="user" color="#CDCBCB" size={20} />}
            onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>) =>
              onChangeRegister!(e, 'last_name')
            }
            placeholder="name belakang"
          />
          <TextInput
            icon={() => <Icon name="lock" color="#CDCBCB" size={20} />}
            placeholder="buat password"
            onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>) =>
              onChangeRegister!(e, 'password')
            }
            secureTextEntry={true}
          />
          <TextInput
            icon={() => <Icon name="lock" color="#CDCBCB" size={20} />}
            onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>) =>
              onChangeRegister!(e, 'confirmPassword')
            }
            placeholder="konfirmasi password"
            secureTextEntry={true}
          />
        </View>
      )}
      <Button mode="contained" title="Masuk" onPress={onPress} loading={isLoading} />
      <View style={style.footerContainer}>
        <Text variant="titleSmall">belum punya akun? registrasi</Text>
        <Button
          mode="text"
          title="di sini"
          compact={true}
          onPress={navigateToRegisterOrLoginScreen}
        />
      </View>
    </View>
  );
}
