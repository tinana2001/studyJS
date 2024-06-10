import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import {thunk} from "redux-thunk";


let reducers=combineReducers({
	profilePage:profileReducer,
	messagesPage:dialogReducer,
	sideBarPage:sidebarReducer,
	usersPage:usersReducer,
	auth: authReducer,
}); //комбайним наши редьюсоры в одну кучу


let store = createStore(reducers, applyMiddleware(thunk));//отдаем store наши закомбайненные редьюсоры
export default store;

