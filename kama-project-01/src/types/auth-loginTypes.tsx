export const GET_USER_DATA = 'GET_USER_DATA';

export type SetUserDataACDataType = {
	userId:number|null,
	email:string|null,
	login:string|null,
	isAuth:boolean
}

export type InitinalStateType = {
	data: {
		userId: number | null,
		email: string | null,
		login: string | null,
		isAuth: boolean
	}
}

export type SetUserDataACType = {
	type: typeof GET_USER_DATA,
	data: SetUserDataACDataType
}

export type ActionAuthLoginTypes = SetUserDataACType;

export type GetUserDataType = {
	type: typeof GET_USER_DATA;
}

