<script setup lang="ts">
defineProps<{
	link: string
	titleId: string
	image: string
	title: string
	description: string
}>()
</script>

<template>
	<a class="post" :href="link" role="article" :aria-labelledby="titleId">
		<i-octicon-link-external-16 class="open" />
		<img :src="image" />
		<div class="info">
			<h2 :id="titleId">{{ title }}</h2>
			<p>{{ description }}</p>
		</div>
	</a>
</template>

<style lang="scss" scoped>
.post {
	box-shadow: 0 4px 6px #0000001a;
	background-color: var(--project-tab-background-color);
	$padding: 10px;
	padding: $padding;
	$img-border-radius: 20px;
	border-radius: calc($img-border-radius + $padding);

	cursor: pointer;

	width: 100%;
	min-width: 300px;
	max-width: 500px;

	user-select: none;

	position: relative;
	overflow: hidden;

	flex: 1 1 300px;

	@media (prefers-reduced-motion: no-preference) {
		transition: transform 0.2s ease-in-out;
	}

	.icon.open {
		position: absolute;
		top: 20px;

		right: 20px;
		width: 25px;
		height: 25px;

		transition: opacity 0.3s ease-in-out;
		opacity: 0;

		color: white;
		fill: white;
	}

	img {
		border-radius: $img-border-radius;
		aspect-ratio: 2 / 1;

		width: 100%;
		object-fit: cover; // Ensure the image is covered without stretching
	}

	.info {
		user-select: text;
		padding-inline: 10px;

		border-bottom-left-radius: inherit;
		border-bottom-right-radius: inherit;

		transition: opacity 0.3s ease-out;

		text-wrap-mode: wrap;

		&::before {
			content: '';
			position: absolute;

			top: 0;
			left: 0;

			width: 100%;
			height: 100%;

			z-index: -1;
			opacity: 0.2;
		}

		h2 {
			color: var(--text-color);
			margin-top: 5px;
		}

		p {
			margin-block: 10px;
			font-size: 14px;

			color: var(--text-color-primary);
		}
	}

	&:hover {
		transform: translateY(-10px);

		.icon.open {
			opacity: 1;
		}
	}
}
</style>
