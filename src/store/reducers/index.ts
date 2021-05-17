import { combineReducers } from 'redux';
import  { userReducer }  from './userReducer';
import  currentUserReducer  from './currentUserReducer';
import  routesReducer  from './routesReducer';

const rootReducer = combineReducers({
  users: userReducer,
  currentUser: currentUserReducer,
  routes: routesReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
