import * as React from 'react';

import {PaperProvider} from 'react-native-paper';
import Toast from 'react-native-toast-message';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import {persistor, store} from '@/app/store';
import {MainContainer} from '@/navigation';
import theme from '@/theme';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <PaperProvider theme={theme}>
          <MainContainer />

          <Toast />
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
