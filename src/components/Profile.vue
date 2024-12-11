<script setup lang="ts">
import DynamicBlobs from './DynamicBlobs™.vue'
</script>

<template>
	<div class="profile-card" aria-labelledby="profile-card-title">
		<div class="info">
			<h1 class="name" id="profile-card-title">Okinea Dev</h1>
			<div class="meta-info">
				<span class="meta-item">
					<i class="icon location" aria-hidden="true"></i>
					<i class="emoji ua-flag" aria-hidden="true"></i>
					<span>Ukraine</span>
				</span>
				<span class="meta-item">
					<i class="icon github" aria-hidden="true"></i>
					<a href="https://github.com/okineadev">
						<span>okineadev</span>
					</a>
				</span>
			</div>
			<div class="description">
				<p>
					Hello <i class="emoji hello" aria-hidden="true"></i>, my name is <b>Yura</b>, I'm 16 years old,
					programmer,
					designer, I create cool websites, amazing CLI applications and I also write posts on Medium from
					time to time
					:)
				</p>
				<p>
					I work on open source projects, create my own and help others. I am the maintainer of the <a
						href="https://github.com/material-extensions/vscode-material-icon-theme"><b>Material Icon
							Theme</b></a> extension for VS Code, Co-founder
					of <a href="https://github.com/ZGalera"><b>Zgalera Inc.</b></a>

				</p>
			</div>
		</div>

		<DynamicBlobs />
	</div>
</template>
