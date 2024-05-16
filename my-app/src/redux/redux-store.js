import {combineReducers, legacy_createStore as createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";



let reducers=combineReducers({
	profilePage:profileReducer,
	messagesPage:dialogReducer,
	sideBarPage:sidebarReducer
}); //комбайним наши редьюсоры в одну кучу


let store = createStore(reducers);//отдаем store наши закомбайненные редьюсоры
export default store;

