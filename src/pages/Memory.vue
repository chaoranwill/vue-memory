<template>
  <div class="g-memory">
    <m-header/>
    <div class="memo-bd"
      v-for="(img, index) in imgList"
      @click="showDetail(img)">
      <m-memo :imgUrl="img.file" />
    </div>
    <m-detail-dialog
      v-if="isShow"
      :img="curImg"
      :onClose="showDetail"/>
  </div>
</template>

<script>

export default {
  data() {
    return {
      curImg: '',
      isShow: false
    }
  },
  computed: {
    imgList: function () {
      return this.$store.state.imgList
    } 
  },
  mounted() {
    //console.log(this.$store.state.imgList)
  },
  methods: {
    showDetail: function (img) {
      this.isShow = !this.isShow
      this.curImg = img
    }
  }
}
</script>
<style lang="scss">
@import '../common/css/common';
.g-memory {
  .memo-bd {
    padding: rem(10) rem(6);
    width: 50%;
    display: inline-block;
    img {
      width: 100%;
      padding: rem(13) rem(8);
      border: 2px solid #fcfcfc;
      box-sizing: border-box;
      box-shadow: 0 1px 2px rgba(34,25,25,0.4);
    }
  }
}
</style>