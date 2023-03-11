<script setup lang="ts">
defineProps({
	text: {
		type: String,
		required: true,
	},
})
</script>

<template>
	<span :aria-label="text" tabindex="0">
		<slot></slot>
	</span>
</template>

<style scoped lang="scss">
span {
	position: relative;
	font-size: inherit;

	&::before {
		content: attr(aria-label);
		position: absolute;
		width: 200px;
		bottom: calc(100% + 0.25rem);
		left: calc(-100px + 0.5rem);
		padding: 0.5rem;
		border-radius: 0.5rem;
		background-color: $black;
		color: $bg-color-light;
		text-align: center;
		font-size: $font-size-small;
		opacity: 0;
		pointer-events: none;
		transition: all $transition-duration-fast ease-in;
	}

	&:focus::before,
	&:hover::before {
		opacity: 1;
		transition: all $transition-duration-fast ease-in;
	}
}
</style>
