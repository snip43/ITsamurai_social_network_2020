import React from 'react';
import {reduxForm} from 'redux-form'
import { required } from '../../utils/validate';
import  {InputForLogin} from '../InputForLogin/InputForLogin';
import {createField} from '../../utils/helpers';

import styles from  './LoginReduxForm.module.css'

const LoginForm = ({handleSubmit,error}) => {
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