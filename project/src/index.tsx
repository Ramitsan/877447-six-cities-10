import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { store} from './store';
import { CITIES } from './const';
import { fetchFavoriteOffersListAction, fetchOffersAction } from './store/api-actions';
import ErrorMessage from './components/error-message/error-message';
import {checkAuthAction} from './store/api-actions';

//диспатчим действие для получения офферов
store.dispatch(fetchOffersAction());

// checkAuthAction - действие для проверки наличия авторизации
store.dispatch(checkAuthAction());

store.dispatch(fetchFavoriteOffersListAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorMessage />
      <App
        cities={CITIES}
      />
    </Provider>
  </React.StrictMode>,
);
