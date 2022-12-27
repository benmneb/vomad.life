<script setup>
defineProps({
	src: {
		type: String,
		required: true,
	},
	alt: {
		type: String,
		default: '',
	},
})
</script>

<template>
	<nuxt-img :src="`content/${src}.webp`" :alt="alt" />
</template>

<style scoped lang="scss">
img {
	object-fit: contain;
	width: 80vw;
	max-height: 80vh;

	margin: 1rem 0;
	margin-left: calc(-1 * (80vw - (800px - 2rem)) / 2);
}
</style>
