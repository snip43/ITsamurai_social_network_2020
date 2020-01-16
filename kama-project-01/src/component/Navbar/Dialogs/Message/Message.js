import React from 'react';

import './Message.css';

const Message = (props) => {
	return (
			<div className="message border border-light my-3"> 
				{props.message}
			</div>
	)
}

export default Message;