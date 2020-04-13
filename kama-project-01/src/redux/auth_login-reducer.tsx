import { authAPI, ResultCodesEnum } from '../api/api';
import {stopSubmit} from 'redux-form';
import {GET_USER_DATA,SetUserDataACType,ActionAuthLoginTypes,InitinalStateType} from '../types/auth-loginTypes'

const initinalState: InitinalStateType = {
	data: {
		userId: null,
		email: null,
		login: null,
		isAuth: false
	}
}

const authLoginReducer = (state = initinalState, action:ActionAuthLoginTypes):InitinalStateType => {
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

export const getAuthMe = () => async(dispatch:any) => {
	let data = await authAPI.getAuthMe();
			if(data.resultCode === ResultCodesEnum.Success) {
				const {id,email,login} = data.data;
				dispatch(setUserDataAC(id,email,login,true))
			}
		}

export const login = (email:string,password:string,rememberMe:any,isAuth:boolean) => async(dispatch:any) => {
		let data = await authAPI.login(email,password,rememberMe,isAuth);
			if(data.data.resultCode === ResultCodesEnum.Success) {
				dispatch(getAuthMe())
			} else {
				let message = data.data.messages.length > 0 ? data.data.messages[0]: 'Some Error';
				dispatch(stopSubmit('login', {_error: message}));
			}
		
	} 
export const logout = () => async(dispatch:any) => {
		let data = await authAPI.logout();
			if(data.data.resultCode === ResultCodesEnum.Success) {
				dispatch(setUserDataAC(null,null,null,false));
			}
		}

export const setUserDataAC = (userId:number|null,email:string|null,login:string|null,isAuth:boolean):SetUserDataACType => 
({type:GET_USER_DATA,data:{userId,email,login,isAuth}})

export default authLoginReducer;