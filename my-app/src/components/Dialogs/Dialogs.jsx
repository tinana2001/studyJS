import React from 'react';
import d from './Dialogs.module.css';
// import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem';
import Message from './Message';
import { Field, reduxForm } from 'redux-form';
import { TextArea } from '../common/FormsControls/FormsControls';
import { maxLengthCreator, required } from '../../utils/validators/validators';
// import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';


const Dialogs = (props) => {
	
	let state = props.messagesPage;
	let dialogsElem = state.dialogs.map((dd) => <DialogItem name={dd.name} key={dd.id} id={dd.id} />)
	let messageElem = state.messages.map((mm) => <Message message={mm.message} key={mm.id} />)
	//let newMessageText = state.newMessageText;
	let newMessageElement = React.createRef();
	let addNewMessage = (values) => {
		props.sendMessage(values.newMessageText);
	}

	return (
		<div className={d.message}>
			<div className={d.dialogs}>
				<div className={d.dialogsItem}>
					{dialogsElem}
				</div>
				<div className={d.messages}>
					{messageElem}
					<AddMessageFormRedux onSubmit={addNewMessage}/>
				</div>
			
			</div>


		</div >
	);

}

const maxLength100=maxLengthCreator(100);
const AddMessageForm=(props)=>{
	return(
		<form onSubmit={props.handleSubmit}>
						<div className={d.formForMessage}>
							<Field className={d.textMessage} validate={[required,maxLength100]} component={TextArea} name="newMessageText" placeholder='Enter your message'/>
							{/* <textarea className={d.textMessage} ref={newMessageElement} onChange={onNewMessageChange} textarea value={newMessageText} ></textarea> */}
							<div><button className={d.button}>Отправить</button></div>
						</div>
					</form>
	)
}
const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm)
export default Dialogs;
