<template>
  <div>
    <HeaderWithUnderline>Skills</HeaderWithUnderline>
    <p v-for="[sphere, skill] in Object.entries(skills)" class="my-3">
      <b>{{ sphere }}</b
      >: {{ skill.join(", ") }}
    </p>
  </div>
</template>

<script setup>
import skills from '../data/skills'
import HeaderWithUnderline from '../components/HeaderWithUnderline.vue'
</script>
