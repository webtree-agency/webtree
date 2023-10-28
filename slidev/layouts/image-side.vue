<script setup>
import {defineProps} from 'vue'

const props = defineProps({
  image: {
    type: String,
  }
})
</script>
<template>
  <div class="slidev-layout image">
    <div class="image-container" style="margin-top: auto; margin-bottom: auto;">
      <img class="image-item" :src="props.image" style="width: 400px; height: 470px;">
    </div>
    <div class="pl-40 block slidev-layout">
      <slot/>
    </div>
  </div>
</template>


