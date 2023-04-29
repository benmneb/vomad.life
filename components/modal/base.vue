<script setup lang="ts">
defineProps({
	show: { type: Boolean, required: true },
})
defineEmits(['close'])
</script>

<template>
	<Teleport to="body">
		<transition name="modal">
			<section id="modal-base" v-show="show" @click.self="$emit('close')">
				<slot></slot>
			</section>
		</transition>
	</Teleport>
</template>

<style lang="scss">
#modal-base {
	position: fixed;
	z-index: 9998;
	inset: 0;
	backdrop-filter: blur(0.5rem);
	display: flex;
	padding: 2rem;
	transition: opacity 0.3s ease;
	overflow: auto;
	cursor: zoom-out;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled.
 */

.modal-enter-from {
	opacity: 0;

	main {
		scale: 0.8;
	}
}

.modal-leave-to {
	opacity: 0;

	main {
		scale: 1.05;
	}
}
</style>
