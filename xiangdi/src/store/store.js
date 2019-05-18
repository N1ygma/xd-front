import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    count: 0,
    selectPro: {},
    arList:[],
    selectMusic:{
      address: "http://localhost:8090/music/Others/Sweeter Than Fiction (From  One Chance ).mp3",
      album: "Others",
      duration: "3:54",
      id: 1,
      index: 0,
      item1: "",
      item2: "",
      name: "Sweeter Than Fiction (From  One Chance )",
    }
  },
  getters: {
    selectProduct(state) {
      return state.selectPro;
    },
    selectArList(state){
      return state.arList
    },
    getSelectMusic(state){
      return state.selectMusic
    }

  },
  mutations: {
    setArList(state,item){
      state.arList=item
    },
    seSelectMusic(state,item){
      state.selectMusic=item
    },
    setClassesKind(state, item) {
      state.classesKind = item;
    },
  },
});
export default store;
