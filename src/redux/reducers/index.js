import { combineReducers } from 'redux';
import fetchTodoReducer from './fetchTodoReducer';

const rootReducer = combineReducers({
  todos: fetchTodoReducer,
});

export default rootReducer;