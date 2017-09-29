import Vue from 'vue';
import Vuex from 'vuex';
import * as getters from './getters';
import { getImgList, getLoginInfo } from './img';

Vue.use(Vuex);

const NAME_TITLE = [
  {
    'title': 'memory',
    'route':'/memory',
    'icon': 'heart'
  },
  {
    'title': 'welfare',
    'route':'/welfare',
    'icon': 'gift'
  }
];

const USER_INFO = [{
    'name': 'chaoran',
    'pwd': '333333'
  },
  {
    'name': 'guest',
    'pwd': '444444'
  }];

const state = {
  'headerTitle': 'memory',
  'menus': NAME_TITLE,
  'menuShow': false,
  'loadingShow': false,
  'imgList': getImgList(),
  'users': USER_INFO
};

const mutations = {
  UPDATE_TITLE(state, title) {
    console.log(title)
    state.headerTitle = title
  },
  UPDATE_MENUSHOW(state) {
    state.menuShow = !state.menuShow
  }
};

export default new Vuex.Store({
  state,
  mutations,
  getters
});