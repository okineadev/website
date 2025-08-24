<script setup lang="ts">
import mediumPosts from '../../data/medium-posts'
</script>

<template>
	<div class="medium-posts-container" aria-labelledby="medium-posts-title">
		<MediumPost
			v-for="(post, index) in mediumPosts"
			:link="post.link"
			:image="post.image"
			:title="post.title"
			:description="post.description"
			:titleId="`post-${index}-title`"
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
