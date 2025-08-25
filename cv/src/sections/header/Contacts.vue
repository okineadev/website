<script setup lang="ts">
import contacts from '../../data/contacts'
import ContactItem from '../../components/header/ContactItem.vue'
</script>

<template>
	<div class="grid grid-cols-1 md:grid-cols-[auto_auto] gap-x-[32px] gap-y-[8px] mt-6 md:mt-0">
		<ContactItem
			v-for="[key, contact] in Object.entries(contacts)"
			:key="key"
			:text="contact.text"
			:link="'link' in contact ? contact.link : undefined"
			:icon="contact.icon"
		/>
	</div>
</template>
