import { combineReducers } from "redux";
import commonReducer from "./common";
import { routerReducer } from "react-router-redux";

const rootReducer = combineReducers({
  common: commonReducer,
  routing: routerReducer,
});

export default rootReducer;
