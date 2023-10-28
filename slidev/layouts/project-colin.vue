<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  image: {
    type: String,
  }
})
</script>
<template>
  <div class="slidev-layout image" style="background-image: url('./public/backgrounds/project-colin.svg');">
    <div class="pl-40 block" style="top: 40px;">
      <slot />
    </div>
    <div class="image-container" style="margin-top: auto; margin-bottom: auto;">
      <img class="image-item" :src="props.image" style="width: 400px; height: 470px; border-radius: 20px; box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);  object-position: top;">
    </div>
  </div>
</template>
