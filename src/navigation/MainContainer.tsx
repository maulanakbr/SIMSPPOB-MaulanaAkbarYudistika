import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import AuthNav from './AuthNav';

export default function MainContainer() {
  return (
    <NavigationContainer>
      <AuthNav />
    </NavigationContainer>
  );
}
