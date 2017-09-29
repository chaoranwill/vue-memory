<template>
  <div class="m-menu">
    <div class="menu-hd">
      <img src="../../assets/head.png">
      <p>lichaoran</p>
    </div>
    <div class="list">
      <div v-for='item in menus' @click="onUpdatetitle(item.title)">
        <router-link :to="item.route" exact class="item">
          <u-menu-item :title=item.title>
            <div class="icon pull-left">
              <i :class='"fa fa-"+item.icon'></i>
            </div>
          </u-menu-item>
        </router-link>
      </div>
      <u-menu-item title='exit' @click.native="onExit">
        <div class="icon pull-left">
          <i class='fa fa-power-off'></i>
        </div>
      </u-menu-item>
    </div>
  </div>
</template>

<script>
export default {
  name: 'm-menu',
  props: ['menus', 'on-updatetitle', 'on-exit']
}
</script>