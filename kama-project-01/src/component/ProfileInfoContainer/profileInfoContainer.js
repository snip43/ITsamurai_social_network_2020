import React, { Component } from 'react'
import ProfileInfo from '../Main/Profile/ProfileInfo/profileInfo'
import {connect} from 'react-redux';
import {compose} from 'redux';
import {withRouter} from 'react-router-dom';
import {profileInfo,profileStatus,updateProfileStatus} from '../../redux/profile-reducer';
import { getProfile, getIsAuth } from '../../assets/profile-selectors';

class ProfileInfoContainer extends Component {

componentDidMount(){
	let userId = this.props.match.params.userId;
	if(!userId) {
		userId = this.props.profile.userId;
		if(!userId) {
			this.props.history.push('/login');
		} 
	}
	this.props.profileInfo(userId);
	this.props.profileStatus(userId);
}
	render() {

		const {aboutMe,fullName,isLookingForJob,lookingForJobDescription,status} = this.props.profile;

		return <ProfileInfo 
							large={this.props.profile.photos.large}
							name={fullName}
							isLookingForJob={isLookingForJob}
							lookingForJobDescription={lookingForJobDescription} 
							aboutMe={aboutMe}
							status ={status}
							updateProfileStatus = {this.props.updateProfileStatus}
							/>
	}
}

const mapStateToProps = (state)=> {
	return {
		profile: getProfile(state),
		isAuth: getIsAuth(state)
	}
}

const mapDispatchToProps = {
	profileInfo,
	profileStatus,
	updateProfileStatus
}

export default compose(
	withRouter,
	connect(mapStateToProps,mapDispatchToProps)
)(ProfileInfoContainer);








