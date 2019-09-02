import { compose, createStore } from "redux";

import rootReducer from "./reducers";

export function configureStore(initialState) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers()
  );
  return store;
}
