import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute, TIMEOUT_SHOW_ERROR } from '../const';
import { OfferType } from '../types/offerType';
import { AppDispatch, State } from '../types/stateType';
// import { setUserData } from './user-process/user-process';
import { AuthDataType } from '../types/auth-data';
import { UserDataType } from '../types/user-data';
import { dropToken, saveToken } from '../services/token';
// import { store } from '.';
// import { setError } from './error/error-process';

// createAsyncThunk позволяет создавать асинхронные действия

// Постоянное хранение ошибки в глобальном состоянии бессмысленно. Поэтому,
// после того как мы покажем ее пользователю нашего приложения, она станет
// бесполезна. Удалим ее из хранилища.
// Для этого создадим синхронное действие `clearErrorAction` и с помощью
// `setTimeout` удалим ошибку из глобального состояния.
export const clearErrorAction = createAsyncThunk<null>(
  'clearError',
  () => new Promise((resolve) => {
    setTimeout(
      () => resolve(null),
      TIMEOUT_SHOW_ERROR,
    );
  })
);

export const fetchOffersAction = createAsyncThunk<OfferType[], undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'loadOffers', async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<OfferType[]>(APIRoute.Offers);
    return data;
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/requireAuthorization',
  async (_arg, { dispatch, extra: api }) => {
    await api.get(APIRoute.Login);
  },
);

export const loginAction = createAsyncThunk<UserDataType, AuthDataType, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/login',
  async ({ email, password }, { dispatch, extra: api }) => {
    const { data } = await api.post<UserDataType>(APIRoute.Login, { email, password });
    // dispatch(setUserData(data));
    saveToken(data.token);
    return data;
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/logout',
  async (_arg, { dispatch, extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  },
);

// для получения списка избранного
export const fetchFavoriteOffersListAction = createAsyncThunk<OfferType[], undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'loadFavoreteOffersList', async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<OfferType[]>(APIRoute.Favorite);
    return data;
  },
);

// смена статуса избранного
export const fetchFavoriteOfferAction = createAsyncThunk<OfferType, { hotelId: number, status: number }, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'loadFavoreteOffers', async ({ hotelId, status }, { dispatch, extra: api }) => {
    const { data } = await api.post<OfferType>(`${APIRoute.Favorite}/${hotelId}/${status}`);
    return data;
  },
);
