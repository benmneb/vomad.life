<script setup lang="ts">
useHead({
	title: 'Page Not Found | Vomad Life',
})
</script>

<template>
	<section>
		<div>
			<nuxt-img preload src="not-found.webp" width="500" />
			<article>
				<header>404</header>
				<main>
					<div>
						<b>
							<span>“Would</span> <span>you</span> <span>tell</span>
							<span>me,</span> <span>please,</span> <span>which</span>
							<span>way</span> <span>I</span> <span>ought</span>
							<span>to</span> <span>go</span> <span>from</span>
							<span>here?”</span>
						</b>
					</div>
					<div>
						<span>“That</span> <span>depends</span> <span>a</span>
						<span>good</span> <span>deal</span> <span>on</span>
						<span>where</span> <span>you</span> <span>want</span>
						<span>to</span> <span>get</span> <span>to,”</span>
						<span>said</span> <span>the</span> <span>Cat.</span>
					</div>
					<div>
						<span>“I</span> <span>don’t</span> <span>much</span>
						<span>care</span> <span>where—”</span> <span>said</span>
						<span>Alice.</span>
					</div>
					<div>
						<span>“Then</span> <span>it</span> <span>doesn’t</span>
						<span>matter</span> <span>which</span> <span>way</span>
						<span>you</span> <span>go,”</span> <span>said</span>
						<span>the</span> <span>Cat.</span>
					</div>
				</main>
				<footer>
					<nuxt-link to="/">← Go home</nuxt-link>
				</footer>
			</article>
		</div>
	</section>
</template>

<style scoped lang="scss">
section {
	margin-top: 100px;
	height: calc(100vh - 100px);
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;
	z-index: 100;
	position: relative;

	div {
		display: flex;

		img {
			z-index: 100;
		}

		article {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			margin-left: 1rem;
			padding: 1rem 0;

			header {
				font-weight: bold;
				color: $grey;
				font-size: $font-size-extra-large;
			}

			main {
				line-height: 2.5;

				div {
					display: block;

					span {
						color: transparent;
						animation: blur-fade 15s ease-out 1 normal forwards;

						&::after {
							content: ' ';
						}
					}
				}
			}
		}
	}
}

@for $i from 1 through 15 {
	div:nth-of-type(1) span:nth-of-type(#{$i}) {
		animation-delay: #{$i}00ms;
	}
}

@for $i from 1 through 15 {
	div:nth-of-type(2) span:nth-of-type(#{$i}) {
		animation-delay: #{$i + 30}00ms;
	}
}

@for $i from 1 through 15 {
	div:nth-of-type(3) span:nth-of-type(#{$i}) {
		animation-delay: #{$i + 60}00ms;
	}
}

@for $i from 1 through 15 {
	div:nth-of-type(4) span:nth-of-type(#{$i}) {
		animation-delay: #{$i + 90}00ms;
	}
}

@keyframes blur-fade {
	0% {
		text-shadow: 0 0 100px $black;
		opacity: 0;
		color: transparent;
	}
	5% {
		text-shadow: 0 0 90px $black;
	}
	15% {
		opacity: 1;
	}
	20% {
		text-shadow: 0 0 0px $black;
		color: transparent;
	}
	21% {
		color: $black;
	}
	100% {
		color: $black;
	}
}
</style>
