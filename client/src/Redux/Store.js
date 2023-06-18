// import reducer from "./Reducer";
// import thunk from "redux-thunk";
// import { applyMiddleware, compose, createStore } from "redux";

// console.log({ reducer });

// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE_ || compose;
// const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)));

// export default store;

import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import reducer from "./Reducer";

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
);
