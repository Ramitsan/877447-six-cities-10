import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { FavoriteProcess } from '../../types/stateType';
import { fetchFavoriteOffersListAction } from '../api-actions';

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
      });
  }
});
