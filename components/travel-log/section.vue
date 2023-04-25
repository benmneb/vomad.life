<script setup lang="ts">
import Balancer from 'vue-wrap-balancer'
// import type { TravelLogTypes } from '@/assets/data/travel-log'
// The generic type argument passed to defineProps cannot be an imported type: https://vuejs.org/guide/typescript/composition-api.html#syntax-limitations

const props = defineProps([
	'location',
	'image',
	'title',
	'description',
	'costOfLiving',
	'veganScore',
	'nomadScore',
	'relatedArticles',
])

const $img = useImage()
const imgUrl = $img(props.image, {
	sizes: 'sm:100vw md:100vw lg:100vw xl:100vw',
})
</script>

<template>
	<article>
		<header>
			<div :style="`background-image: url('${imgUrl}')`" />
			<h1 data-aos="fade-up">{{ location }}</h1>
		</header>
		<main>
			<section data-aos="fade-right">
				<h2>{{ title }}</h2>
				<balancer>
					<p v-for="paragraph in description" v-html="paragraph"></p>
				</balancer>
				<balancer>
					<p v-if="relatedArticles" class="related-articles">
						Related article(s):
						<span v-for="(article, index) in relatedArticles">
							<nuxt-link :to="article.link"> {{ article.text }} </nuxt-link
							><span v-if="index !== relatedArticles.length - 1">, </span>
						</span>
					</p>
				</balancer>
			</section>
			<section class="stats" data-aos="fade-left">
				<div>
					<div class="label">Cost of living:</div>
					<div class="value" v-for="line in costOfLiving">
						{{ line.text }}
						<nuxt-link v-if="line.link" :to="line.link">
							<icon name="ri:external-link-line" />
						</nuxt-link>
					</div>
				</div>
				<div>
					<div class="label">Vegan score:</div>
					<div class="value">
						{{ veganScore.text }}
						<nuxt-link :to="veganScore.link">
							<icon name="ri:external-link-line" />
						</nuxt-link>
					</div>
				</div>
				<div>
					<div class="label">Nomad score:</div>
					<div class="value">
						{{ nomadScore.text }}
						<nuxt-link :to="veganScore.link">
							<icon name="ri:external-link-line" />
						</nuxt-link>
					</div>
				</div>
			</section>
		</main>
	</article>
</template>

<style scoped lang="scss">
article {
	display: flex;
	flex-direction: column;

	@media screen and (max-width: 1100px) {
		& > * {
			overflow-x: hidden;
		}
	}
}

header {
	height: 320px;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;

	div {
		inset: 0;
		position: absolute;
		background-position: center center;
		background-size: cover;
		background-attachment: fixed;
		display: block;
	}

	h1 {
		z-index: 1;
		font-size: $font-size-large;
		color: $bg-color-light;
		text-shadow: $black 0 0 2rem;
	}
}

main {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
	align-self: center;
	max-width: 1800px;

	@media screen and (max-width: 700px) {
		display: unset;
		margin: 2rem 0;
	}

	section {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		padding: 2rem;
		margin: auto;
		max-width: 800px;
		text-align: center;

		@media screen and (max-width: 700px) {
			padding: 1rem 2rem;
		}

		h2 {
			font-size: $font-size-medium;
		}

		.related-articles {
			font-style: italic;
		}
	}

	section.stats {
		gap: 1.5rem;

		.label {
			font-weight: bold;
			margin-bottom: 0.2rem;
		}

		.value {
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 0.2rem;

			a:hover {
				transition: none;
				box-shadow: none;
			}
		}
	}
}
</style>
