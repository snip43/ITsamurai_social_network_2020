import React from 'react';

import './navbar_friend.css';

const NavbarFriend = (props) => {

	return (
		<div className="friends__cards_card">
							<div className="friends_card_avatar">
									<img src={props.avatar} alt={props.name} />
							</div>
							<div className="friends_card_name">{props.name}</div>
		</div>
	)
}

export default NavbarFriend;