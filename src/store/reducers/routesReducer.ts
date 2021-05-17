import * as actionTypes from "../actionTypes";
import { routesAction, routesState } from "../../type";

const initialState: routesState = {
    route: ""
}

export default (state: routesState = initialState, action:routesAction) => {
	switch (action.type) {
	    case actionTypes.ROUTE_NAME:
			return { ...state, route: action.payload }
		default:
			return state;
	}
}
