import http from "@/utils/http.js";
//在线人数
function online() {
	return http.request({
		url: "/menus/online",
		method: 'get',
	});
}

//设置用户状态
function onlineStatus(params) {
	return http.request({
		url: '/menus/onlineStatus',
		method: 'post',
		params

	})
	// return http.post('/menus/onlineStatus', {
	// 	status
	// })
}
//顶部提示信息



export default {
	online, onlineStatus
}