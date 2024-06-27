
import {addPostActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';


const mapStateToProps =(state)=>{
	return{
		posts: state.profilePage.posts,
		newPostText: state.profilePage.newPostText,
		profile: state.profilePage.profile
	}
}
const mapDispatchToProps =(dispatch)=>{
	return{
		newPost:(newPostText)=>{
			dispatch(addPostActionCreator(newPostText));
		}
	}
}
const MyPostsContainer =connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;