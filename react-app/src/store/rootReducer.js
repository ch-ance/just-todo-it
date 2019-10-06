import { combineReducers } from "redux-starter-kit";
import aListReducer from "../components/view-list/a-list-slice";

const rootReducer = combineReducers({
  aList: aListReducer
});

export default rootReducer;
