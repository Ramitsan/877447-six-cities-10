import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute, AuthorizationStatus,TIMEOUT_SHOW_ERROR } from '../const';
import { OfferType } from '../types/offerType';
import { AppDispatch, State } from '../types/stateType';
import { loadOffers, setDataLoadedStatus, requireAuthorization, setError } from './actions';
import {AuthDataType} from '../types/auth-data';
import {UserDataType} from '../types/user-data';
import { dropToken, saveToken } from '../services/token';
import { store } from '.';


// createAsyncThunk позволяет создавать асинхронные действия

// Постоянное хранение ошибки в глобальном состоянии бессмысленно. Поэтому,
// после того как мы покажем ее пользователю нашего приложения, она станет
// бесполезна. Удалим ее из хранилища.
// Для этого создадим синхронное действие `clearErrorAction` и с помощью
// `setTimeout` удалим ошибку из глобального состояния.
export const clearErrorAction = createAsyncThunk(
  'clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'loadOffers', async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<OfferType[]>(APIRoute.Offers);
    dispatch(setDataLoadedStatus(true));
    dispatch(loadOffers(data));
    dispatch(setDataLoadedStatus(false));
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/requireAuthorization',
  async (_arg, { dispatch, extra: api }) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthDataType, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<UserDataType>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);
