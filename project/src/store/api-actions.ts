import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute } from '../const';
import { OfferType } from '../types/offerType';
import { AppDispatch, State } from '../types/stateType';
import { loadOffers } from './actions';

// createAsyncThunk позволяет создавать асинхронные действия
export const fetchOffersAction = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch,
    state: State,
    extra: AxiosInstance
  }>(
    'loadOffers', async (_arg, {dispatch, extra: api}) => {
      const {data} = await api.get<OfferType[]>(APIRoute.Offers);
      dispatch(loadOffers(data));
    },
  );
