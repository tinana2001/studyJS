import React from 'react';
import {addPostActionCreator , updateNewPostTextCreator} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import StoreContext from '../../../StoreContext';





const MyPostsContainer = () => {
	return (
		<StoreContext.Consumer > 
			{
			(store)=>{
				let state = store.getState(); 
				let newPost = () => {
					store.dispatch(addPostActionCreator());
				}
				let onPostChange=(text)=>{
					let action = updateNewPostTextCreator(text);
					store.dispatch(action);
				}
			return <MyPosts updateNewPostText={onPostChange}
				newPost={newPost}
				posts={state.profilePage.posts}
				newPostText={state.profilePage.newPostText} />
		}
	}
		</StoreContext.Consumer>
	)
	
}


export default MyPostsContainer;