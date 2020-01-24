import React from 'react';

import Post from './Post'

const AllPosts = (props) => {

	let newPost = props.postsData.map( (p,index) => (

		<Post 
			updateLikeCount = { props.setLike }
			value={p.value} 
			likeCount ={p.likeCount} 
			id={p.id} 
			key={index}
			/>	
	));
	
	return (
	<div className='posts_old d-flex flex-column my-3 align-items-start w-75'>
		<h5>Недавние сообщения:</h5>
		{ newPost }
		</div>
	)
	}

export default AllPosts;