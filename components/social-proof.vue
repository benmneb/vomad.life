<script setup lang="ts">
const isHoveringOn = ref<string | null>(null)
</script>

<template>
	<section>
		<h2>As featured in...</h2>
		<div class="logo-container">
			<div>
				<nuxt-img
					src="social-proof/peta-au.webp"
					alt="Vomad.Life featured on Peta Austrailia's website"
					:class="{ flash: isHoveringOn === 'peta-au' }"
					@mouseenter.self="isHoveringOn = 'peta-au'"
					@animationend.self="isHoveringOn = null"
				/>
			</div>
			<div>
				<nuxt-img
					src="social-proof/vegan-australia.webp"
					alt="Vomad.Life featured on Vegan Australia's website"
					:class="{ flash: isHoveringOn === 'vegan-australia' }"
					@mouseenter.self="isHoveringOn = 'vegan-australia'"
					@animationend.self="isHoveringOn = null"
				/>
			</div>
			<div>
				<nuxt-img
					src="social-proof/pbn.webp"
					alt="Vomad.Life featured on Plant Based News"
					:class="{ flash: isHoveringOn === 'pbn' }"
					@mouseenter.self="isHoveringOn = 'pbn'"
					@animationend.self="isHoveringOn = null"
				/>
			</div>
			<div>
				<nuxt-img
					src="social-proof/live-kindly.webp"
					alt="Vomad.Life featured on Live Kindly"
					:class="{ flash: isHoveringOn === 'live-kindly' }"
					@mouseenter.self="isHoveringOn = 'live-kindly'"
					@animationend.self="isHoveringOn = null"
				/>
			</div>
			<div>
				<nuxt-img
					src="social-proof/tavm.webp"
					alt="Vomad.Life featured in The Australian Vegan Magazine"
					:class="{ flash: isHoveringOn === 'tavm' }"
					@mouseenter.self="isHoveringOn = 'tavm'"
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

	@media screen and (max-width: 600px) {
		width: 100%;
		text-align: left;
		padding: 0 1rem;
		font-size: $font-size-medium;
	}
	@media screen and (max-width: 1100px) {
		width: 100%;
		text-align: left;
		padding: 0 1rem;
	}
}

.logo-container {
	height: 20vw;
	max-height: 230px;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 2rem;
	margin: 0 2rem;

	@media screen and (max-width: 1100px) {
		width: 100%;
		overflow-x: scroll;
		height: 25vw;
		justify-content: start;
		padding: 0 1rem;
		scrollbar-width: none;

		&::-webkit-scrollbar {
			display: none;
		}
	}

	div {
		height: 100%;
		width: 20%; // There's five images
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 2rem;

		@media screen and (max-width: 1100px) {
			min-width: max-content;
		}

		img {
			max-width: 100%;
			max-height: 100%;
			filter: grayscale(100%);
			transition: filter $transition-duration-normal ease-in;

			&:hover {
				filter: grayscale(0%);
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
