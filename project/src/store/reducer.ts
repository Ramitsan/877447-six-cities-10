import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus, DEFAULT_CITY } from '../const';
// import { offers } from '../mocks/offers';
import { changeCity, loadOffers, setDataLoadedStatus, requireAuthorization, setError, setUserData } from './actions';
import { OfferType } from '../types/offerType';
import { UserDataType } from '../types/user-data';
import { CommentType } from '../types/commentType';

type InitalStateType = {
  city: string;
  offers: OfferType[];
  authorizationStatus: AuthorizationStatus;
  isDataLoaded: boolean,
  error: string | null,
  userData: UserDataType | null,
  comments: CommentType[],
}

// Объект начального состояния:
// город (используется для отбора списка предложений в определённом городе),
// список предложений по аренде,
// статус авторизации
// и текст ошибки
const initialState: InitalStateType = {
  city: DEFAULT_CITY,
  offers: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoaded: false,
  error: null,
  userData: null,
  comments: [],
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
    .addCase(setDataLoadedStatus, (state, action) => {
      state.isDataLoaded = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setUserData, (state, action) => {
      state.userData = action.payload;
    });
});
