// import { PhotosType } from './profileTypes';

export const ADD_POST = 'ADD_POST';
export const SET_PHOTOS = 'SET_PHOTOS';
export const SET_NEW_NAME_PROFILE = 'SET_NEW_NAME_PROFILE';
export const SET_ABOUT_ME = 'SET_ABOUT_ME';
export const SET_IS_LOOKING_FOR_JOB = 'SET_IS_LOOKING_FOR_JOB';
export const SET_LOOKING_FOR_JOB_DESCRIPTION = 'SET_LOOKING_FOR_JOB_DESCRIPTION';
export const SET_STATUS = 'SET_STATUS';
export const SET_LIKE = 'SET_LIKE'
export const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS'

export type AddPostOnReduxFormType = {
	type: typeof ADD_POST
	newPostText:string | null
}

export type SetPhotosLargeProfileType = {
	type: typeof SET_PHOTOS
	large?:string | null
	small?: string | null
}

export type SetNameNewProfileType={
	type: typeof SET_NEW_NAME_PROFILE
	fullName:string|null
}

export type SetAboutMeType = {
	type:typeof SET_ABOUT_ME
	aboutMe:string|null
}

export type SetIsLookingForJobType = {
	type:typeof SET_IS_LOOKING_FOR_JOB
	isLookingForJob:boolean
}

export type SetLookingForJobDescriptionType = {
	type:typeof SET_LOOKING_FOR_JOB_DESCRIPTION
	description:string|null
}

export type SetStatusType = {
	type: typeof SET_STATUS
	status:string|null
}

export type SetLikeType = {
	type: typeof SET_LIKE 
	userId:number
}

export type SavePhotoSuccessType = {
	type: typeof SAVE_PHOTO_SUCCESS
	photos: string
}

export type ProfileReducersActionTypes = AddPostOnReduxFormType & SetPhotosLargeProfileType & SetNameNewProfileType & SetAboutMeType & SetIsLookingForJobType & SetLookingForJobDescriptionType & SetStatusType & SetLikeType & SavePhotoSuccessType;

