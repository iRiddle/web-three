import { ADD_NEW_PRODUCT, DELETE_PRODUCT } from "../constants";

export const getWeatherFulfilled = data => ({
  type: ADD_NEW_PRODUCT,
  payload: data
});

export const deleteProduct = id => ({
  type: DELETE_PRODUCT,
  payload: id
});
