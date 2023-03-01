<script setup>
import Balancer from 'vue-wrap-balancer'
import { travelLogData } from '~~/assets/data/travel-log'
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
</style>
