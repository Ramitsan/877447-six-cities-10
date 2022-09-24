import { store } from '../store';
import { AuthorizationStatus } from '../const';
import { OfferType } from './offerType';
import { UserDataType } from './user-data';

// ReturnType позволяет получить тип возвращаемого значения функции
// typeof определяет тип
// store.getState - это функция, которая возвращает объект состояния
export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type UserProcess = {
    authorizationStatus: AuthorizationStatus,
    userData: UserDataType | null,
};

export type DataProcess = {
    isDataLoaded: boolean,
    offers: OfferType[],
};

export type FavoriteProcess = {
    isDataLoaded: boolean,
    favoriteOffers: OfferType[],
};

export type ErrorProcess = {
    error: string | null,
};

export type CityProcess = {
    city: string;
};
