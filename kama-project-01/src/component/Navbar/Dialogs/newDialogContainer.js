import DialogItemContainer from './DialogItemContainer';
import {connect} from 'react-redux';
import {compose} from 'redux'

const mapStateToProps = (state) => {
	return {
		dialogData:  state.dialogsPage.dialogData
	}
}

let NewDialogContainer = compose(
	connect (mapStateToProps)
	)(DialogItemContainer);

export default NewDialogContainer;