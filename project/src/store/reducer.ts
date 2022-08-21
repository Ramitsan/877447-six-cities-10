import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus, DEFAULT_CITY } from '../const';
// import { offers } from '../mocks/offers';
import { changeCity, loadOffers, requireAuthorization } from './actions';
import { OfferType } from '../types/offerType';

type InitalStateType = {
  city: string;
  offers: OfferType[];
  authorizationStatus: AuthorizationStatus;
}

// Объект начального состояния:
// город (используется для отбора списка предложений в определённом городе)
// и список предложений по аренде.
const initialState: InitalStateType = {
  city: DEFAULT_CITY,
  offers: [],
  authorizationStatus: AuthorizationStatus.Unknown,
};

//Функция-редьюсер. Она принимает в качестве параметров текущий state и действие (action).
// Результатом выполнения редьюсера станет новое состояние
export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload.city;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});
