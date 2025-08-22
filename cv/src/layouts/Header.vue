<script setup lang="ts">
import Contacts from '../sections/header/Contacts.vue'
import { Code } from 'lucide-vue-next'
</script>

<template>
  <header
    class="content-stretch bg-[#fff0c7] flex flex-row items-start justify-between relative w-full px-[50px] py-[40px]"
  >
    <div>
      <h1
        class="text-[#282621] text-[57px] font-poppins font-semibold tracking-[-2.28px]"
      >
        Yurii Bogdan
      </h1>
      <div
        class="flex flex-row gap-[11px] items-center justify-start p-0 leading-0"
      >
        <Code :size="24" color="#705d09" />
        <span
          class="text-[#705d09] text-[24px] font-[Inter] font-normal text-left"
        >
          Full-Stack Developer
        </span>
      </div>
    </div>
    <Contacts />
  </header>
</template>
