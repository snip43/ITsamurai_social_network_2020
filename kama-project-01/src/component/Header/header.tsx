import React,{ FC } from 'react';
import AuthContainer from '../AuthContainer/AuthContainer'
import styles from './header.module.css';

type PropsType = {}

const Header: FC<PropsType> = () => {
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