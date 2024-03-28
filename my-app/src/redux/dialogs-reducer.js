const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

export const dialogReducer = (state, action) => {
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
export default dialogReducer;