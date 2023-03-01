<script setup>
defineProps({
	imgSrc: {
		type: String,
		required: true,
	},
})
const imgLoaded = ref(false)

function handleLoad() {
	imgLoaded.value = true
}
</script>

<template>
	<section>
		<h1 v-show="imgLoaded">
			<slot></slot>
		</h1>
		<nuxt-img
			preload
			:src="imgSrc"
			sizes="sm:100vw md:100vw lg:100vw xl:100vw"
			@load="handleLoad"
		/>
	</section>
</template>

<style scoped lang="scss">
section {
	height: 100vh;
	overflow: hidden;
	display: flex;
	justify-content: center;
	align-items: center;

	h1 {
		position: absolute;
		font-size: $font-size-massive;
		color: $bg-color-light;
		text-align: center;
		padding: 0 2rem;

		animation: $transition-duration-turtle $transition-duration-normal fade
			backwards ease-out;

		@keyframes fade {
			from {
				transform: translateY(0.25em);
				opacity: 0;
			}
		}
	}
}
</style>
