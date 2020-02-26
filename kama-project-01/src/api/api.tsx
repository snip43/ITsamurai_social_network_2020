import Axios from 'axios';

const instance = Axios.create({
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	withCredentials: true,
	headers: {
		"API-KEY": '30b194fe-a29c-4e84-8557-90a9f7eb241f'
	}
})

export const usersAPI = {
	getUsersApi(currentPage = 1, pageSize = 10 ) {
		return	instance.get(`users?page=${currentPage}&count=${pageSize}`)
			.then(response => {
				return response.data 
			})
	},
	postFollow(id:number){
		return	instance.post(`follow/${id}`,{})
				.then(response => {
					return response.data;
				})
	},
	deleteFollow(id:number){
		return	instance.delete(`follow/${id}`)
				.then(response => {
					return response.data;
				})
	},
getProfileInfo(id:number) {
		return instance.get(`profile/${id}`)
			.then( response=>{
				return response.data;
		})
	},
	getStatus(id:number) {
		return instance.get(`/profile/status/${id}`)
		},
	updateStatus(status:any) {
		return instance.put(`/profile/status`, {status: status})
		},
	savePhoto(photoFile:any) {
		const formData = new FormData();
		formData.append('image',photoFile)
			return instance.put('/profile/photo',formData, {
					headers: {
						'Content-Type': 'multipart/form-data'
					}
				})
	}
}

export const authAPI = {
	getAuthMe(){
		return	instance.get('auth/me')
		.then(response => {
			return response.data;
		})
	},
	login(email:string,password:string,rememberMe:boolean = false,isAuth:boolean) {
		return instance.post(`/auth/login`, {email,password,rememberMe,isAuth})
		},
	logout(){
		return instance.delete('/auth/login')
		}
	}





