import axios from "axios";
const instance= axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: {
		"API-KEY": "78c8582e-29ac-45a3-a01a-ce1cc11e8fe9"
	}
})
export const usersAPI={
	getUsers(currentPage, pageSize) {
		return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
	},

	getAuth () {
		return instance.get(`auth/me`).then(response => response.data);
	}

}


// export const unfollow = (id) => {

// 	return instance.delete(`follow/${id}`).then(response => response.data);
// }