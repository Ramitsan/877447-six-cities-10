enum AppRoute {
  Root = '/',
  Favorites = '/favorites',
  Login = '/login',
  Room = '/offer/:id'
}

enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

const URL_MARKER_DEFAULT = '../img/pin.svg';

const URL_MARKER_CURRENT = '../img/pin-active.svg';

// const selectedLocation = {
//   latitude: 52.3909553943508,
//   longitude: 4.85309666406198,
//   zoom: 10
// };

export {AppRoute, AuthorizationStatus, URL_MARKER_DEFAULT, URL_MARKER_CURRENT};
