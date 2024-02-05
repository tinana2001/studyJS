import React from 'react';
import d from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) =>{
	let path="dialogs/" + props.id;
	return (
		<div>
			<div className={d.dialog}><NavLink to={path}>{props.name}</NavLink></div>
		</div>
	)
}

const Message =(props) => {
	return(
		<div>
			<div className={d.message}>{props.message}</div>
		</div>
	)
}


const Dialogs = (props) => {

	let dialogsElem= props.dialogs.map ((d)=><DialogItem name={d.name} id={d.id}/>)
	let messageElem=props.messages.map((m)=><Message message={m.message}/>)
	return(
	<div className={d.dialogs}>
		<div className={d.dialogsItem}>
			{dialogsElem}
		</div>
		<div className={d.messages}>
		{messageElem}
		</div>

	</div>
	);
	
}

export default Dialogs;
	