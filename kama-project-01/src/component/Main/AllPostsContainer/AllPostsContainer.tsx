import AllPosts from '../AllPosts/allPosts';
import {connect} from 'react-redux';
import { StateReducers } from '../../../redux/redux-store'
import { setLike } from '../../../redux/profile-reducer';
import { SetLikeType } from '../../../types/profileReducerTypes';
import { PostsDataType } from '../../../types/profileTypes';

interface StateProps {
  postsData: PostsDataType
}

interface DispatchProps {
  setLike: (userId: number) => SetLikeType
}

export type PropsAllPosts = StateProps & DispatchProps

const mapStateToProps = (state: StateReducers)=> {
		return {
			postsData: state.profilePage.postsData
		}
	}

	const mapDispatchToProps = {
		setLike
	}


const AllPostsContainer = connect<StateProps, DispatchProps>(mapStateToProps,mapDispatchToProps)(AllPosts); 

export default AllPostsContainer;