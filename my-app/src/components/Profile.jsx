import cc from './CompContent.module.css';
const Profile = () => {
	return(
<div className={cc.profile}>
		<div className={cc.ava}>
		<img src="https://yt3.googleusercontent.com/W5PUOY6kOq-iZZsYGLztP8fG0s7CiCGrhC7TB_RgnrPiugdSOZVwlBaDgiGTq6rqOUepQk3O16U=s900-c-k-c0x00ffffff-no-rj"></img>
		</div>
		<div className={cc.inform}>
			<div className={cc.name}>
				Котик
			</div>
			<div className={cc.information}>
			<div>Любимое лакомство: Креветки</div>
			<div>Образование: Высшая школа котиков</div>
			<div>Город:Уфа</div>
			</div>
		</div>
		</div>
	);
	
	}
	export default Profile;
	