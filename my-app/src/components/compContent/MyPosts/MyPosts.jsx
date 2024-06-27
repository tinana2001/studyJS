import React from 'react';
import p from './MyPosts.module.css';
import Post from './Post/Post';
// import {addPostActionCreator , updateNewPostTextCreator} from '../../../redux/profile-reducer';

import { Field, reduxForm } from 'redux-form';



const MyPosts = (props) => {
	let onAddPost = (values) => {
		props.newPost(values.newPostText);
	}
	let newPostElement = React.createRef();
	let postsElem = props.posts.map((p) => <Post message={p.message} likecount={p.likecount} profile={props.profile}/>)
	return (
		<div className={p.postsContainer}>
			<h3>My posts</h3>
			<AddNewPostFormRedux onSubmit={onAddPost} />
			<div className={p.posts}>
				{postsElem}
			</div>
		</div>
	)
}

const AddNewPostForm=(props)=>{
	return(
<form onSubmit={props.handleSubmit}>
	<Field name={"newPostText"} component={"textarea"}/>
				<div>
					<button className={p.but} >New Post</button>
				</div>
			</form>
	)
}

const AddNewPostFormRedux= reduxForm({form:"ProfileAddNewPostForm"})(AddNewPostForm)
export default MyPosts;