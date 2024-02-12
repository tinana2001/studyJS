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

	let dialogsElem = props.state.dialogs.map((d) => <DialogItem name={d.name} id={d.id} />)
	let messageElem = props.state.messages.map((m) => <Message message={m.message} />)
	let newMessageElement = React.createRef();
	let newMessage = () => {
		let text = newMessageElement.current.value;
		alert(text);
	}
	return (
		<div className={d.message}>
			<div className={d.dialogs}>
				<div className={d.dialogsItem}>
					{dialogsElem}
				</div>
				<div className={d.messages}>
					{messageElem}
					<div className={d.formForMessage}>
				<textarea className={d.textMessage} ref={newMessageElement}></textarea>
				<div><button className={d.button} onClick={newMessage}>Отправить</button></div>
			</div>
				</div>
			</div>
			

		</div>
	);

}

export default Dialogs;
	