import React from 'react';
import NewMessageReduxForm from '../NewMessageReduxForm'

class NewMessageReduxFormPage extends React.Component {
  submit = values => {
		this.props.addMessageText(values.newMessageReduxForm)
  }
  render() {
    return <NewMessageReduxForm onSubmit={this.submit} />
  }
}

export default NewMessageReduxFormPage;