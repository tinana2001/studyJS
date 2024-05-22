const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';
let initialState = {
	dialogs: [
		{ id: 1, name: 'Эльф' },
		{ id: 2, name: 'Барсик' },
		{ id: 3, name: 'Чуча' },
		{ id: 4, name: 'Черныш' }
	],
	messages: [
		{ id: 1, message: 'Мяу' },
		{ id: 2, message: 'Жду тебя на кухне' },
		{ id: 3, message: 'Как твои дела?' }
	],
	newMessageText: '',
}
export const dialogReducer = (state=initialState, action) => {
	switch (action.type) {
		case UPDATE_NEW_MESSAGE_BODY:
			state.newMessageText = action.body;
			return state;
		case SEND_MESSAGE:
			let newBody = {
				id: 5,
				message: state.newMessageText,
			}
			state.messages.push(newBody);
			state.newMessageText = '';
			return state;
		default:
			return state;

	}



}


export const updateNewMessageBodyCreator = (messageText)=> {
	return{type:UPDATE_NEW_MESSAGE_BODY, body:messageText}
}
export const sendMessageCreator = ()=>{
	return {type: SEND_MESSAGE}
}

export default dialogReducer;