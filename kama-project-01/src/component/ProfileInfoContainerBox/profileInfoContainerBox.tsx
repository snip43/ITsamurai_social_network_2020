import {connect} from 'react-redux';
import ProfileInfoContainer from '../ProfileInfoContainer';
import {withRouter} from 'react-router-dom';
import {setPhotosLargeProfile,setNameNewProfile,setLookingForAJobDescription,setIsLookingForAJob,setAboutMe} from '../../redux/profile-reducer';
import { AppStateType } from '../../redux/redux-store';
import { compose } from 'redux';


const mapStateToProps = (state:AppStateType)=> {
	return {
		userId: state.profilePage.profileData.userId,
		large: state.profilePage.profileData.photos.large,
		fullName: state.profilePage.profileData.fullName,
		aboutMe: state.profilePage.profileData.aboutMe,
		lookingForAJobDescription: state.profilePage.profileData.lookingForAJobDescription,
		isLookingForAJob: state.profilePage.profileData.isLookingForAJob
	}
}

const mapDispatchToProps = {
	setPhotosLargeProfile,
	setNameNewProfile,
	setAboutMe,
	setIsLookingForAJob,
	setLookingForAJobDescription
}

const ProfileInfoContainerBox  = compose(
	connect(mapStateToProps,mapDispatchToProps),
	withRouter
)(ProfileInfoContainer)

export default ProfileInfoContainerBox;