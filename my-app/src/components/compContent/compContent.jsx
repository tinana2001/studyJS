import Fone from "./Fone";
import Profile from "./Profile";
import React from 'react';
import cc from './CompContent.module.css';
import MyPosts from "./MyPosts/MyPosts";

const CompContent = () => {
	return(
		
		<div className={cc.content}>
			<Fone/>
			<Profile/>
			<MyPosts />
	 </div>
	);
	
	}
	export default CompContent;