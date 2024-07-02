import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Input, TextArea } from '../common/FormsControls/FormsControls';
import { required } from '../../utils/validators/validators';

const LoginForm =(props)=>{
	return (
		<form onSubmit={props.handleSubmit}>
			<div><Field placeholder={"login"} name ={"login"} validate={[required]} component={TextArea} /></div>
			<div><Field placeholder={"password"} name="password" validate={[required]} component={TextArea}/></div>
			<div><Field type={"checkbox"} name={"rememberMe"} component={Input}/> remember me</div>
			<div><button>Login</button></div>
		</form>
	)
}
const LoginReduxForm =reduxForm({
	form: 'login' //уникальное имя формы
})(LoginForm)
const Login =(props)=>{
	const onSubmit=(formData)=>{
console.log(formData)
	}
	return <div>
		<h1>login</h1>
		<LoginReduxForm onSubmit={onSubmit}/>
	</div>
}

export default Login;