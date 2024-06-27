// import d from './Dialogs.module.css';
// import { NavLink } from 'react-router-dom';
// import DialogItem from './DialogItem';
// import Message from './Message';
import { compose } from 'redux';
import { authRedirect } from '../../hoc/authRedirect';
import { sendMessageCreator} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';



//превращаем часть state в пропсы
let mapStateToProps =(state)=>{
return{
	messagesPage: state.messagesPage,
}
}
//сюда будем засовывать нужные нам колбэки
let mapDispatchToProps =(dispatch)=>{
	return{
		sendMessage: (newMessageText)=>{dispatch(sendMessageCreator(newMessageText));},
}
}

 //создаем презентационную компоненту, которая будет снабжать Dialogs данными (Dialogs законнектили к стору)
export default compose(
	connect(mapStateToProps,mapDispatchToProps),
	authRedirect
)(Dialogs) ;
	