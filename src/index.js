import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import { Provider } from 'react-redux';
import storeFile from './store/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={storeFile.store}>
      <PersistGate
        loading="downloading data..."
        persistor={storeFile.persistor}
      >
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
