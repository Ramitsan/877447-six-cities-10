import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { ErrorProcess } from '../../types/stateType';
import { clearErrorAction } from '../api-actions';

const initialState: ErrorProcess = {
  error: null,
};

export const errorProcess = createSlice({
  name: NameSpace.Error,
  initialState,
  reducers: {
    setError: (state, action) => {
      state.error = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(clearErrorAction.fulfilled, (state) => {
        state.error = null;
      });
  }
});

export const {setError} = errorProcess.actions;
