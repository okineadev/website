<script setup lang="ts">
defineProps<{
	platform: string
	url: string
}>()
</script>

<template>
	<a :href="url" target="_blank" :aria-label="platform">
		<div class="social">
			<div class="social-icon">
				<i :class="`icon ${platform.toLowerCase().replace(/\s+/g, '-')}`" width="50" height="50" aria-hidden="true"></i>
			</div>
			<span>{{ platform }}</span>
		</div>
	</a>
</template>
