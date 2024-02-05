import React from 'react';
import p from './MyPosts.module.css';
import Post from './Post/Post';
const MyPosts = (props) => {

	let postsElem= props.posts.map((p)=><Post message={p.message} likecount={p.likecount} />)
	return (
		<div className={p.postsContainer}>
			<h3>My posts</h3>
			<div>
			<textarea className={p.textarea}></textarea>
			<div>
				<button className={p.but}>New Post</button>
				</div>
			</div>
			<div className={p.posts}>
				{postsElem}
			</div>
		</div>
	)
}
export default MyPosts;