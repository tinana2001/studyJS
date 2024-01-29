import React from 'react';
import p from './MyPosts.module.css';
import Post from './Post/Post';
const MyPosts = () => {
	return (
		<div>
			My posts
			<div>
			<textarea className={p.textarea}></textarea>
			<div>
				<button className={p.but}>New Post</button>
				</div>
			</div>
			<div className={p.posts}>
				<Post message="Сегодня стащил со стола креветки. Доволен" likecount='5' />
				<Post message="Всем привет! Теперь и я тут!" likecount='2' />
			</div>
		</div>
	)
}
export default MyPosts;