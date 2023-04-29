<script setup lang="ts">
defineProps({
	src: {
		type: String,
		required: true,
	},
	alt: {
		type: String,
		default: '',
	},
	caption: {
		type: String,
	},
	format: {
		type: String,
		default: 'webp',
		validator(value: string) {
			return ['webp', 'avif', 'jpeg', 'jpg', 'png', 'gif', 'svg'].includes(
				value
			)
		},
	},
})
</script>

<template>
	<figure>
		<div>
			<nuxt-img
				:src="`content/${src}.webp`"
				:alt="`${alt} @ https://Vomad.Life`"
				:format="format"
			/>
		</div>
		<figcaption v-if="caption" v-html="caption"></figcaption>
	</figure>
</template>

<style scoped lang="scss">
$article-max-width: 800px;

figure {
	width: 80vw;
	margin: 2rem 0;
	margin-left: calc(-1 * (80vw - ($article-max-width - 2rem)) / 2);

	@media screen and (max-width: $article-max-width) {
		width: unset;
		margin-left: unset;
	}

	div {
		width: 100%;
		max-height: calc(80vh - 2rem); // 2rem for the margin
		display: flex;
		justify-content: center;

		img {
			width: auto;
			height: auto;
			max-width: 100%;
			max-height: calc(80vh - 2rem); // 2rem for the margin
			border-radius: 1rem;
		}
	}

	figcaption {
		text-align: center;
		font-style: italic;
		max-width: 1200px;
		margin: 1rem auto 0;
	}
}
</style>
