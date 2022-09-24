import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { DataProcess } from '../../types/stateType';
import { fetchFavoriteOfferAction, fetchOffersAction } from '../api-actions';

const initialState: DataProcess = {
  offers: [],
  isDataLoaded: false,
};

export const dataProcess = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isDataLoaded = true;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isDataLoaded = false;
      })
      // получаем оффер с обновленным статусом избранного и подменяем в списке офферов
      .addCase(fetchFavoriteOfferAction.fulfilled, (state, action) => {
        const offers = [...state.offers];
        const index = offers.findIndex((offer) => offer.id === action.payload.id);
        offers[index] = action.payload;
        state.offers = offers;
      });
    // .addCase(fetchFavoriteOffersListAction.pending, (state) => {
    //   state.isDataLoaded = true;
    // })
    // .addCase(fetchFavoriteOffersListAction.fulfilled, (state, action) => {
    //   state.favoriteOffers = action.payload;
    //   state.isDataLoaded = false;
    // });
  }
});
