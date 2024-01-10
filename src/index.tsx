import * as React from 'react';

import {PaperProvider} from 'react-native-paper';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import {persistor, store} from '@/app/store';
import {MainContainer} from '@/navigation';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <PaperProvider>
          <MainContainer />
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
