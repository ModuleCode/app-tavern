<template>
	<nav-bar left-text="返回" fixed left-arrow :title="title" :border="false" @click-left="OnClickReturn"></nav-bar>
	<div class="maching-box">
		<!-- 可修改文案和加载图标的颜色 -->
		<!-- <video ref="video" src="http://192.168.2.178:8080/dhs/dh1.mp4" autoplay loop
			style="width: 80vw; max-width: 300px ;opacity: 0.1; position: fixed;"></video> -->
		<div class="loading-img" v-for="(item, index) in '正在匹配中' "
			:style="{ 'WebkitAnimationDelay': index * 1 * 0.2 + 's' }">
			{{ item }}
		</div>
		<audio ref="bgm" autoplay loop :src="mp3url"></audio>
		<!-- <p>正在匹配</p> -->
	</div>
</template>

<script setup>
import { computed, onMounted, ref, watch } from "vue"
import { NavBar, Loading } from 'vant'
import { useRoute, useRouter } from "vue-router";
import resourcesApi from '@/apis/resources.js';
//http://m10.music.126.net/20221028070002/3544601c9f9dccf16dcde1f3ef3ab32c/ymusic/1bbd/c107/fc41/b582a05fdc0c27221eae61a19ca99cec.mp3
//http://10.2.217.31/WLisVH213/m701.music.126.net/20221028064920/dcfa6464bb8f0eed4fb7f1a8b071ae34/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/10369128410/87c0/389e/a803/f1f6d536f6b9b43313c3f17c9a307135.mp3
//路由使用
const route = useRoute();
const router = useRouter();
//video

//标题
const title = computed(() => {
	return route.query.title;
})
//数据初始化
onMounted(() => {
	console.log(title.value);
	console.log(route.query.matchingType);

})

//当点击返回按钮时事件
const OnClickReturn = () => {
	router.back()
}


//背景颜色
const bgc = ref('blue');


const mp3url = ref('');
onMounted(() => {

	resourcesApi.getMatchingBGM()
		.then(result => {
			console.log(result);
			mp3url.value = result.data.resourceSrc
		});

})


</script>

<style lang="less" scoped>
@keyframes rotate {
	10% {
		opacity: 0;
		transform: rotate(0deg);
		border-radius: 10px;
		transform: scale(2);
	}

	20% {
		background-color: rgb(227, 166, 209);
		opacity: 0.3;
		transform: scale(1);

	}

	50% {
		transform: rotate(360deg);
		border-radius: 30px;
		opacity: 1;
	}

	100% {}
}

@keyframes updown {
	0% {
		transform: translateY(10px);
	}


	100% {
		transform: translateY(0px);
	}
}

.maching-box {
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	// flex-direction: column;

	p {
		animation: updown 1s alternate infinite linear;
		font-size: 20px;
	}

	.loading-img {
		// border-radius: 10px;
		opacity: 0;
		margin: 7px;
		width: 24px;
		height: 24px;
		color: white;
		background-color: rgb(147, 202, 251);
		padding: 4px;
		animation: rotate 3s infinite linear;
	}

}
</style>