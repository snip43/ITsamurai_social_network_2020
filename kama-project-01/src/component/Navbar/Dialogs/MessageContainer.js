import MessageBox from './MessageBox';
import {connect} from 'react-redux';
import {compose} from 'redux'

const mapStateToProps = (state) => {
	return {
		messageData: state.dialogsPage.messageData,
		isAuth: state.authLogin.data.isAuth
	}
}

const MessageContainer = compose(
	connect(mapStateToProps)
)(MessageBox);

export default MessageContainer;