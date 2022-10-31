<template>
	<div class="login-box">
		<h1 class="title">小酒馆</h1>
		<van-form @submit="onSubmit" class="form">
			<van-cell-group inset>
				<van-field v-model="username" name="用户名" placeholder="用户名"
					:rules="[{ required: true, message: '请填写用户名' }]" />
				<van-field v-model="password" type="password" name="密码" placeholder="密码"
					:rules="[{ required: true, message: '请填写密码' }]" />
			</van-cell-group>
			<div style="margin: 16px;">
				<van-button round block type="primary" native-type="submit">
					登录
				</van-button>
			</div>
		</van-form>
	</div>
</template>

<script setup>
import { ref } from "vue"
import { Button as vanButton, Form as vanForm, Field as vanField, CellGroup as vanCellGroup } from 'vant';
import user from "@/apis/user";
import { useRouter } from "vue-router";
const router = useRouter();
const username = ref('');
const password = ref('');
//登录
const onSubmit = () => {
	//发送登录请求
	user.login(username.value, password.value).then(result => {
		localStorage.setItem('token', result.data);
		router.push({
			name: 'HomeMine'
		})

		// console.log("登录成功");
	});

};
</script>

<style lang="less" scoped>
.login-box {
	max-width: 400px;
	margin: 0 auto;
	width: 100vw;
	// margin-top: 20vh;

	.form {
		margin: 0 auto;
	}

	.title {
		color: rgba(255, 255, 255, 0.666);
		margin-bottom: 40px;
		text-align: center;
	}

}
</style>