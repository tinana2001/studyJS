//будет снабжать нашу презентационную компаненту Users пропсами. 
import React from 'react';
import { connect } from 'react-redux';
import { followActionCreator, setCurrentPageActionCreator, setUsersActionCreator, setUsersTotalCountActionCreator, unfollowActionCreator } from '../../redux/users-reducer';
import  axios from 'axios';
import Users from './Users';

class UsersComponent extends React.Component{

	componentDidMount(){
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=$(this.props.pageSize`).then(response =>{
			this.props.setUsers(response.data.items);
			this.props.setTotalUsersCount(response.data.totalCount);
			});
	}
	onPageChanged = (pageNumber) => {
		this.props.setCurrentPage(pageNumber);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
			 .then(response => {
				  this.props.setUsers(response.data.items);
			 });
	}
		
		render(){
			return <Users totalUsersCount={this.props.totalUsersCount}
								pageSize={this.props.pageSize}
								currentPage={this.props.currentPage}
								onPageChanged={this.onPageChanged}
								users={this.props.users}
								follow={this.props.follow}
								unfollow={this.props.unfollow}/>
		}
	}

//ф-я которая принимает глобально весь state целиком и возвращает объект только с теми данными, к-е нам реально нужны
let mapStateToProps = (state) => {
	return {
		users: state.usersPage.users, //в пропсах теперь будет сидеть свойство users, значением которого будут пользователи из state
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage
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
		},
		setCurrentPage: (pageNumber) =>{
			dispatch(setCurrentPageActionCreator(pageNumber))
		},
		setTotalUsersCount: (totalCount) =>{
			dispatch(setUsersTotalCountActionCreator(totalCount))
		}
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(UsersComponent);