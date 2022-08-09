const enum AppRoute {
  Root = '/',
  Favorites = '/favorites',
  Login = '/login',
  Room = '/offer/:id'
}

const enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

const URL_MARKER_DEFAULT = '../img/pin.svg';
const URL_MARKER_CURRENT = '../img/pin-active.svg';
const DEFAULT_CITY = 'Paris';

const cities = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export {AppRoute, AuthorizationStatus, URL_MARKER_DEFAULT, URL_MARKER_CURRENT, DEFAULT_CITY, cities};
