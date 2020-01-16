import AllPosts from '../AllPosts/allPosts';
import {connect} from 'react-redux';
import {compose} from 'redux'


const mapStateToProps =(state)=> {

		return {
			postsData: state.profilePage.postsData
		}
	}


const AllPostsContainer = compose(
	connect(mapStateToProps)
	)(AllPosts);

export default AllPostsContainer;