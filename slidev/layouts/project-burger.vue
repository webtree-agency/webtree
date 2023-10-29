<template>
  <div class="slidev-layout image" style="background-image: url('../public/backgrounds/project-burger.svg');">
    <div class="pl-40 block" style="top: 40px;">
      <slot />
    </div>
    <div class="image-container" style="margin-top: auto; margin-bottom: auto;">
      <img src="../images/burger-ipad.svg" class="image-item" style="width: 400px; height: 470px; border-radius: 20px; box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);  object-position: top;">
    </div>
  </div>
</template>
