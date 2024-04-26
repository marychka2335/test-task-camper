import axios from "axios";
import {
    fetchingInProgress,
    fetchingSuccess,
    fetchingError,
  } from "./advertSlice";

axios.defaults.baseURL = "https://6509a698f6553137159bcedd.mockapi.io";

export const fetchAdverts = (page) => async dispatch => {
    try {
        dispatch(fetchingInProgress());
        const response = await axios.get(`/advert?page=${page}&limit=4`);
        dispatch(fetchingSuccess(response.data));
      } catch (e) {
        dispatch(fetchingError(e.message));
      }
  };