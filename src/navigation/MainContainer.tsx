import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {useAppSelector} from '@/hooks';

import AppNav from './AppNav';
import AuthNav from './AuthNav';

export default function MainContainer() {
  const {isLoggedIn, token} = useAppSelector(state => state.membership);

  return (
    <NavigationContainer>{!isLoggedIn && !token ? <AuthNav /> : <AppNav />}</NavigationContainer>
  );
}
