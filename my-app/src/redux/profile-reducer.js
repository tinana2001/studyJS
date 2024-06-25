import { profileAPI, usersAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';
let initialState={
	posts: [
		{ id: 1, message: 'Почти самурай', likecount: 5 },
		{ id: 2, message: 'Всем привет! Теперь и я тут!', likecount: 2 },
		{ id: 3, message: 'Добавляйтесь в друзья', likecount: 1 }
	],
	newPostText: 'TextText',
	profile:null,
	status:"",
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
	case SET_USER_PROFILE: {
		return {...state, profile: action.profile}
  }
  case SET_STATUS: {
	return {...state, status: action.status}
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
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const getUserProfile = (userId) => (dispatch)=>{
		usersAPI.getProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response.data));
            });
}
export const getStatus = (userId) => (dispatch)=>{
	profileAPI.getStatus(userId)
			.then(response => {
				 dispatch(setStatus(response.data));
			});
}
export const updateStatus = (status) => (dispatch)=>{
	profileAPI.updateStatus(status)
			.then(response => {
				if(response.data.resultCode===0){
				 dispatch(setStatus(status));
				}
			});
}
export default profileReducer;