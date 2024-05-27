import {combineReducers, legacy_createStore as createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";



let reducers=combineReducers({
	profilePage:profileReducer,
	messagesPage:dialogReducer,
	sideBarPage:sidebarReducer,
	usersPage:usersReducer,
}); //комбайним наши редьюсоры в одну кучу


let store = createStore(reducers);//отдаем store наши закомбайненные редьюсоры
export default store;

