interface initinalState {

	postsData: PostsDataType,
	profileData: ProfileDataType
}

export type PostsDataType = Array <{ id:number, value:string, likeCount:number }>

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
	large: string
	small: string
}

export type ProfileDataType = 	{
		contacts: {
				facebook: 'test' ,
				vk:'test',
				twitter:'test',
				instagram:'inst',
				skype: 'skyp',
				icq: 'icque',
				email: 'emal',
				googlePlus: 'googlePl',
				whatsApp: 'watsap'
			},
		// photos: {
		// 		large: null,
		// 		small: null 
		// 	},
		isLookingForAJob: true ,
		lookingForAJobDescription: 'test',
		fullName: 'Роман Костин',
		userId: 5084 ,
		aboutMe: 'test' ,
		// status: 'в поисках работы'
		}


export let initinalState = {
	postsData:[
		{id:1, value:'Первое',likeCount:0},
		{id:2, value:'Двадцать пятое', likeCount:0}
	] ,
		profileData: 
		{
		contacts: {
				facebook: 'test' ,
				vk:'test',
				twitter:'test',
				instagram:'inst',
				skype: 'skyp',
				icq: 'icque',
				email: 'emal',
				googlePlus: 'googlePl',
				whatsApp: 'watsap'
			},
		// photos: {
		// 		large: null,
		// 		small: null 
		// 	},
		isLookingForAJob: true ,
		lookingForAJobDescription: 'test',
		fullName: 'Роман Костин',
		userId: 5084 ,
		aboutMe: 'test' ,
		// status: 'в поисках работы'
		}
}

export type InitinalStateType = typeof initinalState




