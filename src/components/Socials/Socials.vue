<script setup lang="ts">
import SocialIcon from './SocialIcon.vue'
import socials from '../../socials'
</script>

<template>
	<div class="contacts" aria-labelledby="socials">
		<SocialIcon
			v-for="(url, platform) in socials"
			:key="platform"
			:platform="platform"
			:url="url"
		></SocialIcon>
	</div>
</template>
