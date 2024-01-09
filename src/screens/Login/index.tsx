import * as React from 'react';
import {Image, type NativeSyntheticEvent, type TextInputChangeEventData} from 'react-native';

import type {NativeStackNavigationProp} from '@react-navigation/native-stack/lib/typescript/src/types';

import {login} from '@/app';
import AuthForm from '@/components/Shared/AuthForm';
import {Box, Text} from '@/components/UI';
import {useAppDispatch, useAppSelector} from '@/hooks';
import {LoginPayload} from '@/types';

import style from './style';

type AppNavParmamList = {
  Main: undefined;
};

export type LoginScreenProps = {
  navigation: NativeStackNavigationProp<AppNavParmamList, 'Main'>;
};

export default function LoginScreen({navigation}: LoginScreenProps) {
  const [loginForm, setLoginForm] = React.useState<LoginPayload>({
    email: '',
    password: '',
  });

  const dispatch = useAppDispatch();
  const {isLoading, isError, token} = useAppSelector(state => state.auth);

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

    dispatch(login({email, password})).then(item => {
      if ((item.meta.requestStatus = 'fulfilled')) {
        navigation.replace('Main');
      }
    });
  };

  if (isLoading) {
    return <Text variants="active">Loading!</Text>;
  }

  return (
    <Box variants="container">
      <Box variants="flexRow">
        <Image source={require('@/assets/Logo.png')} style={style.imgLogo} />
        <Text variants="subheader">SIMS PPOB</Text>
      </Box>
      <Text variants="header">Masuk atau buat akun untuk memulai</Text>
      <AuthForm useFor="Login" onPress={handleLogin} onChangeLogin={handleChangeForm} />
    </Box>
  );
}
