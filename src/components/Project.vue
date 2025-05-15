<script setup lang="ts">
import type { Project } from '../types.d'
import { onMounted, ref } from 'vue'
import { fetchGitHubStars } from '../helpers/github-api'

const props = defineProps<{
	project: Project
}>()

const name = props.project.repo.split('/')[1]

const stars = ref(0)
const isLoading = ref(true)

onMounted(async () => {
	try {
		const fetchedStars = await fetchGitHubStars(props.project.repo)
		if (fetchedStars > 0) {
			stars.value = fetchedStars
			isLoading.value = false
		}
	} catch (error) {
		console.error('Error fetching stars:', error)
	}
})
</script>

<template>
	<a
		:href="`https://github.com/${project.repo}`"
		class="project-tab"
		role="region"
		:aria-labelledby="`${name}-title`"
	>
		<div class="info">
			<div class="project-header">
				<div class="repo">
					<i-octicon-repo-16 />
					<span class="name" :id="`${name}-title`">{{ name }}</span>
				</div>

				<i-octicon-link-external-16 class="open" />
			</div>

			<div class="description">
				<p>{{ project.description }}</p>
			</div>
		</div>

		<div class="stars">
			<i-octicon-star-16 />
			<span v-if="!isLoading">{{ stars }}</span>
			<span v-else class="skeleton"></span>
		</div>
	</a>
</template>

<style lang="scss">
a {
	text-decoration: none;
}

.project-tab {
	$border-radius: 15px;
	border-radius: $border-radius;

	padding: 14px;
	width: -webkit-fill-available;
	height: auto;

	cursor: pointer;
	background-color: var(--project-tab-background-color);

	position: relative;
	flex: 1 1 230px;
	// Temporary fix for height issue
	min-height: 115.31px;

	box-shadow: var(--box-shadow);

	display: flex;
	justify-content: space-between;
	flex-direction: column;

	@media (prefers-reduced-motion: no-preference) {
		transition: transform 0.3s ease-in-out;
	}

	&:hover {
		transform: translateY(-10px);

		.project-header .icon.open {
			opacity: 1;
		}

		&::before {
			opacity: 0.3;
		}
	}

	.project-header {
		display: flex;
		justify-content: space-between;

		align-items: stretch;
		margin: 0;

		.icon.open {
			opacity: 0;

			@media (prefers-reduced-motion: no-preference) {
				transition: opacity 0.3s ease-in-out;
			}
		}

		.repo {
			display: inline-flex;
			align-items: center;

			flex-wrap: nowrap;
			flex-direction: row;

			.icon {
				margin-right: 5px;
			}

			.name {
				font-size: 17px;
				text-wrap-mode: nowrap;

				color: var(--text-color);
			}
		}
	}

	.description p {
		font-size: 12px;
		color: var(--text-color-primary);

		margin: 4px 0 0;
		text-wrap-mode: wrap;
		// white-space: pre-line
	}

	.stars {
		font-size: 0.9em;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		align-items: center;

		& .icon {
			color: var(--text-color-primary);
		}
	}

	&::before {
		content: '';
		z-index: -9999;

		position: absolute;

		top: 0;
		bottom: 0;
		right: 0;
		left: 0;

		background: linear-gradient(-45deg, #e81cff, #40c9ff);
		transform: translateZ(0) scale(0.9);

		filter: blur(20px);
		opacity: 0;
		border-radius: inherit;

		@media (prefers-reduced-motion: no-preference) {
			transition: opacity 0.3s;
		}
	}

	&::after {
		content: '';
		z-index: -1;

		position: absolute;

		top: 0;
		bottom: 0;
		right: 0;
		left: 0;

		background: inherit;
		border-radius: inherit;
	}
}

.skeleton {
	display: inline-block;
	width: 40px;
	height: 1em;
	background: linear-gradient(
		90deg,
		rgba(224, 224, 224, 0.1) 25%,
		rgba(240, 240, 240, 0.12) 50%,
		rgba(224, 224, 224, 0.1) 75%
	);
	background-size: 200% 100%;
	animation: shimmer 1.5s infinite;
	border-radius: 4px;
}

@keyframes shimmer {
	0% {
		background-position: 200% 0;
	}
	100% {
		background-position: -200% 0;
	}
}
</style>
