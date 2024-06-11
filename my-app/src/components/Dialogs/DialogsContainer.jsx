// import d from './Dialogs.module.css';
// import { NavLink } from 'react-router-dom';
// import DialogItem from './DialogItem';
// import Message from './Message';
import { authRedirect } from '../../hoc/authRedirect';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

let AuthRedirectComponent =authRedirect(Dialogs);

//превращаем часть state в пропсы
let mapStateToProps =(state)=>{
return{
	messagesPage: state.messagesPage,
}
}
//сюда будем засовывать нужные нам колбэки
let mapDispatchToProps =(dispatch)=>{
	return{
		sendMessage: ()=>{dispatch(sendMessageCreator());},
		updateNewMessageBody: (body)=>{dispatch(updateNewMessageBodyCreator(body));}
}
}



const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(AuthRedirectComponent); //создаем презентационную компоненту, которая будет снабжать Dialogs данными (Dialogs законнектили к стору)
export default DialogsContainer;
	