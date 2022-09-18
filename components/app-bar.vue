<script setup>
import { InfoIcon } from '~/assets/icons'

const showAppBar = ref(true)
const lastScrollPosition = ref(0)

onMounted(() => window.addEventListener('scroll', onScroll))
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))

function onScroll() {
	const currentScrollPosition =
		window.pageYOffset || document.documentElement.scrollTop

	if (currentScrollPosition <= 0) return
	if (Math.abs(currentScrollPosition - lastScrollPosition.value) < 100) return

	showAppBar.value = currentScrollPosition < lastScrollPosition.value
	lastScrollPosition.value = currentScrollPosition
}
</script>

<template>
	<header :class="{ 'hide-header': !showAppBar }">
		<div>
			<info-icon />
		</div>
		<nuxt-img src="logo.webp" />
		<div></div>
	</header>
</template>

<style scoped lang="scss">
header {
	position: fixed;
	top: 0;
	width: 100%;
	z-index: 100;
	height: 100px;
	padding: 0 1rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: #fffa;
	backdrop-filter: blur(20px);
	transition: transform $transition-duration-fast ease-out;

	& > :first-child,
	& > :last-child {
		flex-grow: 1;
		flex-basis: 0;
	}

	img {
		margin-top: 10px; // To account for the tail on the "f" in VOMADlife
	}
}

.hide-header {
	transform: translate3d(0, -100%, 0);
}
</style>
