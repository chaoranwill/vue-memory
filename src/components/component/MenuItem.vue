<template>
  <div class="u-menu-item">
    <slot></slot>
    <div class="menu-title">
      {{ title }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'u-menu-item',
  props: ['title']
}
</script>