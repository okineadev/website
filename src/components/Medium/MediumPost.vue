<script setup lang="ts">
defineProps<{
	link: string
	titleId: string
	imageWebp: string
	imageJpg: string
	imageAlt: string
	title: string
	description: string
}>()
</script>

<style lang="scss" src="../../scss/medium-posts.scss" scoped></style>

<template>
	<a class="post" :href="link" role="article" :aria-labelledby="titleId">
		<i class="icon open" aria-hidden="true"></i>
		<picture>
			<source :srcset="imageWebp" type="image/webp" />
			<source :srcset="imageJpg" type="image/jpg" />
			<img :src="imageJpg" :alt="imageAlt" />
		</picture>
		<div class="info">
			<h2 :id="titleId">{{ title }}</h2>
			<p>{{ description }}</p>
		</div>
	</a>
</template>
