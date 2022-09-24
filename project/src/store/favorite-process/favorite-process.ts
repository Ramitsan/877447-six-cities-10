import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { FavoriteProcess } from '../../types/stateType';
import { fetchFavoriteOfferAction, fetchFavoriteOffersListAction } from '../api-actions';

const initialState: FavoriteProcess = {
  favoriteOffers: [],
  isDataLoaded: false,
};

export const favoriteProcess = createSlice({
  name: NameSpace.Favorite,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFavoriteOffersListAction.pending, (state) => {
        state.isDataLoaded = true;
      })
      .addCase(fetchFavoriteOffersListAction.fulfilled, (state, action) => {
        state.favoriteOffers = action.payload;
        state.isDataLoaded = false;
      })
      // получаем оффер с обновленным статусом избранного и подменяем в списке офферов
      .addCase(fetchFavoriteOfferAction.fulfilled, (state, action) => {
        if (action.payload.isFavorite) {
          state.favoriteOffers = [...state.favoriteOffers, action.payload];
        } else {
          const offers = [...state.favoriteOffers];
          const index = offers.findIndex((offer) => offer.id === action.payload.id);
          // offers[index] = action.payload;
          offers.splice(index, 1);
          state.favoriteOffers = offers;
        }
      });
  }
});
