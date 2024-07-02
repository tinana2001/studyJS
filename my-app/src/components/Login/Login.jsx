import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Input, TextArea } from '../common/FormsControls/FormsControls';
import { required } from '../../utils/validators/validators';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { login } from '../../redux/auth-reducer';

const LoginForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div><Field placeholder={"email"} name={"email"} validate={[required]} component={Input} /></div>
			<div><Field placeholder={"password"} name="password" type="password" validate={[required]} component={Input} /></div>
			<div><Field type={"checkbox"} name={"rememberMe"} component={Input} /> remember me</div>
			<div><button>Login</button></div>
		</form>
	)
}
const LoginReduxForm = reduxForm({
	form: 'login' //уникальное имя формы
})(LoginForm)

const Login = (props) => {
	const onSubmit = (formData) => {
		debugger
		props.login(formData.email, formData.password, formData.rememberMe)
	}
	if (props.isAuth){
		return  <Navigate replace to="/CompContent" />;
	}
	return <div>
		<h1>login</h1>
		<LoginReduxForm onSubmit={onSubmit} />
	</div>
}
const mapStateToProps =(state)=>({
	isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login} )(Login);