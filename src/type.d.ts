import {User} from './interfaces';
import * as actionTypes from "./redusers/actionTypes";
  
  type UsersState = {
    users: User[];
  }
  type UsersAction = {
    type: typeof actionTypes.USERS_LIST;
    payload: User[];
  }
  type CurrentUserState = {
    currenUser: User;
  }
  type CurrentUserAction = {
    type: typeof actionTypes.CURRENT_USER;
    payload: User;
  }
  type routesState = {
    route: string;
  }
  type routesAction = {
    type: typeof actionTypes.ROUTE_NAME;
    payload: string;
  }
  type userViewToggleState = {
    thumb: boolean;
  }
  type userViewToggleAction = {
    type: typeof actionTypes.THUMBNAIL_MODE;
    payload: boolean;
  }
  
  //type DispatchType = (args: UsersAction) => UsersAction