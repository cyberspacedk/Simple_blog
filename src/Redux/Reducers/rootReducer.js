import { combineReducers } from 'redux';
import allPostsReducer from './allPostsReducer';
import createModeReducer from './createModeReducer';

const rootReducer = combineReducers({
  blogData: allPostsReducer,
  isCreate: createModeReducer,
});

export default rootReducer;
