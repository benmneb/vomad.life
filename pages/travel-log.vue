<script setup lang="ts">
import Balancer from 'vue-wrap-balancer'
import { travelLogData } from '~~/assets/data/travel-log'

const showModal = ref<boolean>(false)
const isMapLoaded = ref<boolean>(false)

function handleModalOpen() {
	showModal.value = true
	document.body.style.overflow = 'hidden'
}

function handleModalClose() {
	showModal.value = false
	isMapLoaded.value = false
	document.body.style.overflow = 'auto'
}
</script>

<template>
	<header>
		<post-hero image="travel-log/hero" />
	</header>

	<section class="intro">
		<Balancer>
			<p>
				Our nomadic lifestyle means we change countries about every 3 months.
			</p>
			<p>
				There's a whole world out there to see, and we intend on seeing it.
				Slow-traveller style.
			</p>
		</Balancer>
	</section>

	<travel-log-section v-for="place in travelLogData" v-bind="place" />

	<aside @click="handleModalOpen">
		<icon name="mdi:map" />
	</aside>

	<modal-base :show="showModal" @close="handleModalClose">
		<main>
			<div v-if="isMapLoaded === false" class="lds-ripple">
				<div></div>
				<div></div>
			</div>
			<icon-btn
				v-if="isMapLoaded"
				name="mdi:close-circle-outline"
				@click="handleModalClose"
			/>
			<iframe
				@load="isMapLoaded = true"
				width="100%"
				height="600px"
				style="background: #f9f9f9"
				src="https://nomadlist.com/@benmneb/embed"
				scrolling="no"
				frameborder="0"
				allowfullscreen
			></iframe>
		</main>
	</modal-base>
</template>

<style scoped lang="scss">
header {
	margin: 100px 0 0;
}

.intro {
	margin: 2rem auto;
	max-width: 800px;
	text-align: center;

	p {
		font-size: $font-size-medium;
	}
}

aside {
	position: fixed;
	bottom: 2rem;
	right: 2rem;
	font-size: $font-size-large;
	background-color: $primary;
	color: $bg-color-light;
	padding: 0.5rem;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: zoom-in;
	box-shadow: 0 0 1rem rgba(0, 0, 0, 0.3);
	transition: all $transition-duration-normal ease-in-out;

	&:hover {
		scale: 1.05;
		box-shadow: 0 0 1rem rgba(0, 0, 0, 0.4);
	}

	&:active {
		scale: 0.9;
	}
}

main {
	position: relative;
	width: 1000px;
	height: 600px;
	border-radius: 1rem;
	margin: auto;
	background-color: $bg-color-light;
	box-shadow: 0 0 2rem $grey;
	transition: all 0.3s ease;
	cursor: auto;
	overflow: hidden;
	display: flex;
	align-items: center;
	justify-content: center;

	.lds-ripple {
		display: inline-block;
		position: absolute;
		width: 80px;
		height: 80px;
		z-index: 1001;

		div {
			position: absolute;
			border: 4px solid;
			opacity: 1;
			border-radius: 50%;
			animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;

			&:nth-child(2) {
				animation-delay: -0.5s;
			}
		}
	}

	svg {
		position: absolute;
		top: 0.5rem;
		right: 0.5rem;
		color: $slate;
		font-size: $font-size-medium;
		transition: all $transition-duration-fast ease-in-out;

		&:hover {
			color: $bg-color-light;
			cursor: zoom-out;
		}
	}

	@keyframes lds-ripple {
		0% {
			top: 36px;
			left: 36px;
			width: 0;
			height: 0;
			opacity: 0;
			border-color: $primary;
		}
		4.9% {
			top: 36px;
			left: 36px;
			width: 0;
			height: 0;
			opacity: 0;
		}
		5% {
			top: 36px;
			left: 36px;
			width: 0;
			height: 0;
			opacity: 1;
		}
		33% {
			border-color: $primary;
		}
		100% {
			top: 0px;
			left: 0px;
			width: 72px;
			height: 72px;
			opacity: 0;
			border-color: $success;
		}
	}
}
</style>
