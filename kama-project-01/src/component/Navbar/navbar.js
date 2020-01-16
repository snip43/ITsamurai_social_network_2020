import React from 'react';
import {NavLink} from 'react-router-dom';

import Friends from './Friends/'

import styles from './navbar.module.css';
import store from '../../redux/redux-store';

const Navbar = () => {
return (
	<div className={styles.sidebar}>
		<div className={`btn-group-vertical ${styles.sidebar_link}`}>
				<NavLink to="/profile" className='btn btn-outline-light'>Profile</NavLink>
				<NavLink to="/dialogs" className='btn btn-outline-light'>Dialogs</NavLink>
				<NavLink to="/news" className='btn btn-outline-light'>News</NavLink>
				<NavLink to="/music" className='btn btn-outline-light'>Music</NavLink>
				<NavLink to='/findusers' className='btn btn-outline-light mt-5'>FindUsers </NavLink>
				<NavLink to="/settings" className='btn btn-outline-secondary mt-5'>Settings</NavLink>
		</div>

		<div className= {styles.navbar__friends} >
			<Friends friendsData ={store.getState().navbarPage.friendsData} /> 
		</div>

		

	</div>
)
}

export default Navbar;