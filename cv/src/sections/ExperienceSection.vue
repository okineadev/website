<template>
	<div>
		<HeaderWithUnderline>Experience</HeaderWithUnderline>

		<div v-for="{ icon, organization, period, description } in experience" :key="organization" class="my-3">
			<div class="flex items-center justify-between">
				<div class="flex items-center">
					<img :src="icon" class="mr-2 size-16" />
					<h3 class="text-[28px] font-medium">{{ organization }}</h3>
				</div>

				<p class="text-gray-500">{{ period }}</p>
			</div>
			<p v-html="description"></p>
		</div>
	</div>
</template>

<script setup>
import experience from '../data/experience'
import HeaderWithUnderline from '../components/HeaderWithUnderline.vue'
</script>
