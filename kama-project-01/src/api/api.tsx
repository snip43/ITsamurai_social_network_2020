import Axios from 'axios';
import { MeResponseType, LoginResponseType, DeleteResponseType } from '../types/apiTypes';
import { UserType } from '../types/findUsersTypes';
import { ProfileDataType, PhotosType } from '../types/profileTypes';

const instance = Axios.create({
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	withCredentials: true,
	headers: {
		"API-KEY": '30b194fe-a29c-4e84-8557-90a9f7eb241f'
	}
})

export enum ResultCodesEnum {
	Success = 0,
	Error = 1,
	CaptchaIsRequired = 10
}

type GetUsersApiResponseType = {
	items: Array<UserType>
	totalCount: number
	error: string | null
}

type savePhotoType = {
	data: {
		photos: PhotosType
		messages: Array<string>
		resultCode: number
	}
}

export const usersAPI = {
	getUsersApi(currentPage:number = 1, pageSize:number = 10 ) {
		return	instance.get<GetUsersApiResponseType>(`users?page=${currentPage}&count=${pageSize}`)
			.then(response => {
				return response.data 
			})
	},
	postFollow(id:number){
		return	instance.post<DeleteResponseType>(`follow/${id}`,{})
				.then(response => {
					return response.data;
				})
	},
	deleteFollow(id:number){
		return	instance.delete<DeleteResponseType>(`follow/${id}`)
				.then(response => {
					return response.data;
				})
	},
	getProfileInfo(id:number) {
		return instance.get<ProfileDataType>(`profile/${id}`)
			.then( response=>{
				return response.data;
		})
	},
	getStatus(id:number) {
		return instance.get<string>(`/profile/status/${id}`)
		},
	updateStatus(status:string| null) {
		return instance.put<DeleteResponseType>(`/profile/status`, {status: status})
		},
	savePhoto(photoFile:string | Blob) {
		const formData = new FormData();
		formData.append('image',photoFile)
			return instance.put<savePhotoType>('/profile/photo',formData, {
					headers: {
						'Content-Type': 'multipart/form-data'
					}
				})
	}
}


export const authAPI = {
	getAuthMe(){
		return	instance.get<MeResponseType>('auth/me')
		.then(response => {
			return response.data;
		})
	},
	login(email:string,password:string,rememberMe:boolean = false,isAuth:boolean) {
		return instance.post<LoginResponseType>(`/auth/login`, {email,password,rememberMe,isAuth})
		},
	logout(){
		return instance.delete<DeleteResponseType>('/auth/login')
		}
	}





