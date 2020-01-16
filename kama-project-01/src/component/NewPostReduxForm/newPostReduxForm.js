import React from 'react'
import { Field, reduxForm } from 'redux-form'

let NewPostReduxForm = props => {

  const { handleSubmit } = props;
  return <form 
		onSubmit={handleSubmit}
		className='d-flex justify-content-between w-100 align-items-center'>
		<Field 	className='w-100'
						component='textarea'
						name='newPostReduxForm' 
						placeholder='Введите новое сообщение... тewPostReduxForm'/>
		<button 
						type='submit'
						className=" post__new-button btn btn-success ml-3">
						Отправить</button>
	</form>
}

NewPostReduxForm = reduxForm({
  form: 'newPostReduxForm'
})(NewPostReduxForm)

export default NewPostReduxForm;