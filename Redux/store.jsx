import { createStore, applyMiddleware } from "redux";
import CounterReducer from "./Reducers/CountReducer";
import reduxThunk from "redux-thunk";
import ContainerReducers from "./Reducers/ContainerReducers";
const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
let store = createStore(
  ContainerReducers,
  enhancer(applyMiddleware(reduxThunk))
);

export default store;
