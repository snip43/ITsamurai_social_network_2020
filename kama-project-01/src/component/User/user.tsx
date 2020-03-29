import React,{FC} from 'react';
import './user.css';
import photoDefault from '../../assets/images/photoDefault.jpg';
import {NavLink} from 'react-router-dom';
import { PhotosType } from '../../types/profileTypes';

type PropsType = {
	photos: PhotosType['small'] | null
	name: string
	follow: boolean
	followingInProgress: Array<number>
	id: number
	unFollow: () => void
	onFollow: () => void
	followMessage?: string
	country?: string
	city?: string
}

const User: FC<PropsType> = ({photos,name,follow,followingInProgress,id,unFollow,onFollow,followMessage,country,city,...props}) => {
	return (
		<div className='user d-flex mb-3 p-1'>
		
					<div className ='user_leftSide d-flex flex-column mr-3 align-items-center col-4'>
								<NavLink to={`/profile/${id}`}>
									<div className='user_avatar'>
										<img src= {photos != null ? photos : photoDefault} alt={name}/>
									</div>
								</NavLink>
								<p> {name}</p>
								{ follow ? 
									<button 
											disabled = {followingInProgress.some(u=> u === id)}
											className='btn btn-sm btn-info user_follow_btn'
											onClick={() => {unFollow() } }>Отписаться</button> :
									<button 
											disabled={followingInProgress.some(u=>u===id)}
											className='btn btn-sm btn-outline-info user_unfollow_btn'
											onClick={() => {onFollow()}}>Подписаться</button> }
					</div>
	
					<div className="user_rightSide col-8 d-flex flex-column justify-content-center">
						<div className="user_info_text p-2"> 
							<p>Статус: {followMessage}</p>
							<p>Я из: 'country' , 'city'</p>
						</div>
					</div>

		
		</div>

	)
}

export default User;