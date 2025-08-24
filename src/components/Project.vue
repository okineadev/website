<script setup lang="ts">
/**
 * Represents a project with its metadata.
 */
export type Project = {
	/**
	 * The GitHub repository of the project in the format "username/repo".
	 * @example "okineadev/dotload"
	 */
	repo: string

	/**
	 * A short description of the project, often with emojis for context.
	 * @example "🌠 Simple tool for installing dotfiles on any machine!"
	 */
	description: string
}

const props = defineProps<{
	project: Project
}>()

const name = props.project.repo.split('/')[1]
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
</style>
