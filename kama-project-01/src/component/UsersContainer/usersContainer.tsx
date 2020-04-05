import User from '../User';
import React,{Component} from 'react';
import {compose} from 'redux';

import Paginator from '../Paginator';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import { getUsers, setCurrentPage } from '../../redux/findUsers-reducer';
import { UserType } from '../../types/findUsersTypes';


type PropsType = {
	currentPage: number
	pageSize: number
	getUsers: typeof getUsers
	setCurrentPage: typeof setCurrentPage
	totalPeople: number

	usersData: Array<UserType>
	followingInProgress: Array<number>

	follow: (id: number) => void
	unfollow: (id:number) => void
}

class UsersContainer extends Component<PropsType> {
componentDidMount(){
	const{currentPage,pageSize,getUsers} = this.props;
	getUsers(currentPage, pageSize);	
}

onPageChanged =(pageNumber:number) => {
	const {setCurrentPage,getUsers,pageSize} = this.props;
	setCurrentPage(pageNumber);
	getUsers(pageNumber,pageSize);
}

render(){

	const {totalPeople,pageSize,currentPage,usersData,followingInProgress,follow,unfollow} = this.props;
			return(
			<div>
					<Paginator  totalItemsCount={totalPeople}
											pageSize={pageSize}
											currentPage={currentPage}
											onPageChanged={this.onPageChanged}/>

					{usersData.map( u => (
								<User 
									id={u.id}
									key={u.id}
									name={u.name}
									photos={u.photos.small}
									follow={u.followed}
									followingInProgress={followingInProgress}

									onFollow = {() => {
										follow(u.id);
									}}

									unFollow = {() => {
										unfollow(u.id)
									}}
								/>
					))}	
			</div>
						
		)
	}
}


export default compose (
	withAuthRedirect
)(UsersContainer);