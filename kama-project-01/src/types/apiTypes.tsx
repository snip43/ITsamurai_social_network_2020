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

export type GetProfileInfoType = {
	userId: number
	isLookingForAJob: boolean
	lookingForAJobDescription: string
	fullName: string
	aboutMe:string
	contacts: {
		github: string
		vk: string
		facebook: string
		instagram: string
		twitter: string
		website: string
		youtube: string
		mainLink: string
	}
	
	photos: {
		small: string
		large: string
	}
}