import Fone from "./Fone";
import Profile from "./Profile";
import React from 'react';
import cc from './CompContent.module.css';

const CompContent = () => {
	return(
		
		<div className={cc.content}>
			<Fone/>
			<Profile/>
	 </div>
	);
	
	}
	export default CompContent;