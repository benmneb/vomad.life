<script setup>
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
		validator(value) {
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
figure {
	width: 80vw;
	margin: 2rem 0;
	margin-left: calc(-1 * (80vw - (800px - 2rem)) / 2);

	div {
		width: 100%;
		height: calc(80vh - 2rem); // 2rem for the margin
		display: flex;
		justify-content: center;

		img {
			width: auto;
			height: auto;
			max-width: 100%;
			max-height: 100%;
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
