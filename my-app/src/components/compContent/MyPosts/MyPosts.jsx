import React from 'react';
import p from './MyPosts.module.css';
import Post from './Post/Post';
// import {addPostActionCreator , updateNewPostTextCreator} from '../../../redux/profile-reducer';




const MyPosts = (props) => {
	let onAddPost = () => {
		props.newPost();
		//let text=newPostElement.current.value;
		//props.dispatch(addPostActionCreator());
		// props.updateNewPostChange('');
	}
	let onPostChange=()=>{
	let text=newPostElement.current.value;
	props.updateNewPostText(text);
	}
	let newPostElement = React.createRef();
	let postsElem = props.posts.map((p) => <Post message={p.message} likecount={p.likecount} profile={props.profile}/>)
	return (
		<div className={p.postsContainer}>
			<h3>My posts</h3>
			<div>
				<textarea className={p.textarea} onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
				<div>
					<button className={p.but} onClick={onAddPost} >New Post</button>
				</div>
			</div>
			<div className={p.posts}>
				{postsElem}
			</div>
		</div>
	)
}


export default MyPosts;