<template>
	<div class="reg-box">
		<h1 class="title">加入酒馆</h1>
		<van-form @submit="onSubmit" class="form">
			<van-cell-group inset>
				<van-field v-model="username" name="用户名" placeholder="用户名"
					:rules="[{ required: true, message: '请填写用户名' }]" />
				<van-field v-model="password" type="password" name="密码" placeholder="密码"
					:rules="[{ required: true, message: '请填写密码' }]" />
				<van-field v-model="phone" type="phone" name="手机号" placeholder="手机号"
					:rules="[{ required: true, message: '请填写手机号' }]" />
				<van-field name="radio" label="性别" :rules="[{ required: true, message: '请选择一种性别' }]">
					<template #input>
						<van-radio-group v-model="checked" direction="horizontal">
							<van-space size="2rem">
								<van-radio name="man">男</van-radio>
								<van-radio name="woman">女</van-radio>
							</van-space>
						</van-radio-group>
					</template>
				</van-field>
			</van-cell-group>
			<div style="margin: 16px;">
				<van-button round block type="default" native-type="submit">
					注册
				</van-button>
			</div>
		</van-form>

	</div>
</template>

<script setup>
import { ref } from "vue"
import {
	Button as vanButton,
	Form as vanForm,
	Field as vanField,
	CellGroup as vanCellGroup,
	Radio as vanRadio,
	RadioGroup as vanRadioGroup,
	Space as vanSpace
} from 'vant';
import user from "@/apis/user";

const username = ref('');
const password = ref('');
const phone = ref('');
const checked = ref('');
//注册
const onSubmit = (values) => {
	user.register({
		username: username.value, password: password.value, phone: phone.value, gender: checked.value
	}).then(() => {
		alert("成功")
	})
};
</script>

<style lang="less" scoped>
.reg-box {
	max-width: 400px;
	margin: 0 auto;
	width: 100vw;
	// margin-top: 20vh;

	.form {
		margin: 0 auto;
	}

	@keyframes size {
		0% {
			font-size: 50px;
			opacity: 0;
		}

		100% {
			opacity: 1;
			font-size: 30px;
		}
	}


	.title {
		animation: size .3s forwards;
		color: rgba(255, 255, 255, 0.666);
		margin-bottom: 40px;
		text-align: center;
	}

}
</style>