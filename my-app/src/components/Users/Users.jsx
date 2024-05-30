import React from 'react';
import  axios from 'axios';
import styles from './Users.module.css'
import userPhoto from '../../assets/imeges/cat-siluet.png'

class Users extends React.Component{

componentDidMount(){
	axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=$(this.props.pageSize`).then(response =>{
		this.props.setUsers(response.data.items);
		this.props.setTotalUsersCount(response.data.totalCount);
		});
}
onPageChanged = (pageNumber) => {
	this.props.setCurrentPage(pageNumber);
	axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
		 .then(response => {
			  this.props.setUsers(response.data.items);
		 });
}
	
	render(){

		let pagesCount = Math.ceil (this.props.totalUsersCount/this.props.pageSize);
		let pages =[];
		// for (let i=1;i<=pagesCount;i++){
		// 	pages.push(i);
		// }
		for (let i=1;i<=20;i++){
			debugger
			pages.push(i);
		}
		return (
			<div>
				<div> 
					{pages.map(p=>{
						return <button className={this.props.currentPage === p && styles.selectedPage}
						onClick={(e)=> {this.onPageChanged(p);}}>{p}</button>
					})}
				</div>
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