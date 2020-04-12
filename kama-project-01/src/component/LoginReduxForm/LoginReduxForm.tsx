import React, { FC } from 'react';
import {reduxForm} from 'redux-form'
import { required } from '../../utils/validate';
import {createField} from '../../utils/helpers';
import styles from  './LoginReduxForm.module.css'
import InputForLogin from '../InputForLogin';

type PropsType = {
	handleSubmit: any
	error: any
}

const LoginForm: FC<PropsType> = ({handleSubmit,error}) => {
  return <form onSubmit={handleSubmit}>
		{createField('email','Email:','Логин',InputForLogin,[required],"text")}
		{createField('password','Password:','Пароль',InputForLogin,[required],"password")}
		
		{error && <div className={styles.summaryError}> {error} </div>}
		{createField('rememberMe','rememberMe','запомнить',InputForLogin,[],'checkbox')}
		<button className='btn btn-dark'>LogIn</button> 
	</form>
}

const LoginReduxForm = reduxForm({
	form: 'login'
})(LoginForm)

export default LoginReduxForm;