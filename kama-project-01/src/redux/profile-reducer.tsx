import {usersAPI} from '../api/api';
import { InitinalStateType, PhotosType, initinalState } from '../types/profileTypes';

const ADD_POST = 'ADD-POST';
const SET_PHOTOS = 'SET_PHOTOS';
const SET_NEW_NAME_PROFILE = 'SET_NEW_NAME_PROFILE';
const SET_ABOUT_ME = 'SET_ABOUT_ME';
const SET_IS_LOOKING_FOR_JOB = 'SET_IS_LOOKING_FOR_JOB';
const SET_LOOKING_FOR_JOB_DESCRIPTION = 'SET_LOOKING_FOR_JOB_DESCRIPTION';
const SET_STATUS = 'SET_STATUS';
const SET_LIKE = 'SET_LIKE'
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS'


// export type ActionTypes = Add_PostType|SetPhotoType|SetNewNameProfileType|SetAboutMeType|SetIsLookingForJobType|SetLookingForJobDescriptionType|SetStatusType|SetLikeType|SavePhotoSuccessType

const profileReducer = (state = initinalState,action:any):InitinalStateType => {
	switch(action.type) {
		case ADD_POST: 
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

			case SET_LIKE: 
			
				const stateCopy = {...state}
				stateCopy.postsData = [...state.postsData]

					let index = stateCopy.postsData.findIndex(elem=>elem.id === action.userId);
					let newItem = stateCopy.postsData[index];

					newItem.likeCount = newItem.likeCount+1;

					stateCopy.postsData = [...stateCopy.postsData.slice(0, index), newItem, ...stateCopy.postsData.slice(index+1)];
					return stateCopy;

					case SAVE_PHOTO_SUCCESS:
						return {
							...state,
							profileData: {...state.profileData, photos: action.photos}
							}

			default:
				return state;
			}
}

export type AddPostOnReduxFormType = {
	type: typeof ADD_POST
	newPostText:string|null
}
export const addPostOnReduxForm = (newPostText:string|null):AddPostOnReduxFormType => ({ type: ADD_POST, newPostText });

export type SetPhotosLargeProfileType = {
	type: typeof SET_PHOTOS
	large:string|null
}
export const setPhotosLargeProfile = (large:string|null):SetPhotosLargeProfileType => ({ type: SET_PHOTOS, large });

export type SetNameNewProfileType={
	type: typeof SET_NEW_NAME_PROFILE
	fullName:string|null
}
export const setNameNewProfile = (fullName:string) => ({ type: SET_NEW_NAME_PROFILE, fullName });

export type SetAboutMeType = {
	type:typeof SET_ABOUT_ME
	aboutMe:string|null
}
export const setAboutMe = (aboutMe:string|null):SetAboutMeType => ({ type: SET_ABOUT_ME, aboutMe });

export type SetIsLookingForJobType = {
	type:typeof SET_IS_LOOKING_FOR_JOB
	isLookingForJob:boolean
}
export const setIsLookingForJob = (isLookingForJob:boolean):SetIsLookingForJobType => ({ type: SET_IS_LOOKING_FOR_JOB,isLookingForJob });

export type SetLookingForJobDescriptionType = {
	type:typeof SET_LOOKING_FOR_JOB_DESCRIPTION
	description:string|null
}
export const setLookingForJobDescription = (description:string|null):SetLookingForJobDescriptionType => ({ type: SET_LOOKING_FOR_JOB_DESCRIPTION, description });

export type SetStatusType = {
	type: typeof SET_STATUS
	status:string|null
}
export const setStatus = (status:string|null):SetStatusType => ({type: SET_STATUS, status});

export type SetLikeType = {
	type: typeof SET_LIKE
	userId:number
}
export const setLike = (userId:number):SetLikeType => ({type: SET_LIKE, userId})

export type SavePhotoSuccessType = {
	type: typeof SAVE_PHOTO_SUCCESS
	photos: PhotosType
}
export const savePhotoSuccess = (photos:PhotosType) => ({type:SAVE_PHOTO_SUCCESS,photos})


export const profileInfo = (userId:number) => async(dispatch:any) => {
	let data = await	usersAPI.getProfileInfo(userId)	;
				dispatch(setNameNewProfile(data.fullName));
				dispatch(setPhotosLargeProfile(data.photos.large));
				dispatch(setAboutMe(data.aboutMe));
				dispatch(setIsLookingForJob(data.lookingForAJob));
				dispatch(setLookingForJobDescription(data.lookingForAJobDescription));
				}

export const profileStatus = (userId:number) => async(dispatch:any) => {
	let data =	usersAPI.getStatus(userId)
	// dispatch(setStatus(data.data))
	dispatch(setStatus((await data).data))
}

export const updateProfileStatus = (status:string|null) => async(dispatch:any) => {
	let data = await usersAPI.updateStatus(status);
			if(data.data.resultCode===0) {
				dispatch(setStatus(status))
			}
}
export const savePhoto = (file:string) => async(dispatch:any) => {
	let data = await usersAPI.savePhoto(file);

			if(data.data.resultCode===0) {
				dispatch(savePhotoSuccess(data.data.data.photos))
			}
}


export default profileReducer;