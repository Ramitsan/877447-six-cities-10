import { createAction } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../const';
import { OfferType } from '../types/offerType';

//Список действий, на основании которых формируется новый state:
// изменение города и заполнение списка предложений по аренде
const changeCity = createAction<{ city: string }>('changeCity');
const loadOffers = createAction<OfferType[]>('loadOffers');
const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export { changeCity, loadOffers, requireAuthorization };
