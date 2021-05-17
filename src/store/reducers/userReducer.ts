import * as actionTypes from "../actionTypes";
import { UsersAction, UsersState } from "../../type";
//import {User} from '../interfaces';

const initialState: UsersState = {
    users: [],
}

export const userReducer = (state: UsersState = initialState, action: UsersAction): UsersState => {
	switch (action.type) {
		case actionTypes.USERS_LIST:
		  return {...state, users: action.payload};
		default:
		  return state;
	}
}