import { combineReducers } from "redux";
import searchReducer from "./reducer_search";
import schemeReducer from "./reducer_scheme";
const rootReducer = combineReducers({
    search: searchReducer,
    scheme: schemeReducer
});
export default rootReducer;