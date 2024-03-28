import dialogReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';
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
		},
		sideBarPage:{}
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


		this._state.profilePage = profileReducer(this._state.profilePage, action);
		this._state.messagesPage = dialogReducer(this._state.messagesPage, action);
		this._state.sideBarPage = sidebarReducer(this._state.sideBarPage, action);
		this._callSubscriber(this._state);
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