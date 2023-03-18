<script setup lang="ts">
const tags = ref([
	'article',
	'guide',
	'high-five',
	'book-review',
	'interview',
	'survey',
])
const appliedTag = ref<string | null>(null)
const allPosts = await queryContent().sort({ date: -1 }).find()
const relevantPosts = ref(allPosts)
const showVideoModal = ref<boolean>(false)
const isVideoLoaded = ref<boolean>(false)

async function handleTagClick(tag: string) {
	if (appliedTag.value === tag) {
		appliedTag.value = null
		relevantPosts.value = allPosts
		return
	}

	const postsWithTag = await queryContent()
		.where({ tag: { $eq: tag } })
		.sort({ date: -1 })
		.find()

	appliedTag.value = tag
	relevantPosts.value = postsWithTag
}

function handleModalOpen() {
	showVideoModal.value = true
	document.body.style.overflow = 'hidden'
}

function handleModalClose() {
	showVideoModal.value = false
	isVideoLoaded.value = false
	document.body.style.overflow = 'auto'
}
</script>

<template>
	<section>
		<div class="tags-section">
			<h2>filter posts by</h2>
			<div class="tags-wrapper">
				<span
					v-for="tag of tags"
					:key="tag"
					class="tag"
					:class="{ active: tag === appliedTag }"
					@click="handleTagClick(tag)"
				>
					#{{ tag }}
				</span>
			</div>
		</div>
		<nav>
			<div v-if="!appliedTag">
				<nuxt-link to="/travel-log">
					<nuxt-img
						src="travel-log/hero.webp"
						sizes="sm:25vw md:25vw lg:25vw xl:25vw"
					/>
				</nuxt-link>
			</div>
			<div v-if="!appliedTag">
				<nuxt-link to="https://vomad.guide?ref=vomad.life" target="_blank">
					<nuxt-img
						src="guide/hero.webp"
						sizes="sm:25vw md:25vw lg:25vw xl:25vw"
					/>
				</nuxt-link>
			</div>
			<div v-if="!appliedTag">
				<nuxt-link to="https://veganise.it?ref=vomad.life" target="_blank">
					<nuxt-img
						src="veganise-it/hero.webp"
						sizes="sm:25vw md:25vw lg:25vw xl:25vw"
					/>
				</nuxt-link>
			</div>
			<div v-for="post of relevantPosts" :key="post._path">
				<nuxt-link :to="post._path">
					<nuxt-img
						:src="`content/${post.image}/hero.webp`"
						sizes="sm:25vw md:25vw lg:25vw xl:25vw"
					/>
				</nuxt-link>
			</div>
			<div v-if="!appliedTag" class="video-link" @click="handleModalOpen">
				<nuxt-link>
					<nuxt-img
						src="respect-existence.webp"
						sizes="sm:25vw md:25vw lg:25vw xl:25vw"
					/>
				</nuxt-link>
			</div>
		</nav>
	</section>
	<modal-base :show="showVideoModal" @close="handleModalClose">
		<main>
			<div v-if="isVideoLoaded === false" class="lds-ripple">
				<div></div>
				<div></div>
			</div>
			<div class="streamable">
				<iframe
					src="https://streamable.com/e/5wxy2c"
					frameborder="0"
					width="100%"
					height="100%"
					allowfullscreen
				></iframe>
			</div>
		</main>
	</modal-base>
</template>

<style scoped lang="scss">
section {
	margin: 4rem 0 2rem;
	padding-bottom: 2rem;
	overflow: hidden;
}

h2 {
	color: $grey;
	margin: 0;
}

.tags-section {
	display: flex;
	align-items: center;
	flex-direction: column;
	margin: 0 0 4rem;
}

.tags-wrapper {
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	gap: 1rem;
	height: 120px;
}

.tag {
	white-space: nowrap;
	font-weight: bold;
	font-size: $font-size-large;
	cursor: pointer;
	transition: font-size $transition-duration-normal ease-in-out,
		color $transition-duration-normal ease-in-out;

	&:hover {
		font-size: calc(15px + 2.2vw);
		mask: linear-gradient(-60deg, $black 30%, $grey, $black 70%) right/300% 100%;
		animation: shimmer 2s 1;
	}

	@keyframes shimmer {
		100% {
			mask-position: left;
		}
	}
}

.active {
	color: $primary;
}

nav {
	width: 100%;
	display: grid;
	grid-template-columns: repeat(4, 1fr);

	a {
		display: flex;

		img {
			width: 100%;
			transition: all $transition-duration-slow ease;

			&:hover {
				transform: scale(1.0275);
				border-radius: 1rem;
				box-shadow: 0 0 1rem rgba(0, 0, 0, 0.5);
				z-index: 50;
			}
		}
	}
}

.video-link {
	cursor: zoom-in;
}

main {
	position: relative;
	width: 1000px;
	border-radius: 1rem;
	margin: auto;
	background-color: $bg-color-light;
	box-shadow: 0 0 2rem $grey;
	transition: all 0.3s ease;
	cursor: auto;
	overflow: hidden;
	display: flex;
	align-items: center;
	justify-content: center;

	.streamable {
		width: 100%;
		height: 0px;
		position: relative;
		padding-bottom: 56.25%;

		iframe {
			z-index: 1100;
			width: 100%;
			height: 100%;
			position: absolute;
			left: 0px;
			top: 0px;
			overflow: hidden;
		}
	}

	.lds-ripple {
		display: inline-block;
		position: absolute;
		width: 80px;
		height: 80px;
		z-index: 1001;

		div {
			position: absolute;
			border: 4px solid;
			opacity: 1;
			border-radius: 50%;
			animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;

			&:nth-child(2) {
				animation-delay: -0.5s;
			}
		}
	}

	figure {
		z-index: 1100;
		margin: 0;
		width: 100%;
	}
}

@keyframes lds-ripple {
	0% {
		top: 36px;
		left: 36px;
		width: 0;
		height: 0;
		opacity: 0;
		border-color: $primary;
	}
	4.9% {
		top: 36px;
		left: 36px;
		width: 0;
		height: 0;
		opacity: 0;
	}
	5% {
		top: 36px;
		left: 36px;
		width: 0;
		height: 0;
		opacity: 1;
	}
	33% {
		border-color: $primary;
	}
	100% {
		top: 0px;
		left: 0px;
		width: 72px;
		height: 72px;
		opacity: 0;
		border-color: $success;
	}
}
</style>
