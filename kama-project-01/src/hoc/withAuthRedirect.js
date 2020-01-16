import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {compose} from 'redux';

const mapStateToProps = (state) => {
	return {
		isAuth: state.authLogin.data.isAuth
	}
}
const withAuthRedirect = (Comp) => {
	class RedirectComponent extends Component {
		render() {
			if(!this.props.isAuth) return <Redirect to={'/login'} />
			return <Comp {...this.props} />
		}
	}

	const RedirectContainer = compose(
		connect(mapStateToProps)
		)(RedirectComponent);

	return RedirectContainer;
}

export default withAuthRedirect;