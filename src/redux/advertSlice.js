import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';

const advertsSlice = createSlice({
  name: 'adverts',
  initialState,
  reducers: {
    fetchingInProgress(state) {
      state.isLoading = true;
    },
    fetchingSuccess(state, action) {
      state.isLoading = false;
      state.error = null;
      state.adverts = state.adverts.concat(action.payload);
    },
    fetchingError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchingInProgress, fetchingSuccess, fetchingError } = advertsSlice.actions;

export const advertReducer = advertsSlice.reducer;