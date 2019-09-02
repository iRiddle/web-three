import { createSelector } from "reselect";

const get = require("lodash/get");

const productsCosts = store => get(store, "products", []);

export const productsCostsSelector = createSelector(
  productsCosts,
  p => p
);
