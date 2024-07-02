import Preloader from '../common/preloader/Preloader';
import cc from './CompContent.module.css';
import ProfileStatus from './ProfileStatus';
import userPhoto from './../../assets/imeges/cat-siluet.png'

const Profile = (props) => {
	if (!props.profile) {
		return <Preloader />
	}
	return (
		<div className={cc.profile}>
			<div className={cc.ava}>
				{/* <img src="https://yt3.googleusercontent.com/W5PUOY6kOq-iZZsYGLztP8fG0s7CiCGrhC7TB_RgnrPiugdSOZVwlBaDgiGTq6rqOUepQk3O16U=s900-c-k-c0x00ffffff-no-rj"></img> */}
				<img src={props.profile.photos.large!=null? props.profile.photos.large:userPhoto} alt='' />
			</div>
			<div className={cc.inform}>
				<div className={cc.name}>
					<div>{props.profile.fullName}</div>
				</div>
				<ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
				<div className={cc.userInfo}>
					<div className={cc.information}>
						<div>User ID: {props.profile.userId}</div>
						<div>Описание: {props.profile.lookingForAJobDescription}</div>
						<div>Обо мне: {props.profile.aboutMe}</div>
						<div>Ищу ли сейчас работу:  {props.profile.lookingForAJob ? <span>Да</span> : <span>Нет</span>}</div>
					</div>
					<div className={cc.contacts}>
						<div>facebook: {props.profile.contacts.facebook}</div>
						<div>vk: {props.profile.contacts.vk}</div>
						<div>instagram: {props.profile.contacts.instagram}</div>
						<div>github: {props.profile.contacts.github}</div>
					</div>
				</div>
			</div>
		</div>
	);

}
export default Profile;
