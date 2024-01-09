import * as React from 'react';

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import {persistor, store} from '@/app/store';
import {MainContainer} from '@/navigation';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <MainContainer />
      </PersistGate>
    </Provider>
  );
}

export default App;
