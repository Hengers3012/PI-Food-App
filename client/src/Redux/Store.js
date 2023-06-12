import reducer from "./Reducer";
import thunk from "redux-thunk";
import { applyMiddleware, compose, createStore } from "redux";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE_ || compose;
const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)));

export default store;
