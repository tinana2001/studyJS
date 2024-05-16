import React from 'react';
// import d from './Dialogs.module.css';
// import { NavLink } from 'react-router-dom';
// import DialogItem from './DialogItem';
// import Message from './Message';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import StoreContext from '../../StoreContext';


const DialogsContainer = () => {

	return <StoreContext.Consumer >
		{
		(store) => {
			let state = store.getState().messagesPage;


			let newMessageClick = () => {
				store.dispatch(sendMessageCreator());
			}
			let onNewMessageChange = (body) => {
				// let body = newMessageElement.current.value;
				// props.dispatch(updateNewMessageBodyCreator(body));
				store.dispatch(updateNewMessageBodyCreator(body));
			}
			return <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={newMessageClick} messagesPage={state} />
		}
	}
	</StoreContext.Consumer>

}
export default DialogsContainer;
	