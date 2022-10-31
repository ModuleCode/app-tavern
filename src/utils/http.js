import router from '@/router';
import axios from 'axios'
import { Toast } from 'vant';

const http = axios.create({
	baseURL: 'http://192.168.2.178:8080/',
	timeout: 2000,
})
// 添加请求拦截器
http.interceptors.request.use(function (config) {
	config.headers.token = localStorage.getItem('token');
	// 在发送请求之前做些什么
	return config;
}, function (error) {
	// 对请求错误做些什么
	return Promise.reject(error);
});

// 添加响应拦截器
http.interceptors.response.use(function (response) {
	// 2xx 范围内的状态码都会触发该函数。
	// 对响应数据做点什么
	let { code, message } = response.data;
	if (code != 200) {
		if (message) Toast.fail({
			message,
			duration: 800
		})

		if (response.data.code == 1004) {
			localStorage.removeItem("token")
			router.push({ path: '/loginReg' })
		}
		return Promise.reject(response.data);
	}
	return response.data;
});
export default http
