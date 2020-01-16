import {usersAPI} from '../api/api';

const aTypeAddPost = 'ADD-POST';
const SET_PHOTOS = 'SET_PHOTOS';
const SET_NEW_NAME_PROFILE = 'SET_NEW_NAME_PROFILE';
const SET_ABOUT_ME = 'SET_ABOUT_ME';
const SET_IS_LOOKING_FOR_JOB = 'SET_IS_LOOKING_FOR_JOB';
const SET_LOOKING_FOR_JOB_DESCRIPTION = 'SET_LOOKING_FOR_JOB_DESCRIPTION';
const SET_STATUS = 'SET_STATUS';
const UPDATE_STATUS = 'UPDATE_STATUS';

let initinalState = {
	postsData:[
		{id:1, value:'Первое',likeCount:20},
		{id:2, value:'Двадцать пятое', likeCount:1}
	],
	profileData: 
		{
		contacts: {
				facebook: 'test',
				website:'test',
				vk:'test',
				twitter:'test',
				instagram:'test',
				youtube:'test',
				github:'test',
				mainLink:'test'
			},
		photos: {
				large: 'test',
				small: 'test'
			},
		isLookingForJob: false,
		lookingForJobDescription: 'test',
		fullName: 'test test',
		userId: 5084,
		aboutMe: 'test',
		status: ''
		}

}

const profileReducer = (state = initinalState,action) => {
	switch(action.type) {
		case aTypeAddPost: 
			let postText = action.newPostText;
			let newPost = { 
				id:3,
				value: postText,
				likeCount: 0
			} ;
				return {
					...state,
					postsData: [...state.postsData,newPost],
				}
					

		case SET_PHOTOS: 
		return {
			
			...state,
			profileData: {
					...state.profileData, 
					photos: {
						...state.profileData.photos, large: action.large
					} 
				}
		}
		case SET_NEW_NAME_PROFILE:
			return {
				...state,
				profileData: {
				...state.profileData,	fullName: action.fullName
				}
			}
		
			case SET_ABOUT_ME:
				return {
					...state, 
					profileData: {
						...state.profileData, aboutMe: action.aboutMe
					}
				}

			case SET_LOOKING_FOR_JOB_DESCRIPTION:
				return {
					...state,
					profileData: {
						...state.profileData, lookingForJobDescription: action.description
					}
				}

			case SET_IS_LOOKING_FOR_JOB:
				return {
					...state,
					profileData: {
						...state.profileData, isLookingForJob: action.isLookingForJob
					}
				}

			case SET_STATUS:
				return {
					...state,
					profileData: {
						...state.profileData, status: action.status
					}
				}

			default:
				return state;
			}
}

export const addPostOnReduxForm = (newPostText) => ({ type: aTypeAddPost, newPostText });
export const setPhotosLargeProfile = (large) => ({ type: SET_PHOTOS, large });
export const setNameNewProfile = (fullName) => ({ type: SET_NEW_NAME_PROFILE, fullName });
export const setAboutMe = (aboutMe) => ({ type: SET_ABOUT_ME, aboutMe });
export const setIsLookingForJob = (isLookingForJob) => ({ type: SET_IS_LOOKING_FOR_JOB,isLookingForJob });
export const setLookingForJobDescription = (description) => ({ type: SET_LOOKING_FOR_JOB_DESCRIPTION, description });
export const setStatus = (status) => ({type: SET_STATUS, status});
export const updateStatus = (status) => ({type:UPDATE_STATUS,status})


export const profileInfo = (userId) => async(dispatch) => {
	let data = await	usersAPI.getProfileInfo(userId)	;
				dispatch(setNameNewProfile(data.fullName));
				dispatch(setPhotosLargeProfile(data.photos.large));
				dispatch(setAboutMe(data.aboutMe));
				dispatch(setIsLookingForJob(data.lookingForAJob));
				dispatch(setLookingForJobDescription(data.lookingForAJobDescription));
				}

export const profileStatus = (userId) => async(dispatch) => {
	let data =	usersAPI.getStatus(userId)
			dispatch(setStatus(data.data))
		}

export const updateProfileStatus = (status) => async(dispatch) => {
	let data = await usersAPI.updateStatus(status);
			if(data.data.resultCode===0) {
				dispatch(setStatus(status))
			}
		}
		
export default profileReducer;