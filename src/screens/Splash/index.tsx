import * as React from 'react';
import {Image, View} from 'react-native';

import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {AppHeadline, AppLogo} from '@/components/Shared';

import style from './style';

type SplashParamNavList = {
  Login: undefined;
};

export type SplashScreenProps = {
  navigation: NativeStackNavigationProp<SplashParamNavList, 'Login'>;
};

export default function SplashScreen({navigation}: SplashScreenProps) {
  React.useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Login');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={style.container}>
      <Image source={require('../../assets/Logo.png')} style={style.image} />
      <AppHeadline
        variant="withSubtitle"
        textInput={['SIMS-PPOB', 'Maulana Akbar Yudistika']}
        style={[{justifyContent: 'center', alignItems: 'center', fontWeight: '800'}]}
      />
    </View>
  );
}
