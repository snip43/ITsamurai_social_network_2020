import React from 'react';
import styles from './friends.module.css';

import NavbarFriend from './navbar_friend';

const Friends = (props) => {

	let newFriend = props.friendsData.map( (f,index)=>  index<3 
	? 	<NavbarFriend name={f.name}	avatar={f.avatar}	key={index} /> 
	: null);

	return (

		<div className={styles.friends}>
			<h3>	Friends</h3>
			<div className={styles.friends__cards}>
						{newFriend}
			 </div>
		</div>
	)
}

export default Friends;