<script setup lang="ts">
defineProps({
	image: {
		type: String,
		required: true,
	},
})
</script>

<template>
	<section>
		<nuxt-img
			preload
			:src="`${image}.webp`"
			sizes="sm:100vw md:100vw lg:100vw xl:100vw"
			class="blur"
		/>
		<nuxt-img
			preload
			:src="`${image}.webp`"
			sizes="sm:100vw md:100vw lg:100vw xl:100vw"
		/>
	</section>
</template>

<style scoped lang="scss">
section {
	height: calc(100vh - 100px);
	display: flex;

	@media screen and (max-width: 1250px) {
		height: calc(90vw - 4rem);
		max-height: calc(100vh - 100px);
	}

	@media screen and (max-width: 1000px) {
		height: auto;
		margin: 0 0 2rem;
	}

	.blur {
		background-size: cover;
		background-position: center;
		height: 100vh;
		width: 100vw;
		top: 0;
		position: absolute;
		filter: blur(50px);

		@media screen and (max-width: 1250px) {
			height: calc(90vw - 4rem);
			max-height: 100vh;
		}
	}

	img:not(.blur) {
		max-height: calc(100vh - 100px);
		max-width: 100vw;
		margin: auto;
		display: block;
		position: relative;
		z-index: 10;
		border-radius: 4rem;
		padding: 2rem;

		@media screen and (max-width: 1250px) {
			margin-top: 0;
		}

		@media screen and (max-width: 1000px) and (orientation: portrait) {
			border-radius: 0;
			padding: 0;
			margin: 0;
			max-width: 100%;
			width: 100%;
			height: auto;
		}
	}
}
</style>
