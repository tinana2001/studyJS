import {renderEntireTree} from "../render";
let state ={
	profilePage:{
		posts:[
			{id: 1, message:'Сегодня стащил со стола креветки. Доволен', likecount:5},
			{id:2, message:'Всем привет! Теперь и я тут!', likecount:2},
			{id:3, message:'Добавляйтесь в друзья', likecount:1}
		],
		newPostText:'TextText',
	},
	messagesPage:{
		dialogs:[
			{id:1, name:'Эльф'},
			{id:2, name:'Барсик'},
			{id:3, name:'Чуча'},
			{id:4, name:'Черныш'}
		 ],
		messages:[
			{id:1, message:'Мяу'},
			{id:2, message:'Жду тебя на кухне'},
			{id:3, message:'Как твои дела?'}
		 ]
	}
 	
 }


 export let addPost = () => {
	let newPost={
		id:5,
		message:state.profilePage.newPostText,
		likecount:0,
	}
state.profilePage.posts.push(newPost);
state.profilePage.newPostText='';
renderEntireTree(state);
 }

 export let updateNewPostChange = (newText) => {
state.profilePage.newPostText=newText;
renderEntireTree(state);
 }

export default state;