import React from 'react';
import {addPostActionCreator , updateNewPostTextCreator} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';





const MyPostsContainer = (props) => {
debugger
	let state = props.store.getState(); 

	let newPost = () => {
		props.store.dispatch(addPostActionCreator());
	}
	let onPostChange=(text)=>{
		let action = updateNewPostTextCreator(text);
		props.store.dispatch(action);
	}
	
	return (
		<MyPosts updateNewPostText= {onPostChange} 
		newPost={newPost} 
		posts = {state.profilePage.posts} 
		newPostText ={state.profilePage.newPostText}/>
	)
	
}


export default MyPostsContainer;