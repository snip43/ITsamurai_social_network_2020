import React from 'react';
import './NewMessage.css';
import NewMessageReduxForm from '../../../../NewMessageReduxForm/newMessageReduxForm';

const NewMessage = (props) => {
 
	// let addMessageText = () => {
	// 	props.addMessageText();
	// }

	// let updateNewMessageText = (e) => {
	// 	let text = e.target.value ;
	// 	props.updateNewMessageText(text);
	// }

	const submitFunc = (values) => {
			console.log(values)
	}

return (
			<div className='post__new d-flex flex-column align-items-start mt-3'>
						<h5>Новое сообщение:</h5>
						<NewMessageReduxForm onSubmit= {submitFunc}/>
			</div>
	)
}

export default NewMessage;
	

