import * as React from 'react';

import {useNavigation} from '@react-navigation/native';

import {Box, Button, Text, TextInput} from '@/components/UI';
import type {LoginScreenProps} from '@/screens/Login';
import type {RegisterScreenProps} from '@/screens/Register';

import style from './style';

type AuthFormProps = {
  useFor: 'Login' | 'Register';
};

export default function AuthForm({useFor}: AuthFormProps) {
  const navigate = useNavigation<LoginScreenProps | RegisterScreenProps>();

  const navigateToRegisterScreen = React.useCallback(() => {
    if (useFor === 'Login') {
      navigate.navigate('Register');
    } else {
      navigate.navigate('Login');
    }
  }, []);

  return (
    <Box variants="flexCol">
      {useFor === 'Login' ? (
        <React.Fragment>
          <TextInput placeholder="masukkan email anda" />
          <TextInput secureTextEntry={true} placeholder="masukkan password anda" />
        </React.Fragment>
      ) : (
        <React.Fragment>
          <TextInput placeholder="masukkan email anda" />
          <TextInput placeholder="nama depan" />
          <TextInput placeholder="name belakang" />
          <TextInput secureTextEntry={true} placeholder="buat password" />
          <TextInput secureTextEntry={true} placeholder="konfirmasi password" />
        </React.Fragment>
      )}
      <Button variants="active">
        <Text variants="active">{useFor === 'Login' ? 'Masuk' : 'Registrasi'}</Text>
      </Button>
      <Box variants="flexRow">
        <Text variants="base">
          {useFor === 'Login' ? 'belum punya akun? registrasi ' : 'sudah punya akun? login '}
          <Text onPress={navigateToRegisterScreen} variants="base" style={[style.navigation]}>
            di sini
          </Text>
        </Text>
      </Box>
    </Box>
  );
}
