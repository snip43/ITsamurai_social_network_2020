import React from 'react';

import './NewPost.css';

let NewPost = (props) => {
	
	const addPost = () => {
		props.addPostOn();
	}

	const updateNewPostText = (e) => {
		let text = e.target.value;
		props.updateNewPostTextOn(text);
	}

	return (
			<div className='post__new d-flex flex-column align-items-start'>
						<h5>Новый пост:</h5>
							<div className='d-flex justify-content-between w-100 align-items-center'>
								<textarea 
								className='posts__area w-100' 
								placeholder='Введите новое сообщение...'
								value ={props.newPostText} 
								onChange = {updateNewPostText}/>
							
								<button 
									type='button' 
									className=" post__new-button btn btn-success ml-3"
									onClick = {addPost}
									>									
									Отправить</button>
							</div>
					</div>
	)
}

export default NewPost;
	

