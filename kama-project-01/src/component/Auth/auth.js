import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';

import './auth.css'

export default class Auth extends Component {

	componentDidUpdate(){
		console.log(this.props)
	}

	// shouldComponentUpdate(nextState) {
	// 	return nextState !== this.state;
	// }

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