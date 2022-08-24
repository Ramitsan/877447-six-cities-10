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

const TIMEOUT_SHOW_ERROR = 5000;

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

const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

const CITIES_DATA = [
  {
    location: {
      latitude:  48.853410,
      longitude: 2.348800,
      zoom: 13
    },
    name: 'Paris',
  },
  {
    location: {
      latitude:  50.935173,
      longitude: 6.961899,
      zoom: 13
    },
    name: 'Cologne',
  },
  {
    location: {
      latitude:  50.8503396,
      longitude: 4.351710,
      zoom: 13
    },
    name: 'Brussels',
  },
  {
    location: {
      latitude:  52.377956,
      longitude: 4.897070,
      zoom: 13
    },
    name: 'Amsterdam',
  },
  {
    location: {
      latitude:  53.551086,
      longitude: 9.993682,
      zoom: 13
    },
    name: 'Hamburg',
  },
  {
    location: {
      latitude:  51.233334,
      longitude: 6.773455,
      zoom: 13
    },
    name: 'Dusseldorf',
  },
];

export {AppRoute, AuthorizationStatus, URL_MARKER_DEFAULT, URL_MARKER_CURRENT, DEFAULT_CITY, CITIES, APIRoute, TIMEOUT_SHOW_ERROR, DEFAULT_CITY_DATA, CITIES_DATA};
