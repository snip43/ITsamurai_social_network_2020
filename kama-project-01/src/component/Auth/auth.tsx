import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';

import './auth.css'

type PropsType = {
	isAuth: boolean
	login: string|null
	email: string|null
	logout: () => void
	
}

export default class Auth extends Component<PropsType> {

	render(){

	const {isAuth,login,logout} = this.props;

	return <div className='auth'>
		{{isAuth} ? <div className='auth_login'>
					{login} 
					<button className='btn btn-outline-dark ml-3' 
									onClick={logout} >
									Log Out
					</button>
				</div> : <div className='btn btn-outline-dark'> <NavLink to='/login'>Login</NavLink></div> }
		</div>
}}