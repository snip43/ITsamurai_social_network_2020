import React, {Component} from 'react'
import NewPostReduxForm from '../NewPostReduxForm/newPostReduxForm'


class NewPostReduxFormPage extends Component {
	submit = values => {
		this.props.addPostOnReduxForm(values.newPostReduxForm)
	}
	render() {
		return <NewPostReduxForm onSubmit={this.submit} />
	}
}

export default NewPostReduxFormPage;