import { getAuthMe } from "./auth_login-reducer";
import {SET_SUCCESS,SetSuccessActionType,initinalStateType,ActionTypes} from '../types/appResucersTypes';

let initinalState:initinalStateType = {
	initialized: false
}

const appReducer = (state = initinalState, action:ActionTypes):initinalStateType => {
	switch(action.type) {
		case SET_SUCCESS:
			return {
				...state,
				initialized:true
			}
			default: 
				return state;
	}
}

export const initSuccess = ():SetSuccessActionType => ({type:SET_SUCCESS});

export const initApp = () => async(dispatch:any) => {
	let promise = await dispatch(getAuthMe());

	Promise.all([promise])
	await dispatch(initSuccess())
	}

export default appReducer;