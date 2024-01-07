import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {AppNav, AuthNav} from '@/navigation';

function App() {
  const isAuth = false;

  return <NavigationContainer>{isAuth ? <AppNav /> : <AuthNav />}</NavigationContainer>;
}

export default App;
