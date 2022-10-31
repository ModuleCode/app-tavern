<template>
	<div class="home">
		<div class="box">
			<router-view />
		</div>
		<tabbar v-model="active" @change="onChange()">
			<tabbar-item :key="tabbarItem.id" v-for="tabbarItem in tabbarItems" :icon="tabbarItem.icon">
				{{ tabbarItem.text }}
			</tabbar-item>
		</tabbar>
	</div>
</template>  

<script setup>
import { Tabbar, TabbarItem } from 'vant';
import { onMounted, ref, watch, onUnmounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { homeMenuStore } from '@/store'
//导航数据
const menuStore = homeMenuStore();
const tabbarItems = menuStore.tabbarItems;
const router = useRouter();
const route = useRoute();
const active = ref(0);

//反向监听
const revMonitor = (name) => {
	tabbarItems.forEach(tab => {
		if (tab.name == name) {
			active.value = tab.id
		}
	})
}
//监听路由变化
watch(route, (newValue, oldValue) => {
	//双向监听
	revMonitor(newValue.name);
})
//挂载时触发
onMounted(() => {
	//双向监听
	revMonitor(route.name);
})
//菜单item按下时
const onChange = () => {
	const name = tabbarItems[active.value].name;
	window.navigator.vibrate([80])
	router.replace({ name })
}


// //websocket区域
// const token = localStorage.getItem('token');

// const client = createWebSocket('ws://192.168.2.178:8080/server/' + token);
// // sendMessage(client, {
// // 	code: Code.ONLINE_PEOPLE
// // })
// onMounted(() => {
// 	// console.log(client);
// 	console.log('onMounted');
// })
// onUnmounted(() => {
// 	console.log('onUnmounted');
// 	// client.close()
// })
// //在线人数获取
// addCodeListener(Code.ONLINE_PEOPLE, (data) => {
// 	menuStore.online = data;
// })
// // localStorage.clear()
// addCodeListener(Code.USER_LOGIN_USER_NOT_LOGIN, (data) => {
// 	localStorage.removeItem('token');
// 	router.replace({
// 		name: "Login"
// 	})
// })

</script>

<style lang="less" scoped>
.box {
	overflow-y: auto;

	height: calc(100vh - 50px);
}
</style>