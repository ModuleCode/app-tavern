<template>
	<div>
		<v-button type="primary" @click="logout">退出登录</v-button>
	</div>
</template>

<script setup>
import { Button as VButton } from 'vant'
import { useRouter } from "vue-router";
// import menuApi from '@/apis/menu.js';
const router = useRouter()
const logout = () => {
	localStorage.removeItem("token")
	// router.go(0);
	router.replace({
		name: 'Login'
	})
}
</script>

<style lang="less" scoped>

</style>