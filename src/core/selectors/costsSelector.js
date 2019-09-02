import { createSelector } from "reselect";

const get = require("lodash/get");

const productsCosts = store => get(store, "costs", {});

export const productsCostsSelector = createSelector(
  productsCosts,
  p => p
);
