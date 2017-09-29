<template>
  <div class="g-login">
    <div class="cover">
      <div class="login">
        <div class="login-bd">
          <div class="user">
            <div class="icon">
              <i class="fa fa-user-o"></i>
            </div>
            <input id="user" :class="{'active': isUserActive}" type="text" name="" v-model="userName" @keyup="removeActive($event)">
          </div>
          <div class="pwd">
            <div class="icon">
              <i class="fa fa-key"></i>
            </div>
            <input id="pwd" :class="{'active': isPwdActive}" type="password" name="" v-model="pwd" @keyup="removeActive($event)">
          </div>

          <button class="u-btn" @click="handleLogin">Sign In</button>
        </div>
      </div>
      <div class="g-btn">
        <span>I'm a guest</span>
        <i class="fa fa-chevron-right"></i>
      </div>
    </div>

  </div>
</template>
<script>
import { setCookie } from '@/common/js/config';
export default {
  data() {
    return {
      userName:'',
      pwd:'',
      isUserActive: false,
      isPwdActive: false
    }
  },
  methods: {
    handleLogin() {
      if (!this.userName) {
        this.isUserActive = true
        return
      }else if(!this.pwd) {
        this.isPwdActive = true
      }else {
        if (this.userName == 'ahang' && this.pwd == 'ahang') {
          setCookie('user','ahang')
          this.$router.push('/memory')
        }else if (this.userName == 'friend' && this.pwd == '333') {
          setCookie('user','friend')
        }
      }
    },
    removeActive(e) {
      console.log(e.target.id)
      let bar = e.target.id
      if (bar === 'user') {
        this.isUserActive = false
      }else {
        this.isPwdActive = false
      }

    }
  }
}
</script>
<style lang="scss">
@import '../common/css/common';
.g-login {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('../assets/background.jpg');
  background-size: 100% 100%;
  .cover {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: RGBA(100,100,100,.3);
  }

  .login {
    width: 100%;
    height: 100%;
    vertical-align: middle;
    display: table;
    text-align: center;
    color: #fff;
    .login-bd {
      display: table-cell;
      vertical-align: middle;
      padding-top: rem(130);
      position: relative;
      font-size: 18px;
      .active {
        border: rem(4) solid RGBA(222,98,98,.7)!important;
      }
      .icon {
        width: rem(100);
        line-height: rem(120);
        position: absolute;
      }
      .fa {
        
      }
      .user, .pwd {
        width: 70%;
        margin: auto;
        input:-webkit-autofill, textarea:-webkit-autofill, select:-webkit-autofill, 
        input {
          width: 100%;
          height: rem(120);
          border: rem(2) solid RGBA(248,248,248,.2);
          box-shadow: 0 0 2px RGBA(248,248,248,.2);
          //background-color: RGBA(150,150,150,.4);
          background-color: RGBA(62,54,51,.85);
          padding: 0 rem(100);
        }
      }
      .user input {
        border-bottom: 0;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
      }
      .pwd input {
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
      }
      button {
        font-size: 22px;
        margin-top: rem(80);
        width: 70%;
        height: rem(120);
        border-radius: 8px;
        background-color: RGB(222,98,98);
        border: 0;
      }
    }
  }
  .g-btn {
    position: absolute;
    bottom: 0;
    width: 100%;
    line-height: rem(120);
    height: rem(120);
    color: #fff;
    font-size: 20px;
    text-align: left;
    text-indent: rem(150);
    background-color: RGBA(48,48,48,.9);
    .fa-chevron-right {
      position: absolute;
      right: rem(100);
      line-height: rem(120);
    }
  }
}
</style>