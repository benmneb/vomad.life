<script setup lang="ts">
useHead({
	title: 'Vomad Life',
	meta: [
		{
			name: 'description',
			content:
				'Welcome to the Vomad Life - Aussie Plant-Based Slow-Travelling Digital Nomads Explore the World and bring you Guides, Articles, Surveys, Best Of Lists, Book Reviews and more',
		},
	],
})
</script>

<template>
	<main>
		<hero imgSrc="home/hero.webp">Travel world.<br />Eat plants.</hero>
		<posts-grid />
		<social-proof />
	</main>
</template>
