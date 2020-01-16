import React from 'react';
import LoginReduxForm from '../LoginReduxForm';
import {connect} from 'react-redux';
import {login} from '../../redux/auth_login-reducer';
import {Redirect} from 'react-router-dom';
import styles from './login.module.css';



const Login = ({login,isAuth}) => {

const submit = formData => {
	login(formData.email,formData.password,formData.rememberMe)
}

if(isAuth) {
	return <Redirect to={'/profile'} /> 
}
	return <div className={styles.loginForm}>
		<h1>LOGIN</h1>
		<LoginReduxForm onSubmit={submit}/>
	</div>
}

const mapDispatchToProps = {
	login
}

const mapStateToProps = (state) => ({
	isAuth: state.authLogin.data.isAuth
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);