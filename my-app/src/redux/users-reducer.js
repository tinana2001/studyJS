
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
let initialState={
	users: [
		{ id: 1, photoUrl: 'https://w-dog.ru/wallpapers/5/15/522031677054413/kotejka-mordochka-vzglyad.jpg',followed: true, fullName: 'Мистер кот', status: 'Если ты волк, то ты не кот', location: {city: 'Уфа', country:'Россия'} },
		{ id: 2,photoUrl: 'https://w-dog.ru/wallpapers/5/15/522031677054413/kotejka-mordochka-vzglyad.jpg',followed: true, fullName: 'Котофей', status: 'Быть котом восхитительно ', location: {city: 'Казань', country:'Россия'}},
		{ id: 3,photoUrl: 'https://w-dog.ru/wallpapers/5/15/522031677054413/kotejka-mordochka-vzglyad.jpg',followed: false, fullName: 'Кот Тимофеевич', status: 'Мяу' , location: {city: 'Хошимин', country:'Вьетнам'}}
	],
}
const usersReducer =(state=initialState, action)=>{
	switch (action.type){
	case FOLLOW:
		return {
			...state,//копия всего state
			users:state.users.map( u =>{ 
				if (u.id===action.userId)//если id пробигаемого юзера равен id, к-го надо зафолловить
				{
					return {...u, followed:true} //то возвращаем копию 
				}
				return u; //если не совпадает, то возвращаем изначального изера
			}
			)
		}
	case UNFOLLOW:
		return {
			...state,//копия всего state
			users:state.users.map( u =>{ 
				if (u.id===action.userId)//если id пробигаемого юзера равен id, к-го надо зафолловить
				{
					return {...u, followed:false} //то возвращаем копию 
				}
				return u; //если не совпадает, то возвращаем изначального изера
			}
			)
		}
		case SET_USERS:
			return{
				...state,
				users: [...state.users, ...action.users] //берем из state наших юзеров и добавляем новых юзеров из action. По факту склеиваю два массива 
			}
	default:
		return state;
	}

}

export const followActionCreator = (userId)=>{
	return {type: FOLLOW, userId}
}
export const unfollowActionCreator = (userId)=>{
	return {type: UNFOLLOW, userId}
}
export const setUsersActionCreator=(users)=>{
	return{type:SET_USERS, users}
}


export default usersReducer;