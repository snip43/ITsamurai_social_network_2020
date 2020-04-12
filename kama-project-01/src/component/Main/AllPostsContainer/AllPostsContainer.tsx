import AllPosts from '../AllPosts/allPosts';
import {connect} from 'react-redux';
import {setLike} from '../../../redux/profile-reducer'
import { StateReducers } from '../../../redux/redux-store'


const mapStateToProps =(state: StateReducers)=> {
		return {
			postsData: state.profilePage.postsData
		}
	}

const mapDispatchToProps = {
	
}

const AllPostsContainer = connect(mapStateToProps,{setLike})(AllPosts); 

export default AllPostsContainer;