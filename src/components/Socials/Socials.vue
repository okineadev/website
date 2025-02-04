<script setup lang="ts">
import SocialIcon from './SocialIcon.vue'
import socials from '../../socials'
</script>

<template>
	<div class="contacts" aria-labelledby="socials">
		<SocialIcon v-for="(url, platform) in socials" :key="platform" :platform="platform" :url="url"></SocialIcon>
	</div>
</template>

<style lang="scss">
.contacts {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;

	align-items: flex-start;
	gap: 15px;

	justify-content: center;

	a {
		text-decoration: none;

		.social {
			display: flex;
			flex-direction: column;

			align-items: center;
			cursor: pointer;

			&:hover {
				.social-icon {
					transform: scale(1.1) translateY(-5px);
				}

				span {
					color: var(--socials-caption-hover-color);
				}
			}

			// Social icon styles
			.social-icon {
				padding: 10px;
				box-sizing: content-box;

				background-color: var(--devicon-remix-color);
				border-radius: 20px;
				box-shadow: var(--box-shadow);

				.icon {
					width: 50px !important;
					height: 50px !important;

					margin: 0 !important;
					display: block;
				}

				@media (prefers-reduced-motion: no-preference) {
					transition: transform 0.2s ease-in-out;
				}
			}

			span {
				width: min-content;
				text-wrap: wrap;

				font-size: 14px;
				margin-top: 5px;
				padding-inline: 4px;

				color: var(--project-tab-description-text-color);

				@media (prefers-reduced-motion: no-preference) {
					transition: color 0.2s ease-in-out;
				}
			}
		}
	}
}
</style>
