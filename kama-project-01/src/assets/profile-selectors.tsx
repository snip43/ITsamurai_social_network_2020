import { AppStateType } from '../redux/redux-store'


export const getIsAuth = (state: AppStateType): boolean => {
	return state.authLogin.data.isAuth;
}
export const getProfile = (state: AppStateType) => {
	return state.profilePage.profileData;
}