import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    count: 0,
    selectPro: {},

  },
  getters: {
    selectProduct(state) {
      return state.selectPro;
    },

  },
  mutations: {

    setClassesKind(state, item) {
      state.classesKind = item;
    },
  },
});
export default store;
