<template>
	<div class="blog-post">
		<input @input="onChange" v-model="title" />
		<button @click="handleNodeClick">Enlarge text</button>
	</div>
</template>

<script setup>

const props = defineProps(['title'])
console.log(props.title)
const onChange = () => {
	console.log(props.title);
}


const emits = defineEmits()
const handleNodeClick = () => {
	emits('onTextChange', title.value)
}
</script>

<style lang="less" scoped>

</style>