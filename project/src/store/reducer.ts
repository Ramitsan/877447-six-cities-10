import { createReducer } from '@reduxjs/toolkit';
import { DEFAULT_CITY } from '../const';
import { offers } from '../mocks/offers';
import { changeCity, loadOffers } from './action';

// Объект начального состояния:
// город (используется для отбора списка предложений в определённом городе)
// и список предложений по аренде.
const initialState = {
  city: DEFAULT_CITY,
  cityOffers: offers
};

//Функцию-редьюсер. Она принимает в качестве параметров текущий state и действие (action).
// Результатом выполнения редьюсера станет новое состояние
export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      const { city } = action.payload;
      state.city = city;
    })
    .addCase(loadOffers, (state, action) => {
      const { cityOffers } = action.payload;
      state.cityOffers = cityOffers;
    });
});
