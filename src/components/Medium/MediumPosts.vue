<script setup lang="ts">
import MediumPost from './MediumPost.vue'
</script>

<template>
	<div class="medium-posts-container" aria-labelledby="medium-posts-title">
		<MediumPost
			link="https://medium.com/@okineadev/generate-llms-txt-for-your-documentation-website-on-vitepress-64762cc1150b"
			titleId="post-1-title"
			image="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*Y_K7r4GRXhStaK40jtAZWw.png"
			title="Generate /llms.txt for your documentation website on VitePress"
			description="Large language models increasingly rely on website information, but face a critical limitation: context windows are too small to handle most websites in their entirety..."
		/>
		<MediumPost
			link="https://medium.com/@okineadev/how-to-get-a-free-macos-machine-for-testing-b2f6c72415fd"
			titleId="post-2-title"
			image="https://miro.medium.com/v2/resize:fit:1400/format:webp/0*Q2Fal4qTIXomyZTI"
			title="How to get a free macOS machine for testing?"
			description="if you have created a program and want to test it on different operating systems (including macOS), but if..."
		/>
	</div>
</template>

<style lang="scss" scoped>
.medium-posts-container {
	display: flex;
	flex-wrap: wrap;

	gap: 20px;
	justify-content: center;
}
</style>
