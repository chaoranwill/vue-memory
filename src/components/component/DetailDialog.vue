<template>
  <div class="m-detail-dialog" @click="onClose && onClose()">
    <div class="box">
      <div class="dialog">
        <div class="bd" @click.stop="() => {}">
          <img :src="img.file">
          <span class="img-deco">我們的記憶</span>
          <div class="info">
            <div>{{ img.info }}</div>
            <div class="date">{{ img.date }}</div>
          </div class="info">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'm-detail-dialog',
    props: ['img', 'on-close']
  }
</script>