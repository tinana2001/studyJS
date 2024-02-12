import Fone from "./Fone";
import Profile from "./Profile";
import React from 'react';
import cc from './CompContent.module.css';
import MyPosts from "./MyPosts/MyPosts";

const CompContent = (props) => {

	return(
	
		<div className={cc.content}>
			<Fone/>
			<Profile/>
			<MyPosts posts={props.state.posts}/>
	 </div>
	);
	
	}
	export default CompContent;