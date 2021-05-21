import {UsersAction, CurrentUserAction, routesAction, userViewToggleAction} from "../type";
import * as actionTypes from "./actionTypes";
import {User} from '../interfaces';

export const usersListAct = (user: User[]): UsersAction => {
  const action: UsersAction = {
    type: actionTypes.USERS_LIST,
    payload: user,
  }
  return action;
}

export const currentUserAct = (currentUser: User): CurrentUserAction => {
  const action: CurrentUserAction = {
    type: actionTypes.CURRENT_USER,
    payload: currentUser,
  }
  return action;
}

export const routeAct = (route: string): routesAction => {
  const action: routesAction = {
    type: actionTypes.ROUTE_NAME,
    payload: route,
  }
  return action;
}

export const userViewToggleAct = (thumb: boolean): userViewToggleAction => {
  const action: userViewToggleAction = {
    type: actionTypes.THUMBNAIL_MODE,
    payload: thumb,
  }
  return action;
}
