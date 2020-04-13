import { AppStateType } from '../redux/redux-store';
export const SET_SUCCESS = 'SET_SUCCESS';

export type ActionTypes = SetSuccessActionType;

export type SetSuccessActionType = {
	type: typeof SET_SUCCESS
}

export type initinalStateType = {
	initialized: boolean
}

export type GetStateType = () => AppStateType