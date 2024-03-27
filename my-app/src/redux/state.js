const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE'

let store = {
	_state: {
		profilePage: {
			posts: [
				{ id: 1, message: 'Сегодня стащил со стола креветки. Доволен', likecount: 5 },
				{ id: 2, message: 'Всем привет! Теперь и я тут!', likecount: 2 },
				{ id: 3, message: 'Добавляйтесь в друзья', likecount: 1 }
			],
			newPostText: 'TextText',
		},
		messagesPage: {
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

	},
	_callSubscriber() {
		console.log('state changed');
	},
	getState() {
		return this._state;
	},

	subscribe(observer) {
		this._callSubscriber = observer;
	},
	dispatch(action) { //type:'ADD-POST'

		if (action.type === 'ADD-POST') {
			let newPost = {
				id: 5,
				message: this._state.profilePage.newPostText,
				likecount: 0,
			}
			this._state.profilePage.posts.push(newPost);
			this._state.profilePage.newPostText = '';
			this._callSubscriber(this._state);
		}
		else if (action.type === 'UPDATE-NEW-POST-TEXT') {
			this._state.profilePage.newPostText = action.newText;
			this._callSubscriber(this._state);
		}
		else if (action.type === 'UPDATE-NEW-MESSAGE-BODY') {
			this._state.messagesPage.newMessageText = action.body;
			this._callSubscriber(this._state);
		}
		else if (action.type === 'SEND-MESSAGE') {
			let newBody = {
				id: 5,
				message: this._state.messagesPage.newMessageText,
			}
			this._state.messagesPage.messages.push(newBody);
			this._state.messagesPage.newMessageText = '';
			this._callSubscriber(this._state);
		}
	}

}
export const addPostActionCreator = ()=>{
	return {type: ADD_POST}
}
export const updateNewPostTextCreator=(text)=>{
	return{type:UPDATE_NEW_POST_TEXT, newText:text}
}
export const updateNewMessageBodyCreator = (messageText)=>{
	return{type:UPDATE_NEW_MESSAGE_BODY, body:messageText}
}
export const sendMessageCreator = ()=>{
	return {type: SEND_MESSAGE}
}
export default store;