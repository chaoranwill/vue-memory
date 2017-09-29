<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  mounted() {
    this.checkLogin()
  },
  methods: {
    checkLogin() {
      console.log(getCookie('user'))
      let user = getCookie('user')
      if (user) {
        this.$router.push('/memory')
      }
    }
  }
}
var setCookie = function (name,value) {
    var Days = 30;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days*24*60*60*1000);
    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
}
var getCookie = function (c_name) {
  if (document.cookie.length>0) {
    var c_start=document.cookie.indexOf(c_name + "=")
    if (c_start!=-1) {
      c_start=c_start + c_name.length+1;
      var c_end=document.cookie.indexOf(";",c_start)
      if (c_end==-1) c_end=document.cookie.length
      return unescape(document.cookie.substring(c_start,c_end))
    }
  }
  return null
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
