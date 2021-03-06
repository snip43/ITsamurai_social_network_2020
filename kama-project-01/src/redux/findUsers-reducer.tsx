import {usersAPI} from '../api/api';

import { InitinalStateType, UserType, FOLLOW, UNFOLLOW, SET_USERS, SET_CURRENT_PAGE, TOGGLE_IS_FETCHING, SET_TOTAL_PEOPLE, TOGGLE_IS_FOLLOWING_PROGRESS, onFollowActionType, unFollowActionType, SetUsersActionType, SetCurrentPageActionType, ToggleIsFetchingActionType, ToggleIsFollowingProgressActionType, SetTotalPeopleActionType, FindUsersActionTypes, ActionCreatorToThunkType } from '../types/findUsersTypes';
import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { AppStateType } from './redux-store';

type DispatchType = Dispatch<FindUsersActionTypes>;

let initinalState = {
	usersData:[] as Array<UserType>,
	pageSize: 10,
	currentPage: 1,
	totalPeople: 0,
	totalPages: 0,
	isFetching: false,
	followingInProgress: [] as Array<number>,
}


const findUsersReducers = (state = initinalState,action:FindUsersActionTypes):InitinalStateType => {
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

export const onFollow = (userId:number):onFollowActionType => ({ type: FOLLOW, userId });
export const unFollow = (userId:number):unFollowActionType => ({ type: UNFOLLOW, userId });
export const setUsers = (usersData:Array<UserType>):SetUsersActionType => ({ type: SET_USERS,usersData });
export const setCurrentPage = (currentPage:number):SetCurrentPageActionType => ({ type: SET_CURRENT_PAGE,currentPage });
export const toggleIsFetching = (isFetching:boolean):ToggleIsFetchingActionType => ({ type: TOGGLE_IS_FETCHING,isFetching });
export const toggleIsFollowingProgress = (isFetching:boolean,id:number):ToggleIsFollowingProgressActionType => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS,isFetching,id });
export const setTotalPeople = (totalPeople:number):SetTotalPeopleActionType => ({ type: SET_TOTAL_PEOPLE,totalPeople });

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, FindUsersActionTypes>


export const getUsers = (currentPage:number,pageSize:number): ThunkType => {
	return async(dispatch) => {
		dispatch(toggleIsFetching(true));
		dispatch(setCurrentPage(currentPage));

		let data = await usersAPI.getUsersApi(currentPage, pageSize);
					dispatch(toggleIsFetching(false));
					dispatch(setUsers(data.items));
					dispatch(setTotalPeople(data.totalCount));
		}
}

	const _followUnfollowFlow = async (dispatch:DispatchType,userId:number,apiMethod:any,actionCreator:ActionCreatorToThunkType ) => {
		dispatch(toggleIsFollowingProgress(true,userId));
		let data = await apiMethod(userId)
		if(data.resultCode ===0 ){
				dispatch(actionCreator(userId));
				dispatch(toggleIsFollowingProgress(false,userId));
				}
			}

export const follow = (userId:number): ThunkType => {
	return async(dispatch) => {
		_followUnfollowFlow(dispatch,userId,usersAPI.postFollow,onFollow);
			}
}

export const unfollow = (userId:number): ThunkType => {
	return async(dispatch) => {
		_followUnfollowFlow(dispatch,userId,usersAPI.deleteFollow,unFollow);
	}
}

export default findUsersReducers;