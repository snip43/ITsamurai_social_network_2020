import React from 'react'
import { Field, reduxForm } from 'redux-form'

let NewMessageReduxForm = props => {
  const { handleSubmit } = props;
  return <form 
		onSubmit={handleSubmit}
		className='d-flex justify-content-between w-100 align-items-center'>
<Field 
className='w-100'
	component='textarea'
	name='newMessageReduxForm' 
	placeholder='Введите новое сообщение... NewMessageReduxForm'/>
<button 
	type='submit'
	onSubmit={props.submitFunc}
	className=" post__new-button btn btn-success ml-3">
		Отправить</button>
	</form>
}

NewMessageReduxForm = reduxForm({
  form: 'newMessageReduxForm'
})(NewMessageReduxForm)

export default NewMessageReduxForm;