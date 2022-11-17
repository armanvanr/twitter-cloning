import { createStore } from "redux";
import { combineReducers } from "redux";
import stories from "../modules/stories";

const rootReducer = combineReducers({
  stories,
});
const store = createStore(rootReducer);

export default store;
