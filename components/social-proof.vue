<script setup lang="ts">
import * as rawLogos from '~/assets/images/social-proof'

const logos = ref(Object.values(rawLogos).map((l) => l.split('/images')[1]))
const isHoveringOn = ref(null)
</script>

<template>
	<section>
		<h2>As featured in...</h2>
		<div class="logo-container">
			<div v-for="logo in logos">
				<nuxt-img
					:src="logo"
					:class="{ flash: isHoveringOn === logo }"
					@mouseenter.self="isHoveringOn = logo"
					@animationend.self="isHoveringOn = null"
				/>
			</div>
		</div>
	</section>
</template>

<style scoped lang="scss">
section {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 2rem 0 4rem;
}

h2 {
	margin: 0 0 2rem;
}

.logo-container {
	height: 20vw;
	max-height: 230px;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 2rem;
	margin: 0 2rem;

	div {
		height: 100%;
		width: 20%; // There's five images
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 2rem;

		img {
			max-width: 100%;
			max-height: 100%;
			filter: grayscale(100%);
			transition: filter $transition-duration-normal ease-in;

			&:hover {
				filter: grayscale(0%);
				cursor: pointer;
			}
		}
	}
}

.flash {
	animation: flash 1.5s;
	animation-iteration-count: 1;

	@keyframes flash {
		from {
			opacity: 0.4;
		}
		to {
			opacity: 1;
		}
	}
}
</style>
