import * as actionTypes from "../actionTypes";
import { userViewToggleAction, userViewToggleState } from "../../type";

const initialState: userViewToggleState = {
    thumb: false,
}

export default (state: userViewToggleState = initialState, action: userViewToggleAction): userViewToggleState => {
	switch (action.type) {
		case actionTypes.THUMBNAIL_MODE:
		  return {...state, thumb: action.payload};
		default:
		  return state;
	}
}