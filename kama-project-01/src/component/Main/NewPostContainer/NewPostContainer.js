import {connect} from 'react-redux';
import {compose} from 'redux';
import {addPostOnReduxForm} from '../../../redux/profile-reducer';
import NewPostReduxFormPage from '../../NewPostReduxFormPage/NewPostReduxFormPage';



	let mapStateToProps = (state) => {
		return {
			newPostText: state.profilePage.newPostText
		}
	}

	let mapDispatchToProps = {
			addPostOnReduxForm
	}

	const NewPostContainer = compose(
		connect(mapStateToProps, mapDispatchToProps)
		)(NewPostReduxFormPage);

export default NewPostContainer;
	

