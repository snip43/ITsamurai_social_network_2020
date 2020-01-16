export const getIsAuth = (state) => {
	return state.authLogin.data.isAuth;
}
export const getProfile = (state) => {
	return state.profilePage.profileData;
}