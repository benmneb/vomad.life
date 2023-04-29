<script setup lang="ts">
defineProps({
	show: { type: Boolean, required: true },
	imageSrc: String,
})
defineEmits(['close'])

const imgLoaded = ref<boolean>(false)
</script>

<template>
	<modal-base :show="show" @close="$emit('close')">
		<main>
			<section>
				<nuxt-img
					:src="imageSrc"
					preload
					@load="imgLoaded = true"
					height="700px"
				/>
				<aside :show="imgLoaded">
					<slot name="overlay-text">This is the Vomad Life.</slot>
				</aside>
			</section>
			<section>
				<article>
					<slot></slot>
				</article>
				<icon-btn name="mdi:close-circle-outline" @click="$emit('close')" />
			</section>
		</main>
	</modal-base>
</template>

<style scoped lang="scss">
main {
	position: relative;
	width: 1000px;
	border-radius: 1rem;
	margin: auto;
	background-color: $bg-color-light;
	box-shadow: 0 0 2rem $grey;
	transition: all 0.3s ease;
	display: grid;
	grid-template-columns: 1fr 1fr;
	cursor: auto;

	@media screen and (max-width: 750px) {
		width: 100%;
		display: unset;
		border-radius: 1rem;
	}

	section {
		grid-row: 1 / 2;
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;

		&:first-of-type {
			border-radius: 1rem 0 0 1rem;

			@media screen and (max-width: 750px) {
				border-radius: 1rem 1rem 0 0;
				height: 60vh;
			}
		}

		svg {
			position: absolute;
			top: 0.5rem;
			right: 0.5rem;
			color: $grey;
			font-size: $font-size-medium;
			transition: all $transition-duration-fast ease-in-out;

			@media screen and (max-width: 750px) {
				font-size: $font-size-massive;
				color: $slate;
			}

			&:hover {
				color: $black;
				cursor: zoom-out;
			}
		}

		img {
			object-fit: cover;
			min-width: 100%;
			height: 700px;
			min-height: 100%;

			@media screen and (max-width: 750px) {
				height: 100%;
			}
		}

		aside {
			position: absolute;
			color: $bg-color-light;
			font-weight: bold;
			animation: $transition-duration-turtle $transition-duration-normal fade
				backwards ease-out;

			@keyframes fade {
				from {
					transform: translateY(0.25em);
					opacity: 0;
				}
			}
		}

		article {
			padding: 1rem;
		}
	}
}
</style>
