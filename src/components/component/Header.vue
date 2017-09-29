<template>
  <div class="m-header">
    <div v-if="menuShow" class="page-cover" @click="handleMenuShow"></div>
    <header :class="{'hd-trans': menuShow}">
      <div class="pull-left"
        @click="handleMenuShow">
        <i class="fa fa-bars" aria-hidden="true"></i>
      </div>
      <div class="search pull-right">
        <i class="fa fa-search" aria-hidden="true"></i>
      </div>
      <div>{{ headerTitle }}</div>
    </header>
    <m-menu
     :menus="menus"
     :class="{'hd-trans': menuShow}"
     :show="menuShow"
     :on-updatetitle="updatetitle"
     :on-exit="exit" />
  </div>
</template>

<style lang="scss">
@import '../../common/css/common';
  .m-menu {
    .list {
      padding: 0;
      margin: 0;
    }
  }
</style>

<script>
import {mapState} from 'vuex';
import { delCookie } from '@/common/js/config';
export default {
  name: 'm-header',
  // props: ['menuShow', 'menus', 'on-showmenu']
  computed: {
    ...mapState([
        'menuShow','menus', 'headerTitle'
    ])
  },
  methods: {
    handleMenuShow() {
      this.$store.commit('UPDATE_MENUSHOW')
    },
    updatetitle(title) {
      //console.log(title)
      this.$store.commit('UPDATE_TITLE', title)
      this.handleMenuShow()
    },
    exit() {
      delCookie('user')
      this.$router.push('/')
      console.log('exit')
    }
  }
}
/*function delCookie(name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval=getCookie(name);
    if(cval!=null)
        document.cookie= name + "="+cval+";expires="+exp.toGMTString();
}*/

</script>