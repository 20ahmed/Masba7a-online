import { combineReducers } from "redux";
import CounterReducer from "./CountReducer";
import UserReducer from "./UserReducer";

export default combineReducers({
  counter: CounterReducer,
  user: UserReducer,
});
