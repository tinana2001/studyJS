import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { getAuthUserData, setAuthUserData } from '../../redux/auth-reducer';
import {authAPI, usersAPI } from '../../api/api';
import axios from 'axios';

class HeaderContainer extends React.Component {
	
	componentDidMount(){
		this.props.getAuthUserData()
	}
	render(){
	return (
		<Header {...this.props}/>
	);
	}
}

const mapStateToProps=(state)=>{
return {
isAuth: state.auth.isAuth,
login: state.auth.login
}
}
export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer);
	