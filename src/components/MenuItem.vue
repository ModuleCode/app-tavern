<template>
	<div class="menu-item-box " :class="{ 'animated-border': hot }" :style="{ 'background-color': background }">
		<badge :show-zero="false" :content="hot ? 'Hot' : 0" :class="{ shake: hot }"
			:style="{ 'WebkitAnimationDelay': delayTime + 0.5 + 's' }">
			<h2>{{ text }}</h2>
			<span v-if="time">今日剩余{{ time }}次</span>
			<span v-if="showTip">{{ showTip }}</span>
		</badge>
	</div>
</template>

<script setup>
import { Badge, Icon } from 'vant';
import { ref } from "vue"
const props = defineProps({
	'background': String,
	'time': Number,
	'text': String,
	'showTip': String,
	'hot': Boolean,
	'delayTime': Number
})

</script>


<style lang="less" scoped>
@keyframes animated-border {
	0% {
		box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.4);
	}

	100% {
		box-shadow: 0 0 0 10px rgba(255, 255, 255, 0);
	}
}

@-webkit-keyframes swing_image {
	0% {
		-webkit-transform: rotate(0deg);
	}

	15% {
		-webkit-transform: rotate(0deg);
	}

	20% {
		-webkit-transform: rotate(-5.5deg);
	}

	40% {
		-webkit-transform: rotate(7deg);
	}

	60% {
		-webkit-transform: rotate(-2deg);
	}

	70% {
		-webkit-transform: rotate(3deg);
	}

	80% {
		-webkit-transform: rotate(-1deg);
	}

	100% {
		-webkit-transform: rotate(0deg);
	}
}

@-moz-keyframes swing_image {
	0% {
		-moz-transform: rotate(0deg);
	}

	15% {
		-moz-transform: rotate(0deg);
	}

	20% {
		-moz-transform: rotate(-5.5deg);
	}

	40% {
		-moz-transform: rotate(7deg);
	}

	60% {
		-moz-transform: rotate(-2deg);
	}

	70% {
		-moz-transform: rotate(3deg);
	}

	80% {
		-moz-transform: rotate(-1deg);
	}

	100% {
		-moz-transform: rotate(0deg);
	}
}

@-ms-keyframes swing_image {
	0% {
		-ms-transform: rotate(0deg);
	}

	15% {
		-ms-transform: rotate(0deg);
	}

	20% {
		-ms-transform: rotate(-5.5deg);
	}

	40% {
		-ms-transform: rotate(7deg);
	}

	60% {
		-ms-transform: rotate(-2deg);
	}

	70% {
		-ms-transform: rotate(3deg);
	}

	80% {
		-ms-transform: rotate(-1deg);
	}

	100% {
		-ms-transform: rotate(0deg);
	}
}

@-o-keyframes swing_image {
	0% {
		-o-transform: rotate(0deg);
	}

	15% {
		-o-transform: rotate(0deg);
	}

	20% {
		-o-transform: rotate(-5.5deg);
	}

	40% {
		-o-transform: rotate(7deg);
	}

	60% {
		-o-transform: rotate(-2deg);
	}

	70% {
		-o-transform: rotate(3deg);
	}

	80% {
		-o-transform: rotate(-1deg);
	}

	100% {
		-o-transform: rotate(0deg);
	}
}

@keyframes swing_image {
	0% {
		transform: rotate(0deg);
	}

	5% {
		transform: rotate(-5.5deg);
	}

	25% {
		transform: rotate(7deg);
	}

	45% {
		transform: rotate(-2deg);
	}

	55% {
		transform: rotate(3deg);
	}

	65% {
		transform: rotate(-1deg);
	}

	80% {
		transform: rotate(0deg);
	}

	100% {
		transform: rotate(0deg);
	}
}

.animated-border {
	animation: animated-border 1.5s infinite;
}

.menu-item-box {
	border: 4px solid rgba(255, 255, 255, 0.388);
	position: relative;
	display: flex;
	min-height: 10vh;
	border-radius: 10px;
	background-color: pink;
	padding: 10px;
	flex-direction: column;
	justify-content: space-between;

	.shake {
		-webkit-animation: swing_image 0.8s linear 0s 1 normal;
		-moz-animation: swing_image 0.8s linear 0s 1 normal;
		-ms-animation: swing_image 0.8s linear 0s 1 normal;
		-o-animation: swing_image 0.8s linear 0s 1 normal;
		-webkit-animation-fill-mode: both;
		-moz-animation-fill-mode: both;
		-ms-animation-fill-mode: both;
		-o-animation-fill-mode: both;
		animation-fill-mode: both;

	}

	h2 {
		margin: 0;
		display: flex;
		font-size: 1.2rem;
		font-weight: bold;
		color: rgba(255, 255, 255, 0.88);
	}

	span {
		color: rgba(255, 255, 255, 0.772);
		display: flex;
		font-size: 0.8rem;
		margin-top: 6px;
		font-weight: bold;
	}

}
</style>