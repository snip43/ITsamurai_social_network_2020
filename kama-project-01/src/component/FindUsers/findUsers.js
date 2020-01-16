import UsersContainer from '../UsersContainer';
import {connect} from 'react-redux';
import {compose} from 'redux'

import {follow,	unfollow,	toggleIsFetching,getUsers,setCurrentPage} from '../../redux/findUsers-reducer';


const mapStateToProps = (state) => {

	return {
		usersData: state.findUsersPage.usersData,
		currentPage: state.findUsersPage.currentPage,
		pageSize: state.findUsersPage.pageSize,
		totalPeople: state.findUsersPage.totalPeople,
		isFetching: state.findUsersPage.isFetching,
		followingInProgress: state.findUsersPage.followingInProgress,
		isAuth: state.authLogin.data.isAuth

	}
}
const mapDispatchToProps =  {
		toggleIsFetching,
		setCurrentPage,
		getUsers,
		follow,
		unfollow,
		}


const FindUsers = compose (
	connect(mapStateToProps,mapDispatchToProps)
	)(UsersContainer);


export default FindUsers;
