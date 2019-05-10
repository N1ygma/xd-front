// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
// import Vconsole from 'vconsole';
import { LoadingPlugin } from 'vux';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/css/reset.styl';
import '@/assets/css/keyframes.styl';
import '@/assets/icon/iconfont.css';
import store from './store/store';
import App from './App';
import router from './router';
// eslint-disable-next-line import/extensions
import Utils from './utils/util.js';

Vue.use(LoadingPlugin);
Vue.use(ElementUI);
// const vConsole = new Vconsole();
// export default vConsole;
Vue.config.productionTip = false;
Vue.prototype.Utils = Utils;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>',
});
