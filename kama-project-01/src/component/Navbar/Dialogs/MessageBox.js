import React from 'react';

import Message from './Message/'
import NewMessageContainer from './Message/NewMessageContainer'

const MessageBox = (props) => {

let getNewMessage = props.messageData.map( (m,index) => 
					<Message 
											message={m.message} 
											id={m.id} 
											key={index} />);
return (
			<div className="messages-list col-9">
						{getNewMessage}
				<NewMessageContainer />
			</div>
 )
}

export default MessageBox;