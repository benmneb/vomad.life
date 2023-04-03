<script setup lang="ts">
function showOldPostDisclaimer(date: string, tag: string) {
	if (!['guide', 'high-five'].includes(tag)) return false
	const diff = new Date(date).getTime() - Date.now()
	const estimatedYearsAgo = Math.round(diff / (1000 * 60 * 60 * 24 * 365))
	if (estimatedYearsAgo <= -1) return true
	else return false
}

onMounted(() => {
	document
		.querySelectorAll<HTMLAnchorElement>(
			'a[href^="https://"],a[href^="http://"]'
		)
		.forEach((element) => {
			element.target = '_blank'
			element.rel = 'noopener'
		})
})
</script>

<template>
	<main>
		<content-doc>
			<template v-slot="{ doc }">
				<header>
					<post-hero :image="`content/${doc.image}/hero`" />
					<hgroup>
						<h1>
							<Balancer>
								{{ doc.title }}
							</Balancer>
						</h1>
						<p class="reading-time">{{ doc.readingTime.text }}</p>
						<!-- <p>#{{ doc.tag }}</p> -->
					</hgroup>
				</header>
				<old-post-disclaimer
					v-if="showOldPostDisclaimer(doc.date, doc.tag)"
					:date="doc.date"
				/>
				<content-renderer :value="doc" tag="article" />
				<footer>
					<div>by {{ doc.author || 'Anonymous' }}</div>
					<div>
						{{
							new Date(doc.date).toLocaleDateString('en-US', {
								dateStyle: 'long',
							})
						}}
					</div>
					<div>
						<nuxt-link to="/">← Back to home</nuxt-link>
					</div>
				</footer>
			</template>
			<template #not-found>
				<not-found />
			</template>
		</content-doc>
	</main>
</template>

<style scoped lang="scss">
header {
	margin: 100px 0 0;

	h1 {
		font-size: $font-size-extra-large;
		font-weight: bold;
		line-height: 150%;
	}

	hgroup {
		width: 1200px;
		max-width: 80vw;
		text-align: center;
	}

	.reading-time {
		font-weight: bold;
		color: $grey;
		margin-bottom: 2rem;
	}
}

article,
footer {
	max-width: 800px;
}

article,
hgroup,
footer {
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
