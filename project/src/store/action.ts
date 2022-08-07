import { createAction } from '@reduxjs/toolkit';
import { OfferType } from '../types/offerType';

//Список действий, на основании которых формируется новый state:
// изменение города и заполнение списка предложений по аренде
const changeCity = createAction<{ city: string }>('changeCity');
const loadOffers = createAction<{ cityOffers: OfferType[] }>('loadOffers');

export {changeCity, loadOffers};
