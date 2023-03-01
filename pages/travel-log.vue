<script setup>
import Balancer from 'vue-wrap-balancer'
import { travelLogData } from '~~/assets/data/travel-log'
</script>

<template>
	<header>
		<nuxt-img
			preload
			src="travel-log/hero.webp"
			sizes="sm:100vw md:100vw lg:100vw xl:100vw"
			class="blur"
		/>
		<nuxt-img
			preload
			src="travel-log/hero.webp"
			sizes="sm:100vw md:100vw lg:100vw xl:100vw"
		/>
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
</template>

<style scoped lang="scss">
header {
	margin: 100px 0 0;

	.blur {
		background-size: cover;
		background-position: center;
		height: 100vh;
		width: 100vw;
		top: 0;
		position: absolute;
		filter: blur(50px);
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
	}
}

.intro {
	margin: 2rem auto;
	max-width: 800px;
	text-align: center;

	p {
		font-size: $font-size-medium;
	}
}
</style>
