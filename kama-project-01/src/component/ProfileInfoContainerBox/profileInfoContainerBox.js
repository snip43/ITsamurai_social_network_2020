import {connect} from 'react-redux';
import ProfileInfoContainer from '../ProfileInfoContainer/';
import {withRouter} from 'react-router-dom';
import {setPhotosLargeProfile,setNameNewProfile,setLookingForJobDescription,setIsLookingForJob,setAboutMe} from '../../redux/profile-reducer';


const mapStateToProps = (state)=> {
	return {
		userId: state.profilePage.profileData.userId,
		large: state.profilePage.profileData.photos.large,
		fullName: state.profilePage.profileData.fullName,
		aboutMe: state.profilePage.profileData.aboutMe,
		lookingForJobDescription: state.profilePage.profileData.lookingForJobDescription,
		isLookingForJob: state.profilePage.profileData.isLookingForJob
	}
}

const mapDispatchToProps = {
	setPhotosLargeProfile,
	setNameNewProfile,
	setAboutMe,
	setIsLookingForJob,
	setLookingForJobDescription
}

const ProfileInfoContainerBox  = compose(
	connect(mapStateToProps,mapDispatchToProps),
	withRouter
)(ProfileInfoContainer)

export default ProfileInfoContainerBox;