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
			]
		}

	},
	getState(){
		return this._state;
	},
	_callSubscriber() {
		console.log('state changed');
	},
	addPost() {
		let newPost = {
			id: 5,
			message: this._state.profilePage.newPostText,
			likecount: 0,
		}
		this._state.profilePage.posts.push(newPost);
		this._state.profilePage.newPostText = '';
		this._callSubscriber(this._state);
	},
	updateNewPostChange(newText) {
		this._state.profilePage.newPostText = newText;
		this._callSubscriber(this._state);
	},
	subscribe(observer) {
		this._callSubscriber = observer;
	}
}


export default store;