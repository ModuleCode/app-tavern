import http from "@/utils/http.js";

//获取资源文件
function resources(res) {
	return http.request({
		url: "/resources/get",
		method: 'post',
		params: {
			res
		}
	});
}
//获取匹配时的音乐
function getMatchingBGM() {
	return http.request({
		url: "/resources/randomMusic",
		method: 'post',
	});
}
export default {
	resources,
	getMatchingBGM
}