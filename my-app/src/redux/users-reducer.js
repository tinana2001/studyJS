
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const IS_FETCHING = 'IS-FETCHING';

let initialState = {
	users: [
		// { id: 1, photoUrl: 'https://w-dog.ru/wallpapers/5/15/522031677054413/kotejka-mordochka-vzglyad.jpg',followed: true, fullName: 'Мистер кот', status: 'Если ты волк, то ты не кот', location: {city: 'Уфа', country:'Россия'} },
		// { id: 2,photoUrl: 'https://w-dog.ru/wallpapers/5/15/522031677054413/kotejka-mordochka-vzglyad.jpg',followed: true, fullName: 'Котофей', status: 'Быть котом восхитительно ', location: {city: 'Казань', country:'Россия'}},
		// { id: 3,photoUrl: 'https://w-dog.ru/wallpapers/5/15/522031677054413/kotejka-mordochka-vzglyad.jpg',followed: false, fullName: 'Кот Тимофеевич', status: 'Мяу' , location: {city: 'Хошимин', country:'Вьетнам'}}
	],
	pageSize: 10,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching:false,
}
const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case FOLLOW:
			return {
				...state,//копия всего state
				users: state.users.map(u => {
					if (u.id === action.userId)//если id пробигаемого юзера равен id, к-го надо зафолловить
					{
						return { ...u, followed: true } //то возвращаем копию 
					}
					return u; //если не совпадает, то возвращаем изначального изера
				}
				)
			}
		case UNFOLLOW:
			return {
				...state,//копия всего state
				users: state.users.map(u => {
					if (u.id === action.userId)//если id пробигаемого юзера равен id, к-го надо зафолловить
					{
						return { ...u, followed: false } //то возвращаем копию 
					}
					return u; //если не совпадает, то возвращаем изначального изера
				}
				)
			}
		case SET_USERS:
			return { ...state, users: action.users }
			case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return { ...state, totalUsersCount: action.count/100}
        }
		  case IS_FETCHING:{
			return {...state, isFetching: action.isFetching}
		  }
		default:
			return state;
	}

}

export const followActionCreator = (userId) => {
	return { type: FOLLOW, userId }
}
export const unfollowActionCreator = (userId) => {
	return { type: UNFOLLOW, userId }
}
export const setUsersActionCreator = (users) => {
	return { type: SET_USERS, users }
}
export const setCurrentPageActionCreator = (currentPage) => {
	return { type: SET_CURRENT_PAGE, currentPage }
}
export const setIsFetchingActionCreator = (isFetching) => {
	return { type: IS_FETCHING, isFetching }
}
export const setUsersTotalCountActionCreator = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount })
export default usersReducer;