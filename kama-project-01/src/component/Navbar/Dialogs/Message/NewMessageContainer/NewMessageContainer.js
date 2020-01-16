import {connect} from 'react-redux';
import {compose} from 'redux';
import {addMessageText} from '../../../../../redux/dialogs-reducer';
import NewMessageReduxFormPage from '../../../../newMessageReduxFormPage/newMessageReduxFormPage';

const mapStateToProps = (state) => {
	return {
		newMessageText: state.dialogsPage.newMessageText
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		addMessageText: (messageText) => {
			dispatch(addMessageText(messageText));
		}
	}
}

const NewMessageContainer = compose(
	connect(mapStateToProps,mapDispatchToProps)
)(NewMessageReduxFormPage);

export default NewMessageContainer;