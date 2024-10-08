import React from 'react';
import p from './Post.module.css';
import Preloader from '../../../common/preloader/Preloader';
import userPhoto from '../../../../assets/imeges/cat-siluet.png'
const Post = (props) => {
	if (!props.profile) {
		return <Preloader />
	}
	return (
		<div className={p.item}>
			
			<img src={props.profile.photos.small!=null? props.profile.photos.small: userPhoto}/>
			{/* <img src="https://catherineasquithgallery.com/uploads/posts/2021-03/1614576613_6-p-chernie-silueti-na-belom-fone-6.png" alt="" /> */}
				{props.message}
			<div>
				<span> лайки {props.likecount}</span>
			</div>
		</div>


	)
}
export default Post;