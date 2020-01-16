import React from 'react';
import {NavLink} from 'react-router-dom';

import './auth.css'

const Auth = ({isAuth,login,logout}) => {

	return <div className='auth'>
		{	isAuth 
		? <div className='auth_login'>
				{login} <button className='btn btn-outline-dark ml-3' 
												onClick={logout} >
												Log Out
								</button>
			</div> 
		: <div className='btn btn-outline-dark'> <NavLink to='/login'>Login</NavLink></div> }
	</div>
}


export default Auth;