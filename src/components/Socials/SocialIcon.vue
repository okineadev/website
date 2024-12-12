<script setup lang="ts">
import Icon from '../Other/Icon.vue'

defineProps<{
	platform: string
	url: string
}>()
</script>

<template>
	<a :href="url" target="_blank" :aria-label="platform">
		<div class="social">
			<div class="social-icon">
				<Icon :name="platform.toLowerCase().replace(/\s+/g, '-')" width="50" height="50" aria-hidden="true" />
			</div>
			<span>{{ platform }}</span>
		</div>
	</a>
</template>
