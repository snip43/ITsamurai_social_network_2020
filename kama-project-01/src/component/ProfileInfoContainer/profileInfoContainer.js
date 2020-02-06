import React, { Component } from 'react'
import ProfileInfo from '../Main/Profile/ProfileInfo/profileInfo'
import {connect} from 'react-redux';
import {compose} from 'redux';
import {withRouter} from 'react-router-dom';
import {profileInfo,profileStatus,updateProfileStatus,savePhoto} from '../../redux/profile-reducer';
import { getProfile, getIsAuth } from '../../assets/profile-selectors';

class ProfileInfoContainer extends Component {

componentDidMount(){
	let userId = this.props.match.params.userId;
	if(!userId) {
		userId = this.props.profile.userId;
		// if(!userId) {
		// 	this.props.history.push('/login');
		// } 
	}
	this.props.profileInfo(userId);
	this.props.profileStatus(userId);
}

componentDidUpdate(prevProps,prevState) {

}

	render() {

		const {aboutMe,fullName,isLookingForJob,lookingForJobDescription,status} = this.props.profile;

		return <ProfileInfo 
		savePhoto = {this.props.savePhoto}
							isOwner = {!this.props.match.params.userId}
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
	updateProfileStatus,
	savePhoto
}

export default compose(
	withRouter,
	connect(mapStateToProps,mapDispatchToProps)
)(ProfileInfoContainer);








