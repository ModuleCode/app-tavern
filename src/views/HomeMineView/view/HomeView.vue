<template>
	<div class="home-view-box">
		<!-- 1.公告和在线人数区 -->
		<van-notice-bar left-icon="volume-o" :scrollable="false" background="#ecf9ff" @replay="onReplay">
			<van-swipe vertical class="notice-swipe" :autoplay="2300" :touchable="false" :show-indicators="false">
				<van-swipe-item v-for=" swipeItem in swipeItems">{{ swipeItem.text }}</van-swipe-item>
			</van-swipe>
		</van-notice-bar>
		<!-- 在线人数 -->
		<van-divider class="top-fiexd" dashed>当前在线人数:{{ menuStore.online }}</van-divider>

		<!-- 2.菜单区 -->
		<div class="box" v-for="(menuItem, index) in menuDatas" :key="menuItem.id"
			:style="{ 'WebkitAnimationDelay': (index * 0.06) + 's' }">
			<!-- 模板1 -->
			<div class="region" v-if="menuItem.childMenu == undefined">
				<div class="auto margin10">
					<menu-item @click="onClick(menuItem)" :background="menuItem.background" :delay-time="index * 0.06"
						:time="menuItem.time" :text="menuItem.text" :hot="menuItem.hot">
					</menu-item>
				</div>
			</div>

			<!-- 模板2 -->
			<div class="region" v-else>
				<div class="auto margin10" v-for="childItem in menuItem.childMenu">
					<menu-item @click="onClick(childItem)" :background="childItem.background" :delay-time="index * 0.06"
						:text="childItem.text" :time="childItem.time" :show-tip="childItem.showTip"
						:hot="childItem.hot" />
				</div>

			</div>
		</div>
	</div>
</template>

<script setup>

import { NoticeBar as vanNoticeBar, Swipe as vanSwipe, SwipeItem as vanSwipeItem, Divider as vanDivider } from 'vant';
import MenuItem from "@/components/MenuItem.vue";
import { computed, onMounted, reactive, ref } from "vue"
import { homeMenuStore } from '@/store'
import { useRouter } from 'vue-router';
import menu from '@/apis/menu';
//路由
const router = useRouter();
//当前公告下标
const nowSwipe = ref(0);
//公告数据
const swipeItems = reactive([
	{
		id: 0,
		text: '明月直入，无心可猜。',
		time: 0,
		maxTime: 4
	},
	{
		id: 1,
		text: '仙人抚我顶，结发受长生。',
		time: 0,
		maxTime: 4
	},
	{
		id: 2,
		text: '今人不见古时月，今月曾经照古人。',
		time: 0,
		maxTime: 4
	},
])
//公告滚动事件
const onReplay = (obj) => {
	swipeItems[nowSwipe.value % swipeItems.length].time++;
	const swipeObj = swipeItems[nowSwipe.value % swipeItems.length];
	if (swipeObj.time >= swipeObj.maxTime) {
		console.log("大佬");
	}
	nowSwipe.value++;
}
//-----------------------------------------------
const menuStore = homeMenuStore();

onMounted(() => {
	// 当前在线人数
	menu.online().then((result) => {
		menuStore.online = result.data
		console.log(result.data);
	})
})

setInterval(() => {
	// 当前在线人数
	menu.online().then((result) => {
		menuStore.online = result.data
	})
}, 3000);

//-----------------------------------------------
//Menu 菜单数据
const menuDatas = menuStore.menus;

//排序
menuDatas.sort((a, b) => {
	return a.id - b.id;
});
menuDatas.forEach(item => {
	if (item.childMenu) {
		item.childMenu.sort((a, b) => {
			return a.id - b.id;
		})
	}
})


//按下时跳转的地址
const onClick = (menuItem) => {
	router.push({
		name: menuItem.hrefName,
		query: {
			title: menuItem.text,
			matchingType: menuItem.matchingType,
		},
	})
	//手机端震动处理
	window.navigator.vibrate([130])
}
</script>

<style lang="less" scoped>
@keyframes opacity {
	0% {
		opacity: 0;
	}

	100% {
		opacity: 100;
	}
}

@keyframes move {
	0% {
		opacity: 0;
		position: absolute;
		left: -1000px;
	}

	100% {
		opacity: 1;
		display: flex;
		position: relative;
		left: 0px;
	}
}

.top-fiexd {
	position: sticky;
	top: 0;
	z-index: 10;

}

.notice-swipe {
	animation: opacity 1s;
	height: 40px;
	line-height: 40px;

}

.home-view-box {
	width: 100%;
	min-height: calc(100vh - 50px);
	// height: max-content;
	// transition: .2s;
	background-color: rgb(63, 63, 63);
	display: flex;
	flex-direction: column;

	.box {
		opacity: 0;
		animation: move .4s;
		animation-fill-mode: forwards;
		// display: none;

		.region {
			width: 100%;
			height: max-content;
			display: flex;

			.left {
				width: 150px;

			}

			.margin10 {
				margin: 10px;
			}

			.auto {
				flex: 1;
			}
		}
	}




}
</style>