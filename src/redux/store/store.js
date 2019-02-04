import { combineReducers, createStore } from 'redux';
import user from '../modules/user';

const rootReducer = combineReducers({
  user,
});

const store = createStore(rootReducer);

export default store;
