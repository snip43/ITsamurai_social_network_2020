import React from 'react';
import { NavLink } from 'react-router-dom'


import './dialog-item.css';

const DialogItem = (props) => {

	let path = `/dialogs/${props.id}`;

	return	<NavLink to= {path} className="dialog-item list-group-item">{props.name}</NavLink>
	
}

export default DialogItem;