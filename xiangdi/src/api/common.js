/* eslint-disable */ 
import Router from 'vue-router';


// toast 弹框组件
Router.prototype.zyToast = (text, timeout = 2000) => {
  const a = document.getElementById('toast-box-globel');
  const b = a.getElementsByTagName('p');
  a.style.bottom = '80px';
  b[0].innerHTML = text;
  setTimeout(() => {
    a.style.bottom = '-80px';
  }, timeout);
};

// 前进方法
Router.prototype.zyPagePush = function a(pageName, timeout = 0) {
  const that = this;
  setTimeout(() => {
    that.push(pageName);
  }, timeout);
};

// 后退方法
Router.prototype.zyPageBack = function b(pages = 1) {
  this.go(0 - pages);
};

// messages 组件
Router.prototype.zyMessage = function c(text) {
  const app = document.getElementById('app')
  const ele = app.createElement('p')
  ele.className = 'messageBox'
  ele.style.padding='8px 10px'
  ele.style.backgroundColor = 'rgba(0,0,0,0.8)'
  ele.style.borderRadius = '8px'
  ele.innerText='text'
  ele.style.textAlign='center'
}
export default Router;
