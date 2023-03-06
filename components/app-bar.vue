<script setup lang="ts">
const showAppBar = ref<boolean>(true)
const lastScrollPosition = ref<number>(0)
const showModal = ref<boolean>(false)

onMounted(() => window.addEventListener('scroll', onScroll))
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))

function onScroll() {
	const currentScrollPosition =
		window.pageYOffset || document.documentElement.scrollTop

	if (currentScrollPosition < 0) return
	if (Math.abs(currentScrollPosition - lastScrollPosition.value) < 100) return

	showAppBar.value = currentScrollPosition < lastScrollPosition.value
	lastScrollPosition.value = currentScrollPosition
}

function handleInfoClick() {
	showModal.value = true
	document.body.style.overflow = 'hidden'
}

function handleModalClose() {
	showModal.value = false
	document.body.style.overflow = 'auto'
}
</script>

<template>
	<header :class="{ 'hide-header': !showAppBar }">
		<div>
			<icon-btn name="mdi:information-outline" @click="handleInfoClick" />
		</div>
		<nuxt-img src="app-bar/logo.webp" />
		<div></div>
	</header>
	<Teleport to="body">
		<modal-base :show="showModal" @close="handleModalClose">
			<hgroup>
				<h1>vomad</h1>
				<p>[ v(egan) + (n)omad ]</p>
			</hgroup>

			<main>
				<span class="italic">noun</span>
				<p>
					one who travels indefinitely, with no long-term abode, while avoiding
					all forms of animal exploitation and abuse as far as is possible and
					practicable
				</p>

				<span class="italic">origin</span>
				<p>
					early 21st century;<br />from <b>vegan</b> - ‘a person who does not
					eat or use animal products’,<br />and <b>nomad</b> - ‘a person who
					does not stay long in the same place’
				</p>
			</main>
		</modal-base>
	</Teleport>
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

	svg {
		font-size: $font-size-base-plus;

		&:hover {
			cursor: zoom-in;
		}
	}

	img {
		margin-top: 10px; // To account for the tail on the "f" in VOMADlife
	}
}

.hide-header {
	transform: translate3d(0, -100%, 0);
}

hgroup {
	margin-bottom: 2rem;

	h1 {
		margin-bottom: 0.3rem;
	}
}

main {
	.italic {
		font-style: italic;
	}
}
</style>
