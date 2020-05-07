// export type InitinalStateType = {
// 	postsData: PostsDataType,
// 	profileData: ProfileDataType
// }

// export type PostsDataType = Array <PostType>

// type PostType = {
// 	id:number
// 	value:string
// 	likeCount:number
// }

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
		contacts: {
			facebook: string|null,
			website:string|null
			vk:string|null
			twitter:string|null
			instagram:string|null
			youtube:string|null
			github:string|null
			mainLink:string|null
		}
		photos: {
			large: string | null
			small: string | null
		}
		isLookingForAJob: boolean
		lookingForAJobDescription: string
		fullName: string
		userId: number
		aboutMe: string
		status: string | null
		}


export const initinalState = {
	postsData:[
		{id:1, value:'Первое',likeCount:0},
		{id:2, value:'Двадцать пятое', likeCount:0}
	] as Array<{id:number, value:string,likeCount:number}> ,
	
		profileData: 
		{
		contacts: {
				facebook: 'test' as string | null ,
				website:'test' as string | null,
				vk:'test' as string | null,
				twitter:'test' as string | null,
				instagram:'test' as string | null,
				youtube:'test' as string | null,
				github:'test' as string | null,
				mainLink:'test' as string | null
			},
		photos: {
				large: null as string | null,
				small: null as string | null
			},
		isLookingForAJob: true as boolean,
		lookingForAJobDescription: 'test' as string | null,
		fullName: 'Роман Костин' as string,
		userId: 5084 as number ,
		aboutMe: 'test' as string | null ,
		status: 'в поисках работы' as string
		}
}

export type ProfileInitinalType = typeof initinalState




