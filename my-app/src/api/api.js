import axios from "axios";
import { unfollow } from "../redux/users-reducer";
const instance= axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: {
		"API-KEY": "0891ee94-7669-4d01-88c5-93668a375664"
	}
})
export const usersAPI={
	getUsers(currentPage, pageSize) {
		return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
	},

	getAuth () {
		return instance.get(`auth/me`).then(response => response.data);
	},

	follow(userId){
		return instance.post(`follow/${userId}`)
	},
	unfollow(userId){
		 return instance.delete(`follow/${userId}`)
	},
	getProfile(userId){
		console.warn('obsolete method. Please use profileAPI object');
		return profileAPI.getProfile(userId);
	},
	
}

export const profileAPI={
	getProfile(userId){
		return instance.get(`profile/`+userId);
	},
	getStatus(userId){
		return instance.get(`profile/status/`+userId);
	},
	updateStatus(status){
		return instance.put(`profile/status`, {
			status: status
		});
	}
}

export const authAPI={
	me(){
		return instance.get(`auth/me`);
	}
}


// export const unfollow = (id) => {

// 	return instance.delete(`follow/${id}`).then(response => response.data);
// }