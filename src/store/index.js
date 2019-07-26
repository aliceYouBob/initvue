import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios';

Vue.use(Vuex);
Vue.prototype.axios = axios;

export default new Vuex.Store({
  state: {
    
  },
  getters: {
    
  },
  mutations: {
    //格式：类型(名字)+处理函数
    // changetype(state,type) {
    //   //console.log(state)//state对象
    //   state.type = type;
    // }
  },
  actions: {
    /* increment({commit}){
       commit("INCREMENT")
     }*/
  },

  modules: {}
});
