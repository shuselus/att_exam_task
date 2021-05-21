import { combineReducers } from 'redux';
import   userReducer   from './userReducer';
import  currentUserReducer  from './currentUserReducer';
import  routesReducer  from './routesReducer';
import  usersViewReducer  from './userViewToggleReducer';

const rootReducer = combineReducers({
  users: userReducer,
  currentUser: currentUserReducer,
  routes: routesReducer,
  thumbs: usersViewReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
