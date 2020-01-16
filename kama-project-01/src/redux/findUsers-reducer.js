import {usersAPI} from '../api/api.js';

const aTypeFollow = 'FOLLOW';
const aTypeUnFollow = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';
const SET_TOTAL_PEOPLE = 'SET_TOTAL_PEOPLE';


let initinalState = {
	usersData:[	],
	pageSize: 10,
	currentPage: 1,
	totalPeople: 0,
	totalPages: 0,
	isFetching: false,
	followingInProgress: []
}

const findUsersReducers = (state = initinalState,action) => {
	switch(action.type) {
		case aTypeFollow : 
				return {
					...state,
					usersData: state.usersData.map(u => {
						if(u.id === action.userId) {
							return {...u, followed: true}
						}
						return u;
					})
			}
		case aTypeUnFollow : 
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
					...state, usersData: [...action.usersData]
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

export const onFollow = (userId) => ({ type: aTypeFollow, userId });
export const unFollow = (userId) => ({ type: aTypeUnFollow, userId });
export const setUsers = (usersData) => ({ type: SET_USERS,usersData });
export const setCurrentPage = (page) => ({ type: SET_CURRENT_PAGE,currentPage:page });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING,isFetching });
export const toggleIsFollowingProgress = (isFetching,id) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS,isFetching,id });
export const setTotalPeople = (totalPeople) => ({ type: SET_TOTAL_PEOPLE,totalPeople });

export const getUsers = (currentPage,pageSize) => async(dispatch) => {
	dispatch(toggleIsFetching(true));
	let data = await usersAPI.getUsersApi(currentPage, pageSize);
				dispatch(toggleIsFetching(false));
				dispatch(setUsers(data.items));
				dispatch(setTotalPeople(data.totalCount));
	}

	const followUnfollowFlow = async (dispatch,userId,apiMethod,actionCreator) => {
		dispatch(toggleIsFollowingProgress(true,userId));
		let data = await apiMethod(userId)
		if(data.resultCode ===0 ){
				dispatch(actionCreator(userId));
				dispatch(toggleIsFollowingProgress(false,userId));
				}
			}


export const follow = (userId) => async(dispatch) => {
	followUnfollowFlow(dispatch,userId,usersAPI.postFollow,onFollow);

		}

export const unfollow = (userId) => async(dispatch) => {
	followUnfollowFlow(dispatch,userId,usersAPI.deleteFollow,unFollow);
}

export default findUsersReducers;