import React from 'react';
import sb from './Sidebar.module.css';
import { NavLink } from 'react-router-dom';
const SideBar = () => {
	return(
		<div className={sb.sideBar}>
		<div className={sb.item}>
		<NavLink to='/CompContent'>Profile</NavLink>
		</div>
		<div className={sb.item}>
		<NavLink to='/Dialogs'>Message</NavLink>
		</div>
		<div className={sb.item}>
		<NavLink>News</NavLink>
		</div>
		<div className={sb.item}>
		<NavLink>Music</NavLink>
		</div>
		<div className={sb.item}>
		<NavLink>Settings</NavLink>
		</div>
	 </div>
	);
	
	}
	export default SideBar;
	