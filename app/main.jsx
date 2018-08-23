import React from 'react';
import ReactDOM from 'react-dom';
import Provider from 'react-redux/lib/components/Provider';
import { PersistGate } from 'redux-persist/lib/integration/react';
import persistStore from 'redux-persist/lib/persistStore';
import { ConnectedRouter } from 'react-router-redux';

/* eslint-disable import/no-unresolved */
import store, { history } from '@constants/store';
import App from '@containers/app/index';
/* eslint-enable import/no-unresolved */

const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('app')
);
