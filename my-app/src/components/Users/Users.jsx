import React from 'react';
import styles from './Users.module.css'
import userPhoto from '../../assets/imeges/cat-siluet.png'
import { NavLink } from 'react-router-dom';
import  axios from 'axios';
import { usersAPI } from '../../api/api';
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
									<button disabled={props.followingInProgress.some(id=> id===u.id)} onClick={() => { 
										props.unfollow(u.id);
									}} className={styles.but}>Unfollow</button>
									: <button disabled={props.followingInProgress.some(id=> id===u.id)} onClick={() => { 
										props.follow(u.id);
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