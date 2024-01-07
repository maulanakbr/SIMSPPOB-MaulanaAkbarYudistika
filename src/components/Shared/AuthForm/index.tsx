import * as React from 'react';
import type {GestureResponderEvent, NativeSyntheticEvent, TextInputChangeEventData} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {Box, Button, Text, TextInput} from '@/components/UI';
import type {LoginScreenProps} from '@/screens/Login';
import type {RegisterScreenProps} from '@/screens/Register';
import {loginApi, type LoginPayload, type RegisterPayload, useRegisterUserMutation} from '@/store/services';

import style from './style';

type AuthFormProps = {
  useFor: 'Login' | 'Register';
};

type RegisterFormState = {
  confirmPassword: string;
} & RegisterPayload;

export default function AuthForm({useFor}: AuthFormProps) {
  const [registerForm, setRegisterForm] = React.useState<RegisterFormState>({
    email: '',
    first_name: '',
    last_name: '',
    password: '',
    confirmPassword: '',
  });

  const [loginForm, setLoginForm] = React.useState<LoginPayload>({
    email: '',
    password: '',
  });

  const [registerUserMutation, {data: dataRegister, isLoading}] = useRegisterUserMutation();
  const [loginUserMutation, {data: dataLogin}] = loginApi.useLoginUserMutation();

  const navigate = useNavigation<LoginScreenProps | RegisterScreenProps>();

  const navigateToRegisterOrLoginScreen = React.useCallback(() => {
    if (useFor === 'Login') {
      navigate.navigate('Register');
    } else {
      navigate.navigate('Login');
    }
  }, []);

  const handleChangeForm = React.useCallback(
    (e: NativeSyntheticEvent<TextInputChangeEventData>, state: keyof typeof registerForm) => {
      if (useFor === 'Register') {
        setRegisterForm(prevState => ({
          ...prevState,
          [state]: e.nativeEvent.text,
        }));
      } else {
        setLoginForm(prevState => ({
          ...prevState,
          [state]: e.nativeEvent.text,
        }));
      }
    },
    [registerForm, loginForm],
  );

  const handleRegister = async (e: GestureResponderEvent) => {
    e.preventDefault();

    try {
      const {email, first_name, last_name, password, confirmPassword} = registerForm;

      if (password === confirmPassword) {
        await registerUserMutation({
          email,
          first_name,
          last_name,
          password,
        });
      }

      navigate.navigate('Login');
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogin = (e: GestureResponderEvent) => {
    e.preventDefault();

    const {email, password} = loginForm;

    console.log('submitClicked');
    loginUserMutation({body: {email, password}});
  };

  console.log('dataRegister', dataRegister);
  console.log('dataLogin', dataLogin);
  console.log(isLoading);

  return (
    <Box variants="flexCol">
      {useFor === 'Login' ? (
        <React.Fragment>
          <TextInput
            placeholder="masukkan email anda"
            onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>) => handleChangeForm(e, 'email')}
          />
          <TextInput
            secureTextEntry={true}
            placeholder="masukkan password anda"
            onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>) => handleChangeForm(e, 'password')}
          />
        </React.Fragment>
      ) : (
        <React.Fragment>
          <TextInput
            placeholder="masukkan email anda"
            onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>) => handleChangeForm(e, 'email')}
          />
          <TextInput
            placeholder="nama depan"
            onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>) => handleChangeForm(e, 'first_name')}
          />
          <TextInput
            placeholder="name belakang"
            onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>) => handleChangeForm(e, 'last_name')}
          />
          <TextInput
            secureTextEntry={true}
            placeholder="buat password"
            onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>) => handleChangeForm(e, 'password')}
          />
          <TextInput
            secureTextEntry={true}
            placeholder="konfirmasi password"
            onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>) => handleChangeForm(e, 'confirmPassword')}
          />
        </React.Fragment>
      )}
      <Button
        variants="active"
        onPress={(e: GestureResponderEvent) => {
          if (useFor === 'Login') {
            handleLogin(e);
          } else {
            handleRegister(e);
          }
        }}>
        <Text variants="active">{useFor === 'Login' ? 'Masuk' : 'Registrasi'}</Text>
      </Button>
      <Box variants="flexRow">
        <Text variants="base">
          {useFor === 'Login' ? 'belum punya akun? registrasi ' : 'sudah punya akun? login '}
          <Text onPress={navigateToRegisterOrLoginScreen} variants="base" style={[style.navigation]}>
            di sini
          </Text>
        </Text>
      </Box>
    </Box>
  );
}
