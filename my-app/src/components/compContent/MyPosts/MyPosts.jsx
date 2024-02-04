import React from 'react';
import p from './MyPosts.module.css';
import Post from './Post/Post';
const MyPosts = () => {
	let posts=[
			{id: 1, message:'Сегодня стащил со стола креветки. Доволен', likecount:5},
			{id:2, message:'Всем привет! Теперь и я тут!', likecount:2},
			{id:3, message:'Добавляйтесь в друзья', likecount:1}
	]
	let postsElem= posts.map((p)=><Post message={p.message} likecount={p.likecount} />)
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