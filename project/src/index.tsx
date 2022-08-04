import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { offers } from './mocks/offers';
import { comments } from './mocks/comments';

// const Setting = {
//   CARD_COUNT: 5,
// };

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      // cardCount = {Setting.CARD_COUNT}
      offers={offers}
      comments={comments}
    />
  </React.StrictMode>,
);
