<script setup lang="ts">
import DynamicBlobs from './DynamicBlobs™.vue'
</script>

<template>
	<div class="profile-card" aria-labelledby="profile-card-title">
		<div id="dots" aria-hidden="true"></div>

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
					Hello <i class="emoji hello" aria-hidden="true"></i>, my name is <b>Yura</b> and I am a developer. I write
					mainly in <b>Python</b>, <b>JavaScript</b> and
					<b>Bash</b>
				</p>
				<p>I also have experience with <b>Linux</b> and understand hardware</p>
				<p>
					If I have time, I help open source projects like
					<a
						href="https://github.com/material-extensions/vscode-material-icon-theme"><b>vscode-material-icon-theme</b></a>,
					<a href="https://github.com/tldr-pages/tldr"><b>tldr</b></a>
					and sponsor them, and I also make notes about how I fixed bugs on my
					<a href="https://gist.github.com/okineadev"><b>Gist</b></a>
				</p>
			</div>
		</div>

		<DynamicBlobs />
	</div>
</template>
