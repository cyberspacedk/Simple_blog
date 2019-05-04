import { combineReducers } from "redux";
import { allPostsReducer } from "./allPostsReducer";

const rootReducer = combineReducers({
  blogData: allPostsReducer
});

export default rootReducer;
