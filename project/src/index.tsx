import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { store} from './store';
import { comments } from './mocks/comments';
import { CITIES } from './const';
import { fetchOffersAction } from './store/api-actions';
import ErrorMessage from './components/error-message/error-message';
import {checkAuthAction} from './store/api-actions';

// checkAuthAction - действие для проверки наличия авторизации
store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

store.dispatch(fetchOffersAction());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorMessage />
      <App
        comments={comments}
        cities={CITIES}
      />
    </Provider>
  </React.StrictMode>,
);
