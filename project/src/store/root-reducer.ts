import {combineReducers} from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { cityProcess } from './city/city';
import { dataProcess } from './data-process/data-process';
import { errorProcess } from './error/error-process';
import { favoriteProcess } from './favorite-process/favorite-process';
import { userProcess } from './user-process/user-process';

export const rootReducer = combineReducers({
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.Data]: dataProcess.reducer,
  [NameSpace.Favorite]: favoriteProcess.reducer,
  [NameSpace.Error]: errorProcess.reducer,
  [NameSpace.City]: cityProcess.reducer,
});
