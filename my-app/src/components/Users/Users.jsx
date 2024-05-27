import React from 'react';
import styles from './Users.module.css'
const Users = (props) => {
	// props.setUsers(
	// 	[
	// 	{ id: 1, photoUrl: 'https://w-dog.ru/wallpapers/5/15/522031677054413/kotejka-mordochka-vzglyad.jpg',followed: true, fullName: 'Мистер кот', status: 'Если ты волк, то ты не кот', location: {city: 'Уфа', country:'Россия'} },
	// 	{ id: 2,photoUrl: 'https://w-dog.ru/wallpapers/5/15/522031677054413/kotejka-mordochka-vzglyad.jpg',followed: true, fullName: 'Котофей', status: 'Быть котом восхитительно ', location: {city: 'Казань', country:'Россия'}},
	// 	{ id: 3,photoUrl: 'https://w-dog.ru/wallpapers/5/15/522031677054413/kotejka-mordochka-vzglyad.jpg',followed: false, fullName: 'Кот Тимофеевич', status: 'Мяу' , location: {city: 'Хошимин', country:'Вьетнам'}}
	// 	]
	// )
	return (
		<div>
			{
				props.users.map(u => <div key={u.id}>
					<div className={styles.usersBlock}>
						<div>
							<div className={styles.photo}>
								<img src={u.photoUrl} />
							</div>
							<div>
								{u.followed ? 
								<button onClick={()=>{props.unfollow(u.id)}} className={styles.but}>Unfollow</button> 
								: <button onClick={()=>{props.follow(u.id)}} className={styles.but}>Follow</button>}
								</div>
						</div>
						<div className={styles.nameAndLocation}>
							<div>
								<div className={styles.fullName}>{u.fullName}</div>
								<div className={styles.status}>{u.status}</div>
							</div>
							<div className={styles.location}>
								<div>{u.location.country}</div>
								<div>{u.location.city}</div>
							</div>
						</div>
					</div>
				</div>)
			}
		</div>
	)
}
export default Users;