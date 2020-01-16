import React from 'react';
import AuthContainer from '../AuthContainer/AuthContainer'
import styles from './header.module.css';


const Header = () => {
	return (
	<div className={styles.header}>
			<div className = {styles.header_logo_login}>
				<div className={styles.header_logo}></div>
				<AuthContainer />
			</div>
	</div>
	)
} 

export default Header;