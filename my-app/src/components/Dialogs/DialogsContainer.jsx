import React from 'react';
import d from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem';
import Message from './Message';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';


const DialogsContainer = (props) => {
	let state = props.store.getState().messagesPage; 
	

	let newMessageClick = () => {
		props.store.dispatch(sendMessageCreator());
	}
	let onNewMessageChange=(body)=>{
		// let body = newMessageElement.current.value;
		// props.dispatch(updateNewMessageBodyCreator(body));
		props.store.dispatch(updateNewMessageBodyCreator(body));
	}
	return (
		<Dialogs updateNewMessageBody={onNewMessageChange} sendMessage = {newMessageClick} messagesPage ={state}/>
	);

}
export default DialogsContainer;
	