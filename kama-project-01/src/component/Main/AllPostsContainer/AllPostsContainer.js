import AllPosts from '../AllPosts/allPosts';
import {connect} from 'react-redux';
import {setLike} from '../../../redux/profile-reducer'



const mapStateToProps =(state)=> {
		return {
			postsData: state.profilePage.postsData
		}
	}

const AllPostsContainer = connect(mapStateToProps,{setLike})(AllPosts); 

export default AllPostsContainer;