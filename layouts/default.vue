<script setup>
import { Provider } from 'vue-wrap-balancer'
</script>

<template>
	<provider>
		<div>
			<app-bar />
			<slot />
			<vmd-footer />
		</div>
	</provider>
</template>
