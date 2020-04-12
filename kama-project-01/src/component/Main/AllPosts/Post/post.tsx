import React, { FC } from 'react';

import './post.css'
import { SetLikeType } from '../../../../types/profileReducerTypes';

type PropsType = {
	updateLikeCount: any
	id: number
	value: string
	likeCount: number
}

const Post: FC<PropsType> = (props) => {

	const updateCount = () => {
			props.updateLikeCount(props.id)
	}

	return (
	<div className='post_1 border border-dark p-2 my-2 rounded w-100 text-left'>
		<img 
			src="https://i.pinimg.com/originals/14/fb/fd/14fbfd63332378ea42542d89b00253e5.jpg" 	
			alt="avatar"
			className='postAvatar mr-3'/>
			{props.value}
			<div >
				<button className='btn btn-sm btn-info p-1 mt-2'
								onClick = { updateCount }>
								like:
						<span className="badge badge-light ml-2"> {props.likeCount}</span>
				</button>	
				
				</div>
	</div>
	);
}

export default Post;