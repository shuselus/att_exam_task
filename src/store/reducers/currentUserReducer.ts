import * as actionTypes from "../actionTypes";
import { CurrentUserAction, CurrentUserState } from "../../type";
import {User} from '../../interfaces';

const initialState: CurrentUserState = {
    currenUser: {
        id: -1,
        name: {
          first: "",
          last: "",
          title: ""
        },
        email: "",
        location: {
          city: "",
          street: {
            name: "",
            number: -1
          },
          country: "",
          postcode: -1,
        },
        phone: "",
        pic: {
          large: "",
          medium: "", 
          thumbnail: ""
        }
      }
}

export default (state: CurrentUserState = initialState, action:CurrentUserAction) => {
	switch (action.type) {
	    case actionTypes.CURRENT_USER:
			return { ...state, currenUser: action.payload }
		default:
			return state;
	}
}
