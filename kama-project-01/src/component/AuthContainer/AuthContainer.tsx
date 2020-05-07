import Auth from '../Auth'
import React,{Component} from 'react';
import {connect, ConnectedProps} from 'react-redux';
	
import {logout} from '../../redux/auth_login-reducer'
import { AppStateType } from '../../redux/redux-store';


class AuthContainer extends Component<Props> {

	render() {
		return <Auth {...this.props}/>
	}
}

const mapStateToProps = (state: AppStateType) => {
	return {
		email: state.authLogin.data.email,
		login: state.authLogin.data.login,
		isAuth: state.authLogin.data.isAuth
	}
}

const mapDispatchToProps = {
	logout
}

const connector = connect(mapStateToProps,mapDispatchToProps)

type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux

export default connector(AuthContainer)

