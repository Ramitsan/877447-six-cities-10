export enum AppRoute {
  Root = '/',
  Favorites = '/favorites',
  Login = '/login',
  Room = '/offer/:id'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
