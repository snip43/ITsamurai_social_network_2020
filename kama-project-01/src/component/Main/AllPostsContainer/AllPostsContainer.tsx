import AllPosts from '../AllPosts/allPosts';
import {connect, ConnectedProps} from 'react-redux';
// import { AppStateType } from '../../../redux/redux-store'
import { setLike } from '../../../redux/profile-reducer';
import { SetLikeType } from '../../../types/profileReducerTypes';
import { PostsDataType, InitinalStateType } from '../../../types/profileTypes';

type StateProps = {
  postsData: PostsDataType
}

type DispatchProps = {
  setLike: (userId: number) => SetLikeType
}



const mapStateToProps = (state: InitinalStateType): StateProps => {
		return {
			postsData: state.postsData
		}
	}

	const mapDispatchToProps: DispatchProps = {
		setLike
	}

	const connector = connect(mapStateToProps,mapDispatchToProps)
	type PropsFromRedux = ConnectedProps<typeof connector>

	export type PropsAllPosts = PropsFromRedux
// const AllPostsContainer = connect<StateProps, DispatchProps>(mapStateToProps,mapDispatchToProps)(AllPosts); 

export default connector(AllPosts);