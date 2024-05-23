import React from 'react';
import d from './Dialogs.module.css';
// import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem';
import Message from './Message';
// import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';


const Dialogs = (props) => {
	let state = props.messagesPage;
	let dialogsElem = state.dialogs.map((dd) => <DialogItem name={dd.name} key={dd.id} id={dd.id} />)
	let messageElem = state.messages.map((mm) => <Message message={mm.message} key ={mm.id}/>)
	let newMessageText = state.newMessageText;
	let newMessageElement = React.createRef();
	let newMessageClick = () => {
		props.sendMessage();
	}
	let onNewMessageChange=(e)=>{
		//  let body = newMessageElement.current.value;
		// // props.dispatch(updateNewMessageBodyCreator(body));
		// props.updateNewMessageBody(body);
		let body = e.target.value;
		// props.dispatch(updateNewMessageBodyCreator(body));
		props.updateNewMessageBody(body);
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
				<textarea className={d.textMessage} ref={newMessageElement} onChange={onNewMessageChange} textarea value={newMessageText} ></textarea> 
				<div><button className={d.button} onClick={newMessageClick}>Отправить</button></div>
			</div>
				</div>
			</div>
			

		</div>
	);

}
export default Dialogs;
	