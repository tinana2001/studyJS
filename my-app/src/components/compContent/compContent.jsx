import Fone from "./Fone";
import Profile from "./Profile";
import React from 'react';
import cc from './CompContent.module.css';
import MyPosts from "./MyPosts/MyPosts";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const CompContent = (props) => {
	
	return(
	
		<div className={cc.content}>
			<Fone/>
			<Profile/>
			<MyPostsContainer store={props.store}/>
	 </div>
	);
	
	}


	export default CompContent;