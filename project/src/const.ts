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

const enum APIRoute {
  Offers = '/hotels',
  Login = '/login',
  Logout = '/logout',
}

const URL_MARKER_DEFAULT = '../img/pin.svg';
const URL_MARKER_CURRENT = '../img/pin-active.svg';

const DEFAULT_CITY = 'Paris';
const DEFAULT_CITY_DATA = {
  location: {
    latitude:  48.853410,
    longitude: 2.348800,
    zoom: 13
  },
  name: 'Paris',
};

const cities = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export {AppRoute, AuthorizationStatus, URL_MARKER_DEFAULT, URL_MARKER_CURRENT, DEFAULT_CITY, cities, APIRoute, DEFAULT_CITY_DATA};
