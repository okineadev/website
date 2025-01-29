<script setup lang="ts">
import type { Project } from '../types'
import Icon from './Other/Icon.vue'

defineProps<{
	project: Project
}>()
</script>

<template>
	<a
		:href="`https://github.com/${project.repo}`"
		class="project-tab"
		role="region"
		:aria-labelledby="`${project.name}-title`"
	>
		<div class="main-tab">
			<div class="project-header">
				<div class="repo">
					<!-- <i class="icon repo" aria-hidden="true"></i> -->
					<Icon name="repo" />
					<span class="name" :id="`${project.name}-title`">{{
						project.name
					}}</span>
				</div>

				<!-- <i class="icon open" aria-hidden="true"></i> -->
				<Icon name="open" />
			</div>

			<div class="description">
				<p>{{ project.description }}</p>
			</div>
		</div>
	</a>
</template>
