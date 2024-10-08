//будет снабжать нашу презентационную компаненту Users пропсами. 
import React from 'react';
import { connect } from 'react-redux';
import { follow, getUsers, setCurrentPage, toggleFollowingProgress, unfollow} from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../common/preloader/Preloader';
import {usersAPI } from '../../api/api';
import { compose } from 'redux';
import { authRedirect } from '../../hoc/authRedirect';

class UsersComponent extends React.Component{

	componentDidMount(){
		this.props.getUsers(this.props.currentPage, this.props.pageSize);
	}
	onPageChanged = (pageNumber) => {
		this.props.getUsers(pageNumber, this.props.pageSize);
		// this.props.setCurrentPage(pageNumber);
		// this.props.setIsFetching(true);
		// usersAPI.getUsers(pageNumber, this.props.pageSize)
		// .then(data => {
		// 		  this.props.setUsers(data.items);
		// 		  this.props.setIsFetching(false);
		// 	 });
	}
		
		render(){
			return <>
			{this.props.isFetching? <Preloader/> :null}
			<Users totalUsersCount={this.props.totalUsersCount}
								pageSize={this.props.pageSize}
								currentPage={this.props.currentPage}
								onPageChanged={this.onPageChanged}
								users={this.props.users}
								follow={this.props.follow}
								unfollow={this.props.unfollow}
                        followingInProgress={this.props.followingInProgress}
								/>
			</>
		}
	}

//ф-я которая принимает глобально весь state целиком и возвращает объект только с теми данными, к-е нам реально нужны
let mapStateToProps = (state) => {
	return {
		users: state.usersPage.users, //в пропсах теперь будет сидеть свойство users, значением которого будут пользователи из state
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		isFetching:state.usersPage.isFetching,
		followingInProgress: state.usersPage.followingInProgress,
	}
}
//служит для того, чтобы передавать дочерней презентационной компоненте callback'и
// let mapDispatchToProps=(dispatch)=>{
// 	return{
// 		//ф-я, которая будет диспатчить actionCreator
// 		follow:(userId)=>{
// 			dispatch(followActionCreator(userId));
// 		},
// 		unfollow:(userId)=>{
// 			dispatch(unfollowActionCreator(userId));
// 		},
// 		setUsers:(users)=>{
// 			dispatch(setUsersActionCreator(users))
// 		},
// 		setCurrentPage: (pageNumber) =>{
// 			dispatch(setCurrentPageActionCreator(pageNumber))
// 		},
// 		setTotalUsersCount: (totalCount) =>{
// 			dispatch(setUsersTotalCountActionCreator(totalCount))
// 		},
// 		setIsFetching: (isFetching) =>{
// 			dispatch(setIsFetchingActionCreator(isFetching))
// 		}
// 	}
// }



export default compose(
	//authRedirect,
	connect(mapStateToProps,
	{follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers })
)(UsersComponent)