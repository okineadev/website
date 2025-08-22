<template>
  <div>
    <HeaderWithUnderline>Languages</HeaderWithUnderline>
    <p v-for="[language, level] in Object.entries(languages)" class="my-3">
      <b>{{ language }}</b
      >: {{ level }}
    </p>
  </div>
</template>

<script setup>
import languages from '../data/languages'
import HeaderWithUnderline from '../components/HeaderWithUnderline.vue'
</script>
