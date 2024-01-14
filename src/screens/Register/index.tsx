import * as React from 'react';
import {
  Keyboard,
  type NativeSyntheticEvent,
  type TextInputChangeEventData,
  View,
} from 'react-native';

import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import Toast from 'react-native-toast-message';

import {register} from '@/app';
import {AppHeadline, AppLogo, AppMembershipForm} from '@/components/Shared';
import {useAppDispatch, useAppSelector} from '@/hooks';
import {RegisterPayload as RegisterValidation} from '@/lib';
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

  const registerCheckValidation = React.useCallback(
    (payload: RegisterPayload) => {
      const parsedBody = RegisterValidation && RegisterValidation.safeParse(payload);
      const result: string[] = [];

      if (parsedBody && !parsedBody.success) {
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
    [registerForm, setRegisterForm],
  );

  const handleChangeForm = (
    e: NativeSyntheticEvent<TextInputChangeEventData>,
    key: keyof RegisterPayload,
  ) => {
    setRegisterForm(prevState => ({
      ...prevState,
      [key]: e.nativeEvent.text,
    }));
  };

  React.useEffect(() => {
    if (registerCheckValidation(registerForm) !== undefined) {
      Toast.show({
        type: 'error',
        text1: registerCheckValidation(registerForm),
        position: 'bottom',
      });
    }
  }, [registerForm, setRegisterForm]);

  const handleRegister = () => {
    dispatch(
      register({
        email: registerForm.email,
        first_name: registerForm.first_name,
        last_name: registerForm.last_name,
        password: registerForm.password,
      }),
    ).then(item => {
      if (item.meta.requestStatus === 'fulfilled') {
        Keyboard.dismiss();
        navigation.replace('Login');
      }
    });
  };

  return (
    <View style={style.mainContainer}>
      <AppLogo />
      <AppHeadline title="Lengkapi data untuk membuat akun" />
      <AppMembershipForm
        isLoading={isLoading}
        onChangeRegister={handleChangeForm}
        onPressNavigate={() => navigation.replace('Login')}
        onPressSubmit={handleRegister!}
        useFor="Register"
      />
    </View>
  );
}
