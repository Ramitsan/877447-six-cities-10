import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { store} from './store';
import { comments } from './mocks/comments';
import { cities } from './const';
import { fetchOffersAction } from './store/api-actions';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

store.dispatch(fetchOffersAction());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        comments={comments}
        cities={cities}
      />
    </Provider>
  </React.StrictMode>,
);
