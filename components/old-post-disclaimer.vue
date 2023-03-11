<script setup lang="ts">
const props = defineProps({
	date: {
		type: String,
		required: true,
	},
})

const showSelf = ref<boolean>(true)

const diff = new Date(props.date).getTime() - Date.now()
const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' })
const yearsAgo = rtf.format(
	Math.round(diff / (1000 * 60 * 60 * 24 * 365)),
	'year'
)
</script>

<template>
	<transition>
		<article v-show="showSelf">
			<icon name="mdi:alert-octagram" size="2rem" />
			<p>
				This post was written about {{ yearsAgo }}, so most likely contains
				out-dated information.
			</p>
			<tooltip v-if="showSelf" text="Don't show again for this post">
				<icon-btn
					name="mdi:close-circle-outline"
					size="2rem"
					@click="showSelf = false"
				/>
			</tooltip>
		</article>
	</transition>
</template>

<style scoped lang="scss">
article {
	padding: 1rem;
	background-color: $primary;
	border-radius: 1rem;
	display: flex;
	align-items: center;
	gap: 1rem;
	color: $bg-color-light;

	&:svg {
		color: $bg-color-light;
	}
}

.v-enter-active,
.v-leave-active {
	transition: all 0.5s ease;
}

.v-enter-from,
.v-leave-to {
	opacity: 0;
	transform: scaleY(0);
}
</style>
