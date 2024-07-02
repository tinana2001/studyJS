import React from 'react';
import h from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
	return (
		<div className={h.header}>
			<div className={h.icon}><img src='https://img.freepik.com/premium-vector/cat-care-logo_7315-15.jpg?w=2000'></img></div>
			<div className={h.headerText}>
				<div>Котики и кисики</div>
			</div>
			<div className={h.loginBlock}>
				{props.isAuth? <div>{props.login} <button className={h.but} onClick={props.logout}>Log out</button></div>: 
				<NavLink className={h.navlinkBtn} to ={'/login'}><div>Log in</div></NavLink>}
		</div>
		</div>
	);

}

export default Header;
	