export type MeResponseType = {
	data: {
		id: number
		email:string
		login: string
	}
resultCode: number
messages: Array<string>
}

export type LoginResponseType = {
	data: {
		userId: number
		
	}
	resultCode: number
	messages: Array<string>
}

export type DeleteResponseType = {
data: {	}
resultCode: number
messages: Array<string>
}