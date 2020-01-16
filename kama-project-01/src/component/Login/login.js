import React from 'react';
import LoginReduxForm from '../LoginReduxForm';
import {connect} from 'react-redux';
import {login,logout} from '../../redux/auth_login-reducer';
import {Redirect} from 'react-router-dom';



const Login = ({login,logout,isAuth}) => {

const submit = formData => {
	login(formData.email,formData.password,formData.rememberMe)
}

if(isAuth) {
	return <Redirect to={'/profile'} />
}
	return <div className='d-flex flex-column align-items-center border border-warning w-50'>
		<h1>LOGIN</h1>
		<LoginReduxForm onSubmit={submit}/>
	</div>
}

const mapDispatchToProps = {
	login,
	logout
}

const mapStateToProps = (state) => ({
	isAuth: state.authLogin.data.isAuth
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);