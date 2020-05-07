import UsersContainer from '../UsersContainer';
import {connect, ConnectedProps} from 'react-redux';
import {follow,	unfollow,	toggleIsFetching,getUsers,setCurrentPage} from '../../redux/findUsers-reducer';
import { AppStateType } from '../../redux/redux-store';


const mapStateToProps = (state: AppStateType) => {

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

const connector = connect(mapStateToProps,mapDispatchToProps);

type PropsFindUsers = ConnectedProps<typeof connector>

// const FindUsers = compose ( 
// 	connect(mapStateToProps,mapDispatchToProps)
// 	)(UsersContainer);

const FindUsers = connector(UsersContainer);


export default FindUsers;
