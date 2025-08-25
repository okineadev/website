<template>
	<div>
		<HeaderWithUnderline>Experience</HeaderWithUnderline>

		<div class="experience flex flex-col gap-4">
			<div v-for="{ icon, organization, role, period, description } in experience" :key="organization" class="my-3">
				<div class="flex items-center justify-between">
					<div class="flex items-center">
						<img v-if="icon" :src="icon" class="mr-2 size-16" />
						<h3 class="text-[28px] font-semibold">
							{{ organization }}<span v-if="role" class="font-medium text-gray-700"> — {{ role }}</span>
						</h3>
					</div>

					<p class="text-gray-500">{{ period }}</p>
				</div>
				<div>
					<div v-html="description" class="prose text-[24px]"></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import experience from '../data/experience'
import HeaderWithUnderline from '../components/HeaderWithUnderline.vue'
</script>
