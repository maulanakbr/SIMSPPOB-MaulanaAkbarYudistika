import * as React from 'react';
import {
  Keyboard,
  type NativeSyntheticEvent,
  type TextInputChangeEventData,
  View,
} from 'react-native';

import type {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {register} from '@/app';
import {AppHeadline, AppLogo, AppMembershipForm} from '@/components/Shared';
import {useAppDispatch, useAppSelector} from '@/hooks';
import type {RegisterPayload} from '@/types';

import style from './style';

type RegisterParamNavList = {
  Login: undefined;
  Register: undefined;
};

export type RegisterScreenProps = {
  navigation: NativeStackNavigationProp<RegisterParamNavList, 'Login' | 'Register'>;
};

export default function RegisterScreen({navigation}: RegisterScreenProps) {
  const [registerForm, setRegisterForm] = React.useState<RegisterPayload>({
    email: '',
    first_name: '',
    last_name: '',
    password: '',
    confirmPassword: '',
  });

  const dispatch = useAppDispatch();
  const {isLoading} = useAppSelector(state => state.membership);

  const handleChangeForm = (
    e: NativeSyntheticEvent<TextInputChangeEventData>,
    key: keyof RegisterPayload,
  ) => {
    setRegisterForm(prevState => ({
      ...prevState,
      [key]: e.nativeEvent.text,
    }));
  };

  const handleRegister = () => {
    const {email, first_name, last_name, password} = registerForm;

    Keyboard.dismiss();

    dispatch(register({email, first_name, last_name, password})).then(item => {
      if ((item.meta.requestStatus = 'fulfilled')) {
        navigation.replace('Login');
      }
    });
  };

  const handleNavigate = () => {
    navigation.replace('Login');
  };

  return (
    <View style={style.mainContainer}>
      <AppLogo />
      <AppHeadline title="Lengkapi data untuk membuat akun" />
      <AppMembershipForm
        isLoading={isLoading}
        onChangeLogin={handleChangeForm}
        onPressNavigate={handleNavigate}
        onPressSubmit={handleRegister}
        useFor="Register"
      />
    </View>
  );
}
