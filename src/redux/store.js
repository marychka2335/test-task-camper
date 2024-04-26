import { configureStore } from "@reduxjs/toolkit";
import { advertReducer } from "./advertSlice";

export const store = configureStore({
    reducer: {
      reducer: advertReducer,
    },
  });