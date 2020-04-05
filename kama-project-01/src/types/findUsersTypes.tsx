import { PhotosType } from '../types/profileTypes';

export const FOLLOW = 'FOLLOW';
export const UNFOLLOW = 'UNFOLLOW';
export const SET_USERS = 'SET_USERS';
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
export const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
export const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';
export const SET_TOTAL_PEOPLE = 'SET_TOTAL_PEOPLE';

export type UserType = {
	id:number
	name:string
	status?:string|null
	photos: PhotosType
	followed: boolean
	country?: string
	followingInProgress: Array<number>
	follow?: (id: number) => void
	unfollow?: (id: number) => void
}

export type InitinalStateType = {
	usersData: Array<UserType>,
	pageSize: number
	currentPage: number
	totalPeople: number
	totalPages: number
	isFetching: boolean
	followingInProgress: Array<number>
}

export type onFollowActionType ={
	type: typeof FOLLOW
	userId:number
}

export type unFollowActionType = {
	type: typeof UNFOLLOW
	userId:number
}

export type SetUsersActionType = {
	type: typeof SET_USERS
	usersData: Array<UserType>
}

export type SetCurrentPageActionType = {
	type: typeof SET_CURRENT_PAGE
	currentPage: number
}

export type ToggleIsFetchingActionType = {
	type: typeof TOGGLE_IS_FETCHING
	isFetching: boolean
}

export type ToggleIsFollowingProgressActionType ={
	type: typeof TOGGLE_IS_FOLLOWING_PROGRESS
	isFetching:boolean
	id: number
}

export type SetTotalPeopleActionType = {
	type:typeof SET_TOTAL_PEOPLE
	totalPeople: number
}

export type FindUsersTypes = onFollowActionType & unFollowActionType & SetUsersActionType & SetCurrentPageActionType & ToggleIsFetchingActionType & ToggleIsFollowingProgressActionType & SetTotalPeopleActionType;




