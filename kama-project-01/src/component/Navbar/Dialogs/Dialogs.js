import React from 'react';
import {compose} from 'redux'

import withAuthRedirect from '../../../hoc/withAuthRedirect.js'

import NewDialogContainer from './newDialogContainer';
import MessageContainer from './MessageContainer';

import './Dialogs.css';

const Dialogs = () => { 

	return (
		<div className='dialogs d-flex w-100'>
				<NewDialogContainer />
				<MessageContainer />

		</div>
	);
}

export default compose(
	withAuthRedirect
	)(Dialogs);