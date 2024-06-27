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
}
export const dialogReducer = (state=initialState, action) => {
	
	switch (action.type) {
		case SEND_MESSAGE:
			let newBody = {
				id: 5,
				message: action.newMessageText,
			}
			return {...state,
				messages: [...state.messages, newBody],
			}
		
		default:
			return state;

	}



}


export const sendMessageCreator = (newMessageText)=>{
	return ({type: SEND_MESSAGE, newMessageText})
}

export default dialogReducer;