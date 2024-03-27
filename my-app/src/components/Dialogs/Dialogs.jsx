import React from 'react';
import d from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem';
import Message from './Message';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/state';


const Dialogs = (props) => {
	let dialogsElem = props.state.dialogs.map((dd) => <DialogItem name={dd.name} id={dd.id} />)
	let messageElem = props.state.messages.map((mm) => <Message message={mm.message} />)
	let newMessageElement = React.createRef();
	let newMessageClick = () => {
		props.dispatch(sendMessageCreator());
	}
	let onNewMessageChange=()=>{
		let text = newMessageElement.current.value;
		props.dispatch(updateNewMessageBodyCreator(text));
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
				<textarea className={d.textMessage} ref={newMessageElement} onChange={onNewMessageChange} value={props.state.newMessageText} ></textarea>
				<div><button className={d.button} onClick={newMessageClick}>Отправить</button></div>
			</div>
				</div>
			</div>
			

		</div>
	);

}
export default Dialogs;
	