import React from 'react';
import  axios from 'axios';
import styles from './Users.module.css'
import userPhoto from '../../assets/imeges/cat-siluet.png'

class Users extends React.Component{

	getUsers=()=> {
		if (this.props.users.length === 0){
			axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response =>{
			this.props.setUsers(response.data.items);
			});
		} 
	}
	render(){
		return (
			<div>
				<button className={styles.btnUsers} onClick={this.getUsers}>Get Users</button>
				{
					this.props.users.map(u => <div key={u.id}>
						<div className={styles.usersBlock}>
							<div>
								<div className={styles.photo}>
									<img src={u.photos.small !=null ? u.pgotos.small :userPhoto } />
								</div>
								<div>
									{u.followed ? 
									<button onClick={()=>{this.props.unfollow(u.id)}} className={styles.but}>Unfollow</button> 
									: <button onClick={()=>{this.props.follow(u.id)}} className={styles.but}>Follow</button>}
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
}
export default Users;