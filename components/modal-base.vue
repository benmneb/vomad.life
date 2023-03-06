<script setup lang="ts">
defineProps({
	show: { type: Boolean, required: true },
	image: String,
})

const imgLoaded = ref<boolean>(false)
</script>

<template>
	<transition name="modal">
		<backdrop v-if="show" @click.self="$emit('close')">
			<main>
				<section>
					<nuxt-img
						:src="image || 'modals/info.webp'"
						preload
						@load="imgLoaded = true"
					/>
					<aside v-show="imgLoaded">
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
		</backdrop>
	</transition>
</template>

<style scoped lang="scss">
backdrop {
	position: fixed;
	z-index: 9998;
	inset: 0;
	backdrop-filter: blur(0.5rem);
	display: flex;
	padding: 2rem;
	transition: opacity 0.3s ease;
	overflow: auto;
	cursor: zoom-out;
}

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

	section {
		grid-row: 1 / 2;
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;

		&:first-of-type {
			border-radius: 1rem 0 0 1rem;
		}

		svg {
			position: absolute;
			top: 0.5rem;
			right: 0.5rem;
			color: $grey;
			font-size: $font-size-medium;
			transition: all $transition-duration-fast ease-in-out;

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

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled.
 */

.modal-enter-from {
	opacity: 0;

	main {
		scale: 0.8;
	}
}

.modal-leave-to {
	opacity: 0;

	main {
		scale: 1.05;
	}
}
</style>
