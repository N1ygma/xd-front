<template>
  <div id="app">
    <router-view/>
    <div id="toast-box-globel">
      <p>
      </p>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line
import Router from '@/api/common';
export default {
  name: 'App',
};
</script>
<style lang="stylus">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#toast-box-globel{
        background $toastbgcolor
        position fixed
        bottom -80px
        z-index 99
        width 80%
        padding 10px 0px
        border-radius 10px
        left 10%
        z-index 99
        transition all 0.3s
        p{
            color #fff
            display block
            padding 0 10%
            text-align center
        }
}
</style>
