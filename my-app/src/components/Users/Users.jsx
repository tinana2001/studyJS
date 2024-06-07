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
										// props.toggleFollowingProgress(true);
										axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
											withCredentials:true,
											headers: {
												"API-KEY": "0891ee94-7669-4d01-88c5-93668a375664"
											}
										}).then(response => {
											if (response.data.resultCode==0){
												props.unfollow(u.id); 
											}
											// props.toggleFollowingProgress(false);
										});
										

									}} className={styles.but}>Unfollow</button>
									: <button onClick={() => { 
										// props.toggleFollowingProgress(true);
										axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
											withCredentials:true,
											headers: {
												"API-KEY": "0891ee94-7669-4d01-88c5-93668a375664"
											}
										}).then(response => {
											if (response.data.resultCode==0){
												props.follow(u.id); 
											}
											// props.toggleFollowingProgress(false);
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