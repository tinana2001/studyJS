import React from 'react';
import p from './MyPosts.module.css';
import Post from './Post/Post';
const MyPosts = (props) => {
	let newPost = () => {
		let text=newPostElement.current.value;
		props.addPost(text);
		// props.updateNewPostChange('');
	}
	let onPostChange=()=>{
let text=newPostElement.current.value;
props.updateNewPostChange(text);
	}
	let newPostElement = React.createRef();
	let postsElem = props.posts.map((p) => <Post message={p.message} likecount={p.likecount} />)
	return (
		<div className={p.postsContainer}>
			<h3>My posts</h3>
			<div>
				<textarea className={p.textarea} onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
				<div>
					<button className={p.but} onClick={newPost} >New Post</button>
				</div>
			</div>
			<div className={p.posts}>
				{postsElem}
			</div>
		</div>
	)
}
export default MyPosts;