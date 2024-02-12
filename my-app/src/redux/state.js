let state ={
	profilePage:{
		posts:[
			{id: 1, message:'Сегодня стащил со стола креветки. Доволен', likecount:5},
			{id:2, message:'Всем привет! Теперь и я тут!', likecount:2},
			{id:3, message:'Добавляйтесь в друзья', likecount:1}
		],
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
export default state;