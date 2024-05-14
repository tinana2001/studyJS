import dialogReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
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


export default store;