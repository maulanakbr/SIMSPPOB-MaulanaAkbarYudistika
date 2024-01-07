import * as React from 'react';
import {Image} from 'react-native';

import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import AuthForm from '@/components/Shared/AuthForm';
import {Box, Text} from '@/components/UI';
import type {AuthNavParamList} from '@/navigation/AuthNav';

import style from './style';

export type RegisterScreenProps = NativeStackNavigationProp<AuthNavParamList, 'Login'>;

export default function RegisterScreen() {
  return (
    <Box variants="container">
      <Box variants="flexRow">
        <Image source={require('@/assets/Logo.png')} style={style.imgLogo} />
        <Text variants="subheader">SIMS PPOB</Text>
      </Box>
      <Text variants="header">Lengkapi data untuk memulai</Text>
      <AuthForm useFor="Register" />
    </Box>
  );
}
