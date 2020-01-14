import { combineReducers } from "redux";
import citiesReducer from './cityReducer';
const rootReducer = combineReducers({citiesReducer: citiesReducer});
export default rootReducer;