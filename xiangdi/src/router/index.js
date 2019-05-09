/* eslint-disable */
import Vue from 'vue';
import Router from 'vue-router';
// entry page
import Main from '@/views/main/index'
import Detail from '@/views/detailPage/index'

Vue.use(Router);

export default new Router({
  routes: [

    {
      path: '/',
      name: 'Main',
      component: Main,
    },
    {
      path: '/Detail',
      name: 'Detail',
      component: Detail,
    },
  ],
});
