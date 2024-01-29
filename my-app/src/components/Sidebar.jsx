import React from 'react';
import sb from './Sidebar.module.css';
const SideBar = () => {
	return(
		<div className={sb.sideBar}>
		<div>
		<a href=''>Profile</a>
		</div>
		<div>
		<a href=''>Message</a>
		</div>
		<div>
		<a href=''>News</a>
		</div>
		<div>
		<a href=''>Music</a>
		</div>
		<div>
		<a href=''>Settings</a>
		</div>
	 </div>
	);
	
	}
	export default SideBar;
	