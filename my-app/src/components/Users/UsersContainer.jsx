//будет снабжать нашу презентационную компаненту Users пропсами. 
import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import { followActionCreator, setUsersActionCreator, unfollowActionCreator } from '../../redux/users-reducer';

//ф-я которая принимает глобально весб state целиком и возвращает объект только с теми данными, к-е нам реально нужны
let mapStateToProps = (state) => {
	return {
		users: state.usersPage.users //в пропсах теперь будет сидеть свойство users, значением которого будут пользователи из state
	}
}
//служит для того, чтобы передавать дочерней презентационной компоненте callback'и
let mapDispatchToProps=(dispatch)=>{
	return{
		//ф-я, которая будет диспатчить actionCreator
		follow:(userId)=>{
			dispatch(followActionCreator(userId));
		},
		unfollow:(userId)=>{
			dispatch(unfollowActionCreator(userId));
		},
		setUsers:(users)=>{
			dispatch(setUsersActionCreator(users))
		}
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Users);