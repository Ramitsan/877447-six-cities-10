import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { ErrorProcess } from '../../types/stateType';
// import { setError } from '../actions';

const initialState: ErrorProcess = {
  error: null,
};

export const errorProcess = createSlice({
  name: NameSpace.Error,
  initialState,
  reducers: {
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {setError} = errorProcess.actions;
