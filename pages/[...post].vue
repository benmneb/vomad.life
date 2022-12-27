<template>
	<main>
		<content-doc v-slot="{ doc }">
			<header>
				<div>
					<nuxt-img
						preload
						:src="`content/${doc.image}/hero.webp`"
						sizes="sm:100vw md:100vw lg:100vw xl:100vw"
						class="blur"
					/>
					<nuxt-img
						preload
						:src="`content/${doc.image}/hero.webp`"
						sizes="sm:100vw md:100vw lg:100vw xl:100vw"
					/>
				</div>
				<div>
					<h1>{{ doc.title }}</h1>
					<p class="reading-time">{{ doc.readingTime.text }}</p>
					<!-- <p>#{{ doc.tag }}</p> -->
				</div>
			</header>
			<content-renderer :value="doc" tag="article" />
			<footer>
				<div>by {{ doc.author || 'Anonymous' }}</div>
				<div>
					{{ doc.date }}
				</div>
				<div>
					<nuxt-link to="/">← Back to home</nuxt-link>
				</div>
			</footer>
		</content-doc>
	</main>
</template>

<style scoped lang="scss">
header {
	margin: 100px 0 0;

	.blur {
		background-size: cover;
		background-position: center;
		height: 100vh;
		width: 100vw;
		top: 0;
		position: absolute;
		filter: blur(50px);
		scale: 1.1;
	}

	img {
		max-height: calc(100vh - 100px);
		max-width: 100vw;
		margin: auto;
		display: block;
		position: relative;
		z-index: 10;
		border-radius: 4rem;
		padding: 2rem;
	}

	h1 {
		font-size: $font-size-extra-large;
		font-weight: bold;
		line-height: 150%;
	}

	.reading-time {
		font-weight: bold;
		color: $grey;
		margin-bottom: 2rem;
	}
}

article,
header > div:last-of-type,
footer {
	max-width: 800px;
	margin: auto;
	padding: 0 1rem;
}

footer {
	margin: 2rem auto;

	div {
		font-weight: bold;
		color: $grey;
		margin: 0.5rem 0;

		&:last-of-type {
			margin: 2rem 0 0;
			font-weight: normal;
		}
	}
}
</style>
