import React, {Component} from 'react'
import {compose} from 'redux';

import './profile.css';
import AllPostsContainer from '../AllPostsContainer';
import NewPostContainer from '../NewPostContainer';
import ProfileInfoContainer from '../../ProfileInfoContainer';
import withAuthRedirect from '../../../hoc/withAuthRedirect';

class Profile extends Component {
	render() {
		return (
			<div className='ml-3 px-0'> 
				<ProfileInfoContainer />
				<NewPostContainer />
				<AllPostsContainer />
			</div>
		);
	}
}

export default compose(withAuthRedirect)(Profile);