<script setup lang="ts">
import DynamicBlobs from './DynamicBlobs™.vue'

import Emoji from './Other/Emoji.vue'
import Icon from './Other/Icon.vue'
</script>

<template>
	<div class="profile-card" aria-labelledby="profile-card-title">
		<div class="info">
			<h1 class="name" id="profile-card-title">Okinea Dev</h1>
			<div class="meta-info">
				<span class="meta-item">
					<Icon name="location" />
					<Emoji name="ua-flag" />
					<span>Ukraine</span>
				</span>
				<span class="meta-item">
					<Icon name="github" />
					<a href="https://github.com/okineadev">
						<span>okineadev</span>
					</a>
				</span>
			</div>
			<div class="description">
				<p>
					Hello
					<Emoji name="hello" />, my name is <b>Yura</b>, I'm 16 years old,
					programmer, designer, I create cool websites, amazing CLI applications
					and I also write posts on Medium from time to time :)
				</p>
				<p>
					I work on open source projects, create my own and help others. I am
					the (ex) maintainer of the
					<a
						href="https://github.com/material-extensions/vscode-material-icon-theme"
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
