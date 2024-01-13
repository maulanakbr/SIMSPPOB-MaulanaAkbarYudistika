import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {useAppSelector} from '@/hooks';

import AppAuthNav from './AppAuthNav';
import AppMainNav from './AppMainNav';

export default function MainContainer() {
  const {isLoggedIn, token} = useAppSelector(state => state.membership);

  return (
    <NavigationContainer>
      {!isLoggedIn && !token ? <AppAuthNav /> : <AppMainNav />}
    </NavigationContainer>
  );
}
