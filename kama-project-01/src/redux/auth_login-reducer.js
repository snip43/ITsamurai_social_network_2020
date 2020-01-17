import {authAPI} from '../api/api'
import {stopSubmit} from 'redux-form'

const GET_USER_DATA = 'GET_USER_DATA';

const initinalState = {
	data: {
		id: null,
		email: null,
		login: null,
		isAuth: false
	}
}

const authLoginReducer = (state = initinalState, action) => {
	switch(action.type) {
		case GET_USER_DATA:
			return {
					...state,
					data: { ...action.data,
							isAuth: action.data.isAuth	}
			
				}
					
			default:
				return	state;
	}
}

export const getAuthMe = () => async(dispatch) => {
	let data = await authAPI.getAuthMe();
			if(data.resultCode===0) {
				const {id,email,login} = data.data;
				dispatch(setUserDataAC(id,email,login,true))
			}
		}

export const login = (email,password,rememberMe,isAuth) => async(dispatch) => {
		let data = await authAPI.login(email,password,rememberMe,isAuth);
			if(data.data.resultCode===0) {
				dispatch(getAuthMe())
			} else {
				let message = data.data.messages.length > 0 ? data.data.messages[0]: 'Some Error';
				dispatch(stopSubmit('login', {_error: message}));
			}
		
	} 
export const logout = () => async(dispatch) => {
		let data = await authAPI.logout();
			if(data.data.resultCode===0) {
				dispatch(setUserDataAC(null,null,null,false));
			}
		}

export const setUserDataAC = (userId,email,login,isAuth) => ({type:GET_USER_DATA,data:{userId,email,login,isAuth}})

export default authLoginReducer;