<script setup lang="ts">
defineProps<{
	caption: string
	url: string
}>()
</script>

<template>
	<a :href="url" target="_blank" :aria-label="caption">
		<div class="social">
			<div class="social-icon">
				<slot
					width="50"
					height="50"
					aria-hidden="true"
				/>
			</div>
			<span>{{ caption }}</span>
		</div>
	</a>
</template>
