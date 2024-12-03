<script setup lang="ts">
import MediumPost from './MediumPost.vue'
</script>

<style lang="scss" src="../../scss/medium-posts.scss"></style>

<template>
	<div class="medium-posts-container" aria-labelledby="medium-posts-title">
		<MediumPost link="https://medium.com/@okineadev/how-to-get-a-free-macos-machine-for-testing-b2f6c72415fd"
			titleId="post-1-title" imageWebp="/src/images/illustration-1.webp" imageJpg="/src/images/illustration-1.jpg"
			imageAlt="Mount Fuji with a Japanese pagoda in the foreground"
			title="How to get a free macOS machine for testing?"
			description="if you have created a program and want to test it on different operating systems (including macOS), but if..." />
		<MediumPost
			link="https://medium.com/@okineadev/how-to-set-up-vnc-on-a-headless-raspberry-pi-with-ubuntu-server-24-04-96cc8ddf65bc"
			titleId="post-2-title" imageWebp="/src/images/illustration-2.webp" imageJpg="/src/images/illustration-2.jpg"
			imageAlt="3D-rendered room with a desk, computer, and bookshelf"
			title="How to set up VNC on a headless Raspberry Pi..."
			description="If you have Ubuntu Server installed on your Raspberry Pi and you want to connect to its interface without a monitor or mouse?" />
	</div>
</template>
