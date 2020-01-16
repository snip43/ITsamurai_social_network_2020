import React from 'react';
import { Route } from 'react-router-dom'

import styles from './main.module.css';

import Navbar from '../Navbar/';
import Profile from './Profile';
import Dialogs from '../Navbar/Dialogs/';
import News from '../Navbar/News/';
import Music from '../Navbar/Music/';
import Settings from '../Navbar/Settings/';
import FindUsers from '../FindUsers';
import Login from '../Login'

const Main = () => {
	return (
		
				<div className={styles.main}>
					<div className={styles.navbar}>
						<Navbar /> 
					</div>
					<div className={styles.content}>
						<Route 	render ={ () =>  <Dialogs />}
										path='/dialogs'/>
						<Route 	render ={ () => <Profile />} 
										path='/profile/:userId?'/>
						<Route  render ={ () => <News />}
										path='/news'/>
						<Route 	render ={ () => <Music />}
										path='/music'/>
						<Route 	render ={ () => <FindUsers />}
										path='/findusers'/>
						<Route 	render ={ () => <Settings />}
										path='/settings'/>
						<Route 	render ={ () => <Login />}
										path='/login'/>
					</div>
					
				</div>
		
);
}

export default Main;