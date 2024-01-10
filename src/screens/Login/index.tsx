import * as React from 'react';
import {
  Keyboard,
  type NativeSyntheticEvent,
  type TextInputChangeEventData,
  View,
} from 'react-native';

import type {NativeStackNavigationProp} from '@react-navigation/native-stack/lib/typescript/src/types';
import {Text} from 'react-native-paper';

import {login} from '@/app';
import {MembershipForm} from '@/components/Shared';
import Brands from '@/components/UI/Brands';
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
  const {isLoading, isError, token} = useAppSelector(state => state.membership);

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

    dispatch(login({email, password})).then(item => {
      if ((item.meta.requestStatus = 'fulfilled')) {
        navigation.replace('Main');
      }
    });
  };

  return (
    <View style={style.mainContainer}>
      <Brands />
      <View style={style.headlineContainer}>
        <Text variant="headlineLarge" style={style.headlineText}>
          Masuk atau buat akun untuk memulai
        </Text>
      </View>
      <MembershipForm
        isLoading={isLoading}
        onChangeLogin={handleChangeForm}
        onPress={handleLogin}
        useFor="Login"
      />
    </View>
  );
}
