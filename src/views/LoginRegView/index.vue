<template>
	<div :class="{ 'reg-view': nowTab == 0, 'login-view': nowTab == 1 }" class="bg">
		<nav>

			<span :class="{ 'nowTab': nowTab == tab.id }" @click="tabChange(tab)" v-for="tab in tabs">
				{{ tab.text }}
			</span>
			<!-- <span>|</span><span @click="tabChange(1)">登录</span> -->
			<!-- <router-link to="/reg">注册</router-link> |
			<router-link to="/login">登录</router-link> -->
		</nav>
		<router-view />
	</div>
</template>

<script setup>
import { ref, watch } from "vue"
import { useRoute, useRouter } from "vue-router";
const tabs = [
	{
		id: 0,
		name: 'Reg',
		text: '注册'
	},
	{
		text: '|'
	},
	{
		id: 1,
		name: 'Login',
		text: '登录'
	}
]
//0 注册 1 登录
const nowTab = ref(1);
const router = useRouter();

const route = useRoute();
watch(route, (newValue, oldValue) => {
	tabs.forEach(tab => {
		if (tab.name && tab.name == newValue.name) {
			nowTab.value = tab.id
		}
	})
})


const tabChange = (tab) => {
	if (tab.id != undefined && tab.id != nowTab.value) {
		window.navigator.vibrate([80])
		nowTab.value = tab.id;
		router.push({
			name: tab.name
		})
	}
}
</script>

<style lang="less" scoped>
@keyframes size {
	0% {
		font-size: 10px;
	}

	100% {
		font-size: 22px;
	}
}

@keyframes opacity {
	0% {
		opacity: 0;
	}

	100% {
		opacity: 1;
	}
}

.bg {
	transition: .2s;
	height: 100vh;

	.nowTab {
		font-size: 22px;
		color: rgba(251, 251, 251, 0.993);
		animation: opacity .2s forwards;
	}

	span {
		cursor: pointer;
		font-weight: bold;
		font-size: 18px;
		margin: 0 6px;
		user-select: none;
		-moz-user-select: none;
		-webkit-user-select: none;
	}
}

.reg-view {
	animation: bgLoopInReg 2s forwards alternate infinite;
	background-color: rgba(129, 217, 182, 0.735);
}


@keyframes bgLoopInReg {
	0% {

		background-color: rgba(66, 146, 114, 0.735);
	}

	50% {
		background-color: rgba(4, 55, 35, 0.441);
	}

	100% {
		background-color: rgba(33, 101, 74, 0.735);

	}
}

.login-view {
	background-color: rgba(99, 148, 131, 0.542);
	// animation: bgLoopInLogin 2s forwards alternate infinite;
}
</style>