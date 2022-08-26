import { createAction } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../const';
import { OfferType } from '../types/offerType';
import { UserDataType } from '../types/user-data';

//Список действий, на основании которых формируется новый state:
// изменение города и заполнение списка предложений по аренде
const changeCity = createAction<{ city: string }>('changeCity');
const loadOffers = createAction<OfferType[]>('loadOffers');
const setDataLoadedStatus = createAction<boolean>('setDataLoadedStatus');
const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
const setError = createAction<string | null>('setError');
const setUserData = createAction<UserDataType>('user/setUserData');

export { changeCity, loadOffers, setDataLoadedStatus, requireAuthorization, setError, setUserData };
