import * as React from 'react';
import type {NativeSyntheticEvent, TextInputChangeEventData} from 'react-native';

import type {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {Box, Button, Text, TextInput} from '@/components/UI';
import type {LoginPayload, RegisterPayload} from '@/types';

import style from './style';

type AppNavParmamList = {
  Login: undefined;
  Register: undefined;
};

type MembershipFormProps = {
  navigation?: NativeStackNavigationProp<AppNavParmamList, 'Login' | 'Register'>;
  useFor: 'Login' | 'Register';
  onPress: () => void;
  onChangeLogin?: (
    e: NativeSyntheticEvent<TextInputChangeEventData>,
    key: keyof LoginPayload,
  ) => void;
  onChangeRegister?: (
    e: NativeSyntheticEvent<TextInputChangeEventData>,
    key: keyof RegisterPayload,
  ) => void;
};

export default function MembershipForm({
  navigation,
  onChangeLogin,
  onChangeRegister,
  onPress,
  useFor,
}: MembershipFormProps) {
  // const [registerForm, setRegisterForm] = React.useState<RegisterFormState>({
  //   email: '',
  //   first_name: '',
  //   last_name: '',
  //   password: '',
  //   confirmPassword: '',
  // });

  // const [registerUserMutation] = useRegisterUserMutation();

  // const navigate = useNavigation<LoginScreenProps | RegisterScreenProps>();

  const navigateToRegisterOrLoginScreen = React.useCallback(() => {
    if (useFor === 'Login') {
      navigation?.replace('Register');
    } else {
      navigation?.replace('Login');
    }
  }, []);

  // const handleChangeForm = React.useCallback(
  //   (e: NativeSyntheticEvent<TextInputChangeEventData>, state: keyof typeof registerForm | keyof typeof loginForm) => {
  //     if (useFor === 'Register') {
  //       setRegisterForm((prevState: RegisterPayload) => ({
  //         ...prevState,
  //         [state]: e.nativeEvent.text,
  //       }));
  //     } else {
  //       setLoginForm((prevState: LoginPayload) => ({
  //         ...prevState,
  //         [state]: e.nativeEvent.text,
  //       }));
  //     }
  //   },
  //   [registerForm, loginForm],
  // );

  // const handleRegister = async () => {
  //   try {
  //     const {email, first_name, last_name, password, confirmPassword} = registerForm;

  //     if (password === confirmPassword) {
  //       await registerUserMutation({
  //         email,
  //         first_name,
  //         last_name,
  //         password,
  //       });
  //     }

  //     navigate.navigate('Login');
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  return (
    <Box variants="flexCol">
      {useFor === 'Login' ? (
        <React.Fragment>
          <TextInput
            placeholder="masukkan email anda"
            onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>) =>
              onChangeLogin!(e, 'email')
            }
          />
          <TextInput
            secureTextEntry={true}
            placeholder="masukkan password anda"
            onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>) =>
              onChangeLogin!(e, 'password')
            }
          />
        </React.Fragment>
      ) : (
        <React.Fragment>
          <TextInput
            placeholder="masukkan email anda"
            onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>) =>
              onChangeRegister!(e, 'email')
            }
          />
          <TextInput
            placeholder="nama depan"
            onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>) =>
              onChangeRegister!(e, 'first_name')
            }
          />
          <TextInput
            placeholder="name belakang"
            onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>) =>
              onChangeRegister!(e, 'last_name')
            }
          />
          <TextInput
            secureTextEntry={true}
            placeholder="buat password"
            onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>) =>
              onChangeRegister!(e, 'password')
            }
          />
          <TextInput
            secureTextEntry={true}
            placeholder="konfirmasi password"
            onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>) =>
              onChangeRegister!(e, 'confirmPassword')
            }
          />
        </React.Fragment>
      )}
      <Button variants="active" onPress={onPress}>
        <Text variants="active">{useFor === 'Login' ? 'Masuk' : 'Registrasi'}</Text>
      </Button>
      <Box variants="flexRow">
        <Text variants="base">
          {useFor === 'Login' ? 'belum punya akun? registrasi ' : 'sudah punya akun? login '}
          <Text
            onPress={navigateToRegisterOrLoginScreen}
            variants="base"
            style={[style.navigation]}>
            di sini
          </Text>
        </Text>
      </Box>
    </Box>
  );
}
