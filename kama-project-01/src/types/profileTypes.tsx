export let initinalState = {
	postsData:[
		{id:1, value:'Первое',likeCount:0},
		{id:2, value:'Двадцать пятое', likeCount:0}
	] as Array<{id:number,value:string,likeCount:number}>,
	profileData: 
		{
		contacts: {
				facebook: 'test',
				website:'test',
				vk:'test',
				twitter:'test',
				instagram:'test',
				youtube:'test',
				github:'test',
				mainLink:'test'
			},
		photos: {
				large: null,
				small: null
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
	large: string|null
	small: string|null
}

export type ProfileDataType = {
	contacts: ContactsType
	photos: PhotosType
}