import { ADD_NEW_PRODUCT, DELETE_PRODUCT } from "../constants";

const initialState = [
  { id: 1, title: "Ручка", count: 5, unitCost: 20 },
  { id: 2, title: "Карандаш", count: 8, unitCost: 15 },
  { id: 3, title: "Портфель", count: 2, unitCost: 1200 },
  { id: 4, title: "Пенал", count: 1, unitCost: 150 },
  { id: 5, title: "Дневник", count: 1, unitCost: 320 },
  { id: 6, title: "Тетради", count: 15, unitCost: 22 },
  { id: 7, title: "Обложки", count: 25, unitCost: 15 }
];

const costs = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_PRODUCT: {
      return [...state, action.payload];
    }
    case DELETE_PRODUCT: {
      return state.filter(product => product.id !== action.payload);
    }
    default: {
      return state;
    }
  }
};

export default costs;
