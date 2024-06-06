import React from 'react';
import styles from './Users.module.css'
import userPhoto from '../../assets/imeges/cat-siluet.png'
import { NavLink } from 'react-router-dom';
import  axios from 'axios';

let Users = (props) => {
	let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
	let pages = [];
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i);
	}
	return (
		<div>
			<div>
				{pages.map(p => {
					return <button className={props.currentPage === p && styles.selectedPage}
						onClick={(e) => {props.onPageChanged(p); }}>{p}</button>
				})}
			</div>
			{
				props.users.map(u => <div key={u.id}>
					<div className={styles.usersBlock}>
						<div>
							
							<div className={styles.photo}>
							<NavLink to={'/CompContent/'+u.id}>
								<img src={u.photos.small != null ? u.photos.small : userPhoto} />
								</NavLink>
							</div>
							
							<div>
								{u.followed ?
									<button onClick={() => { 
										axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
											withCredentials:true,
											headers: {
												"API-KEY": "78c8582e-29ac-45a3-a01a-ce1cc11e8fe9"
											}
										}).then(response => {
											if (response.data.resultCode==0){
												props.unfollow(u.id); 
											}
										});
										

									}} className={styles.but}>Unfollow</button>
									: <button onClick={() => { 
										axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
											withCredentials:true,
											headers: {
												"API-KEY": "78c8582e-29ac-45a3-a01a-ce1cc11e8fe9"
											}
										}).then(response => {
											if (response.data.resultCode==0){
												props.follow(u.id); 
											}
										});
										
										
										}} className={styles.but}>Follow</button>}
							</div>
						</div>
						<div className={styles.nameAndLocation}>
							<div>
								<div className={styles.fullName}>{u.name}</div>
								<div className={styles.status}>{u.status}</div>
							</div>
							<div className={styles.location}>
								<div>{'u.location.country'}</div>
								<div>{'u.location.city'}</div>
							</div>
						</div>
					</div>
				</div>)
			}
		</div>
	)
}

export default Users;