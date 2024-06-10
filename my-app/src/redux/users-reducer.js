import { usersAPI } from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const IS_FETCHING = 'IS-FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS-PROGRESS';
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
	followingInProgress:[],
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
            return { ...state, totalUsersCount: action.count/50}
        }
		  case IS_FETCHING:{
			return {...state, isFetching: action.isFetching}
		  }
		  case TOGGLE_IS_FOLLOWING_PROGRESS: {
			return {
				 ...state,
				 followingInProgress: action.isFetching ? [...state.followingInProgress, action.userId]:state.followingInProgress.filter(id=>id!=action.userId)
			}
	  }

		default:
			return state;
	}

}

export const followSuccess = (userId) => {
	return { type: FOLLOW, userId }
}
export const unfollowSuccess = (userId) => {
	return { type: UNFOLLOW, userId }
}
export const setUsers = (users) => {
	return { type: SET_USERS, users }
}
export const setCurrentPage = (currentPage) => {
	return { type: SET_CURRENT_PAGE, currentPage }
}
export const setIsFetching = (isFetching) => {
	return { type: IS_FETCHING, isFetching }
}
export const toggleFollowingProgress = (isFetching,userId) => {
	return { type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId }
}
export const setUsersTotalCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount })

export const getUsers = (currentPage, pageSize) => {
	return (dispatch) => {
		dispatch(setIsFetching(true));
		usersAPI.getUsers(currentPage, pageSize)
			.then(data => {
				dispatch(setUsers(data.items));
				dispatch(setUsersTotalCount(data.totalCount));
				dispatch(setIsFetching(false));
			});
	}
}

export const follow = (userId) => {
	return (dispatch) => {
		dispatch(toggleFollowingProgress(true, userId));
										usersAPI.follow(userId)
										.then(response => {
											if (response.data.resultCode==0){
												dispatch(followSuccess(userId)); 
											}
											dispatch(toggleFollowingProgress(false, userId));
										});
	}
}
export const unfollow = (userId) => {
	return (dispatch) => {
		dispatch(toggleFollowingProgress(true, userId));
										usersAPI.unfollow(userId)
										.then(response => {
											if (response.data.resultCode==0){
												dispatch(unfollowSuccess(userId)); 
											}
											dispatch(toggleFollowingProgress(false, userId));
										});
	}
}



export default usersReducer;