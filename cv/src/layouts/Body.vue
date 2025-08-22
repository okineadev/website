<template>
  <div class="px-[50px] py-[40px] flex flex-col gap-6">
    <AboutSection />
    <SkillsSection />
    <LanguagesSection />
    <ExperienceSection />
  </div>
</template>

<script setup>
import AboutSection from '../sections/AboutSection.vue'
import ExperienceSection from '../sections/ExperienceSection.vue'
import LanguagesSection from '../sections/LanguagesSection.vue'
import SkillsSection from '../sections/SkillsSection.vue'
</script>
