import { StateReducers } from '../redux/redux-store'


export const getIsAuth = (state: StateReducers) => {
	return state.authLogin.data.isAuth;
}
export const getProfile = (state: StateReducers) => {
	return state.profilePage.profileData;
}