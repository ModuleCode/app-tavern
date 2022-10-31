import http from "@/utils/http.js";

function login(username, password) {
	return http.request({
		url: "/user/login",
		method: 'post',
		params: {
			username,
			password
		}
	});
}
//注册
function register(data) {
	return http.request({
		url: "/user/reg",
		method: 'post',
		data
	});
}

export default {
	login, register
}