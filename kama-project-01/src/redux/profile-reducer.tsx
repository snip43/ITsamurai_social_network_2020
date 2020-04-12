import {usersAPI} from '../api/api';
import { InitinalStateType, initinalState, PhotosType } from '../types/profileTypes';
import { AddPostOnReduxFormType, SetPhotosLargeProfileType, SetAboutMeType, SetIsLookingForJobType, SetLookingForJobDescriptionType, SetStatusType, SetLikeType, ProfileReducersActionTypes, ADD_POST, SET_NEW_NAME_PROFILE, SET_ABOUT_ME, SET_LOOKING_FOR_JOB_DESCRIPTION, SET_IS_LOOKING_FOR_JOB, SET_STATUS, SET_LIKE, SAVE_PHOTO_SUCCESS, SET_PHOTOS } from '../types/profileReducerTypes';

const profileReducer = (state = initinalState,action: ProfileReducersActionTypes):InitinalStateType => {

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
					

		case "SET_PHOTOS": 
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

export const addPostOnReduxForm = (newPostText:string|null):AddPostOnReduxFormType => ({ type: ADD_POST, newPostText });
export const setPhotosLargeProfile = (large:string|null):SetPhotosLargeProfileType => ({ type: SET_PHOTOS, large });
export const setNameNewProfile = (fullName:string) => ({ type: SET_NEW_NAME_PROFILE, fullName });
export const setAboutMe = (aboutMe:string|null):SetAboutMeType => ({ type: SET_ABOUT_ME, aboutMe });
export const setIsLookingForJob = (isLookingForJob:boolean):SetIsLookingForJobType => ({ type: SET_IS_LOOKING_FOR_JOB,isLookingForJob });
export const setLookingForJobDescription = (description:string|null):SetLookingForJobDescriptionType => ({ type: SET_LOOKING_FOR_JOB_DESCRIPTION, description });
export const setStatus = (status:string|null):SetStatusType => ({type: SET_STATUS, status});
export const setLike = (userId:number):SetLikeType => ({type: SET_LIKE, userId})
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