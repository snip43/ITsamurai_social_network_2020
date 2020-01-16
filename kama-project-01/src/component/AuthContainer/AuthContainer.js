import Auth from '../Auth'
import React,{Component} from 'react';
import {connect} from 'react-redux';
	
import {logout} from '../../redux/auth_login-reducer'


class AuthContainer extends Component {

	render() {
		return <Auth {...this.props}/>
	}
}

const mapStateToProps = (state) => {
	return {
		userId: state.authLogin.data.id,
		email: state.authLogin.data.email,
		login: state.authLogin.data.login,
		isAuth: state.authLogin.data.isAuth
	}

}

const mapDispatchToProps = {
	logout
}

export default connect(mapStateToProps,mapDispatchToProps)(AuthContainer)

