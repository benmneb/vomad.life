<script setup lang="ts">
defineProps({
	imgSrc: {
		type: String,
		required: true,
	},
})

const imgLoaded = ref<boolean>(false)
</script>

<template>
	<section>
		<h1 :show="imgLoaded">
			<slot></slot>
		</h1>
		<nuxt-img
			preload
			:src="imgSrc"
			sizes="sm:200vw md:200vw lg:100vw xl:100vw"
			@load="imgLoaded = true"
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

		@media screen and (max-width: 1100px) {
			font-size: $font-size-enormous;
		}

		@keyframes fade {
			from {
				transform: translateY(0.25em);
				opacity: 0;
			}
		}
	}

	img {
		object-fit: cover;
		height: 100%;
		min-width: 100%;
	}
}
</style>
