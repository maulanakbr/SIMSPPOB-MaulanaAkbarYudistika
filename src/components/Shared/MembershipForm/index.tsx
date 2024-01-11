import * as React from 'react';
import {
  type GestureResponderEvent,
  type NativeSyntheticEvent,
  type TextInputChangeEventData,
  View,
} from 'react-native';

import {Text} from 'react-native-paper';

import {AppButton} from '@/components/UI';
import type {LoginPayload, RegisterPayload} from '@/types';

import LoginFormStacked from './LoginFormStacked';
import RegisterFormStacked from './RegisterFormStacked';
import style from './style';

export type SharedMembershipFormProps = {
  isLoading: boolean;
  onPressSubmit: (e: GestureResponderEvent) => void;
  onPressNavigate: (e: GestureResponderEvent) => void;
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
  onChangeLogin,
  onChangeRegister,
  onPressNavigate,
  onPressSubmit,
  useFor,
}: SharedMembershipFormProps) {
  return (
    <View style={style.formContainer}>
      {useFor === 'Login' ? (
        <LoginFormStacked onChangeLogin={onChangeLogin} />
      ) : (
        <RegisterFormStacked onChangeRegister={onChangeRegister} />
      )}
      <AppButton
        mode="contained"
        title={useFor === 'Login' ? 'Masuk' : 'Registrasi'}
        onPress={onPressSubmit}
        loading={isLoading}
      />
      <View style={style.footerContainer}>
        <Text variant="titleSmall">
          {useFor === 'Login' ? 'belum punya akun? registrasi' : 'sudah punya akun? login'}
        </Text>
        <AppButton mode="text" title="di sini" compact={true} onPress={onPressNavigate} />
      </View>
    </View>
  );
}
