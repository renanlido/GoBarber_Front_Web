import React from 'react';
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/es/integration/react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Head from '~/components/metaTags';

import './config/ReactotronConfig';

import history from './services/history';
import Routes from './routes';

import { store, persistor } from './store';

import GlobalStyle from './styles/global';

function App() {
  return (
    <HelmetProvider>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Router history={history}>
            <Routes />
            <Head />
            <GlobalStyle />
            <ToastContainer autoClose={3000} />
          </Router>
        </PersistGate>
      </Provider>
    </HelmetProvider>
  );
}

export default App;
