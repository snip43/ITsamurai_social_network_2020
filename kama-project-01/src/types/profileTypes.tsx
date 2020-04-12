export let initinalState = {
	postsData:[
		{id:1, value:'Первое',likeCount:0},
		{id:2, value:'Двадцать пятое', likeCount:0}
	] as Array<{id:number,value:string|null,likeCount:number}>,
	profileData: 
		{
		contacts: {
				facebook: 'test' as string,
				website:'test' as string,
				vk:'test' as string,
				twitter:'test' as string,
				instagram:'test' as string,
				youtube:'test' as string,
				github:'test' as string,
				mainLink:'test' as string
			},
		photos: {
				large: null as string | null | undefined,
				small: null as string | null 
			},
		isLookingForJob: true as boolean,
		lookingForJobDescription: 'test' as string | null,
		fullName: 'Роман Костин' as string | null,
		userId: 5084 as number | null,
		aboutMe: 'test' as string | null,
		status: 'в поисках работы' as string | null
		}

}


export type InitinalStateType = typeof initinalState

export type ContactsType = {
	facebook: string|null,
	website:string|null
	vk:string|null
	twitter:string|null
	instagram:string|null
	youtube:string|null
	github:string|null
	mainLink:string|null
}

export type PhotosType = {
	large: string | null
	small: string | null
}

export type ProfileDataType = {
	contacts: ContactsType
	photos: PhotosType
}


