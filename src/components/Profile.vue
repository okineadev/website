<script setup lang="ts">
import DynamicBlobs from './DynamicBlobs™.vue'

import Emoji from './Other/Emoji.vue'
</script>

<template>
	<div class="profile-card" aria-labelledby="profile-card-title">
		<div class="info">
			<h1 class="name" id="profile-card-title">Okinea Dev</h1>
			<div class="meta-info">
				<span class="meta-item">
					<i-octicon-location-16 />
					<Emoji name="ua-flag" />
					<span>Ukraine</span>
				</span>
				<span class="meta-item">
					<i-octicon-mark-github />
					<a href="https://github.com/okineadev">
						<span>okineadev</span>
					</a>
				</span>
			</div>
			<div class="description">
				<p>
					Hello
					<Emoji name="hello" />, my name is <b>Yura</b>, I'm 16 years old, programmer, designer, I create
					cool websites, amazing CLI applications and I also write posts on Medium from time to time :)
				</p>
				<p>
					I work on open source projects, create my own and help others. I am the (ex) maintainer of the
					<a href="https://github.com/material-extensions/vscode-material-icon-theme"
						><b>Material Icon Theme</b></a
					>
					extension for VS Code, Co-founder of
					<a href="https://github.com/ZGalera"><b>Zgalera Inc.</b></a>
				</p>
			</div>
		</div>

		<DynamicBlobs />
	</div>
</template>

<style lang="scss">
.profile-card {
	display: flex;
	justify-content: space-between;

	flex-wrap: nowrap;
	flex-direction: row;
	align-items: flex-start;

	// Info section styles
	.info {
		display: flex;
		flex-direction: column;

		width: 500px;

		.name {
			font-size: 70px;
			max-width: 100%;

			margin: 0;
			text-shadow: -4px -4px 20px #0000001c;
			letter-spacing: -1px;
		}

		// Meta info styles
		.meta-info {
			display: flex;
			flex-wrap: wrap;

			margin-left: 6px;

			span,
			a {
				color: var(--meta-info-color);
			}

			// Meta item styles
			.meta-item {
				display: flex;
				align-items: center;

				margin-right: 10px;
			}
		}

		// Description section styles
		.description {
			padding-block: 10px;
			margin-top: 10px;

			p {
				margin: 10px 0;
			}
		}
	}
}
</style>
