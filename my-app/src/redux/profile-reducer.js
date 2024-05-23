const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
let initialState={
	posts: [
		{ id: 1, message: 'Сегодня стащил со стола креветки. Доволен', likecount: 5 },
		{ id: 2, message: 'Всем привет! Теперь и я тут!', likecount: 2 },
		{ id: 3, message: 'Добавляйтесь в друзья', likecount: 1 }
	],
	newPostText: 'TextText',
}
const profileReducer =(state=initialState, action)=>{
	switch (action.type){
	case ADD_POST: {
		let newPost = {
			id: 5,
			message: state.newPostText,
			likecount: 0,
		};
		return {...state, 
			newPostText :'',
			posts : [...state.posts, newPost],
		};
	}
	case UPDATE_NEW_POST_TEXT: {
		return {...state,
			newPostText : action.newText,
		};
	}
	default:
		return state;
	}

}

export const addPostActionCreator = ()=>{
	return {type: ADD_POST}
}
export const updateNewPostTextCreator=(text)=>{
	return{type:UPDATE_NEW_POST_TEXT, newText:text}
}


export default profileReducer;