import * as React from 'react';
import {
  Keyboard,
  type NativeSyntheticEvent,
  type TextInputChangeEventData,
  View,
} from 'react-native';

import type {NativeStackNavigationProp} from '@react-navigation/native-stack/lib/typescript/src/types';

import {login} from '@/app';
import {AppHeadline, AppLogo, AppMembershipForm} from '@/components/Shared';
import {useAppDispatch, useAppSelector} from '@/hooks';
import type {LoginPayload} from '@/types';

import style from './style';

type LoginParamNavList = {
  Register: undefined;
};

export type LoginScreenProps = {
  navigation: NativeStackNavigationProp<LoginParamNavList, 'Register'>;
};

export default function LoginScreen({navigation}: LoginScreenProps) {
  const [loginForm, setLoginForm] = React.useState<LoginPayload>({
    email: '',
    password: '',
  });

  const dispatch = useAppDispatch();
  const {isLoading} = useAppSelector(state => state.membership);

  const handleChangeForm = (
    e: NativeSyntheticEvent<TextInputChangeEventData>,
    key: keyof LoginPayload,
  ) => {
    setLoginForm(prevState => ({
      ...prevState,
      [key]: e.nativeEvent.text,
    }));
  };

  const handleLogin = () => {
    const {email, password} = loginForm;

    Keyboard.dismiss();
    dispatch(login({email, password}));
  };

  const handleNavigate = () => {
    navigation.replace('Register');
  };

  return (
    <View style={style.mainContainer}>
      <AppLogo />
      <AppHeadline title="Masuk atau buat akun untuk mulai" />
      <AppMembershipForm
        isLoading={isLoading}
        onChangeLogin={handleChangeForm}
        onPressNavigate={handleNavigate}
        onPressSubmit={handleLogin}
        useFor="Login"
      />
    </View>
  );
}
