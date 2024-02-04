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


const Dialogs = () => {

	let dialogs=[
		{id:1, name:'Эльф'},
		{id:2, name:'Барсик'},
		{id:3, name:'Чуча'},
		{id:4, name:'Черныш'}
	]
	let dialogsElem= dialogs.map ((d)=><DialogItem name={d.name} id={d.id}/>)
	let messages=
	[
		{id:1, message:'Мяу'},
		{id:2, message:'Жду тебя на кухне'},
		{id:3, message:'Как твои дела?'}
	]
	let messageElem=messages.map((m)=><Message message={m.message}/>)
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
	