<script setup lang="ts">
import socials from '../../data/socials'
</script>

<template>
	<div class="contacts" aria-labelledby="socials">
		<!-- 🩼 -->
		<SocialIcon caption="GitHub" :url="socials.GitHub"><i-octicon-mark-github-24 /></SocialIcon>
		<SocialIcon caption="Unsplash" :url="socials.Unsplash"><i-other-unsplash /></SocialIcon>
		<SocialIcon caption="Telegram" :url="socials.Telegram"><i-logos-telegram /></SocialIcon>
		<SocialIcon caption="Medium" :url="socials.Medium"><i-other-medium-icon /></SocialIcon>
		<SocialIcon caption="Discord" :url="socials.Discord"><i-logos-discord-icon /></SocialIcon>
		<SocialIcon caption="Stack Overflow" :url="socials['Stack Overflow']"
			><i-logos-stackoverflow-icon
		/></SocialIcon>
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

				color: var(--text-color-primary);

				@media (prefers-reduced-motion: no-preference) {
					transition: color 0.2s ease-in-out;
				}
			}
		}
	}
}
</style>
