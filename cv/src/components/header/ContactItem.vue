<script setup lang="ts">
import type { LucideIcon } from '../../data/contacts'

defineProps<{
	text: string
	link?: string
	icon: LucideIcon
}>()
</script>

<template>
	<component
		:is="link ? 'a' : 'div'"
		v-bind="link ? { href: link, target: '_blank', rel: 'noopener noreferrer' } : {}"
		class="flex items-center gap-[6px] font-['Sora',_sans-serif] text-[#000000] text-[22px] tracking-[-0.88px]"
	>
		<component :is="icon" v-bind="{ color: '#C3AA53', size: 26 }" />
		<span>{{ text }}</span>
	</component>
</template>
