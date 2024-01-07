import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';

import {AppNav, AuthNav} from '@/navigation';
import {store} from '@/store';

function App() {
  const isAuth = false;

  return (
    <Provider store={store}>
      <NavigationContainer>{isAuth ? <AppNav /> : <AuthNav />}</NavigationContainer>
    </Provider>
  );
}

export default App;
