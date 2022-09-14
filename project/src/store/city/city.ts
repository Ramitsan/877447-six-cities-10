import { createSlice } from '@reduxjs/toolkit';
import { DEFAULT_CITY, NameSpace } from '../../const';
import { CityProcess } from '../../types/stateType';
// import { changeCity } from '../actions';

const initialState: CityProcess = {
  city: DEFAULT_CITY,
};

export const cityProcess = createSlice({
  name: NameSpace.Favorite,
  initialState,
  reducers: {
    changeCity: (state, action) => {
      state.city = action.payload.city;
    },
  },
});

export const {changeCity} = cityProcess.actions;
