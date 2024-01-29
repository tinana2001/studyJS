import React from 'react';
import p from './Post.module.css';
const Post = (props) => {
	return (

		<div className={p.item}>
			<img src='https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663117723_20-mykaleidoscope-ru-p-kotiki-veselie-pinterest-20.jpg'></img>
				{props.message}
			<div>
				<span> лайки {props.likecount}</span>
			</div>
		</div>


	)
}
export default Post;