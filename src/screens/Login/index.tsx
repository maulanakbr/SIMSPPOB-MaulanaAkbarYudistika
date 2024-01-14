import * as React from 'react';
import {
  Keyboard,
  type NativeSyntheticEvent,
  type TextInputChangeEventData,
  View,
} from 'react-native';

import type {NativeStackNavigationProp} from '@react-navigation/native-stack/lib/typescript/src/types';
import Toast from 'react-native-toast-message';

import {login} from '@/app';
import {AppHeadline, AppLogo, AppMembershipForm} from '@/components/Shared';
import {useAppDispatch, useAppSelector} from '@/hooks';
import {LoginPayload as LoginValidation} from '@/lib';
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
  const {isLoading, isError} = useAppSelector(state => state.membership);

  const validation = React.useCallback(
    (payload: LoginPayload) => {
      const parsedBody = LoginValidation.safeParse(payload);
      const result: string[] = [];

      if (!parsedBody.success) {
        const errors = parsedBody.error;

        errors.issues.forEach(error => {
          result.push(error.message);
        });
      }

      if (result.length === 0) {
        return undefined;
      }

      return result[result.length - 1];
    },
    [loginForm, setLoginForm],
  );

  React.useEffect(() => {
    if (validation(loginForm) !== undefined) {
      Toast.show({
        type: 'error',
        text1: validation(loginForm),
        position: 'bottom',
      });
    }
  }, [loginForm, setLoginForm]);

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
    Keyboard.dismiss();
    dispatch(login({email: loginForm.email, password: loginForm.password})).then(result => {
      if (result.meta.requestStatus === 'rejected') {
        Toast.show({
          type: 'error',
          text1: isError,
          position: 'bottom',
        });
      }
    });
  };

  return (
    <View style={style.mainContainer}>
      <AppLogo />
      <AppHeadline title="Masuk atau buat akun untuk mulai" />
      <AppMembershipForm
        isLoading={isLoading}
        onChangeLogin={handleChangeForm}
        onPressNavigate={() => navigation.replace('Register')}
        onPressSubmit={handleLogin}
        useFor="Login"
      />
      <Toast />
    </View>
  );
}
