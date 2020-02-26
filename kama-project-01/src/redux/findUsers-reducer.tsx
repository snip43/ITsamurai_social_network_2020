import {usersAPI} from '../api/api';
import { PhotosType } from '../types/profileTypes';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';
const SET_TOTAL_PEOPLE = 'SET_TOTAL_PEOPLE';

export type UserType = {
	id:number,
	name:string,
	status:string|null,
	photos:PhotosType,
}

export type InitinalStateType = {
	usersData: Array<UserType>|null,
	pageSize: number
	currentPage: number
	totalPeople: number|null
	totalPages: number|null
	isFetching: boolean
	followingInProgress: Array<number>|null
}


let initinalState = {
	usersData:[] as Array<UserType>,
	pageSize: 10,
	currentPage: 1,
	totalPeople: 0,
	totalPages: 0,
	isFetching: false,
	followingInProgress: [] as Array<number>,
}

const findUsersReducers = (state = initinalState,action:any):InitinalStateType => {
	switch(action.type) {
		case FOLLOW : 
				return {
					...state,
					usersData: state.usersData.map(u => {
						if(u.id === action.userId) {
							return {
								...u, 
								followed: true}
						}
						return u;
					})
			}
		case UNFOLLOW : 
				return {
					...state,
					usersData: state.usersData.map(u => {
						if(u.id === action.userId) {
							return {
								...u, 
								followed: false}
						}	
						return u;
					})
			}

			case SET_USERS: {
				return {
					...state, usersData:action.usersData
				}
			}

			case SET_CURRENT_PAGE: {
				return {
					...state, currentPage: action.currentPage
				}
			}

			case TOGGLE_IS_FETCHING: {
				return {
					...state, isFetching: action.isFetching
				}
			}
			case SET_TOTAL_PEOPLE: {
				return {
					...state, totalPeople: action.totalPeople
				}
			}
			case TOGGLE_IS_FOLLOWING_PROGRESS: {
				return {
					...state, 
					followingInProgress:action.isFetching 
					? [...state.followingInProgress,action.id]
					: state.followingInProgress.filter(id => id!==action.id)				
				}
			}

		default:
			return state;
		
	}
}

export type onFollowActionType ={
	type: typeof FOLLOW
	userId:number
}
export const onFollow = (userId:number):onFollowActionType => ({ type: FOLLOW, userId });

export type unFollowActionType = {
	type: typeof UNFOLLOW
	userId:number
}
export const unFollow = (userId:number):unFollowActionType => ({ type: UNFOLLOW, userId });

export type SetUsersActionType = {
	type: typeof SET_USERS
	usersData: Array<UserType>
}
export const setUsers = (usersData:Array<UserType>):SetUsersActionType => ({ type: SET_USERS,usersData });

export type SetCurrentPageActionType = {
	type: typeof SET_CURRENT_PAGE
	currentPage: number
}
export const setCurrentPage = (currentPage:number):SetCurrentPageActionType => ({ type: SET_CURRENT_PAGE,currentPage });

export type ToggleIsFetchingActionType = {
	type: typeof TOGGLE_IS_FETCHING
	isFetching: boolean
}
export const toggleIsFetching = (isFetching:boolean):ToggleIsFetchingActionType => ({ type: TOGGLE_IS_FETCHING,isFetching });

export type ToggleIsFollowingProgressActionType ={
	type: typeof TOGGLE_IS_FOLLOWING_PROGRESS
	isFetching:boolean
	id: number
}
export const toggleIsFollowingProgress = (isFetching:boolean,id:number):ToggleIsFollowingProgressActionType => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS,isFetching,id });

export type SetTotalPeopleActionType = {
	type:typeof SET_TOTAL_PEOPLE
	totalPeople: number
}
export const setTotalPeople = (totalPeople:number):SetTotalPeopleActionType => ({ type: SET_TOTAL_PEOPLE,totalPeople });

export const getUsers = (currentPage:number,pageSize:number) => async(dispatch:any) => {
	dispatch(toggleIsFetching(true));
	let data = await usersAPI.getUsersApi(currentPage, pageSize);
				dispatch(toggleIsFetching(false));
				dispatch(setUsers(data.items));
				dispatch(setTotalPeople(data.totalCount));
	}

	const followUnfollowFlow = async (dispatch:any,userId:number,apiMethod:any,actionCreator:any) => {
		dispatch(toggleIsFollowingProgress(true,userId));
		let data = await apiMethod(userId)
		if(data.resultCode ===0 ){
				dispatch(actionCreator(userId));
				dispatch(toggleIsFollowingProgress(false,userId));
				}
			}


export const follow = (userId:number) => async(dispatch:any) => {
	followUnfollowFlow(dispatch,userId,usersAPI.postFollow,onFollow);

		}

export const unfollow = (userId:number) => async(dispatch:any) => {
	followUnfollowFlow(dispatch,userId,usersAPI.deleteFollow,unFollow);
}

export default findUsersReducers;