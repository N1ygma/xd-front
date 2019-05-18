<template>
  <div class="musics-page">
    <div class="musics-page-child-box">
      <ul>
        <li class="col-header">
          <span>
            <p class="col-1">
              下载
            </p>
            <p class="col-2">
              歌曲名称
            </p>
            <p class="col-3">
              专辑名称
            </p>
            <p class="col-4">
              操作
            </p>
            <p class="col-5">
              歌曲时长
            </p>
          </span>
        </li>
        <li class="value" v-for="(item,i) in arrList" :key="i">
          <span>
            <p @click="next()" class="first-left-icon">
              <i class="iconfont icon-cloud-download "></i>
            </p>
            <p @click="next()" class="music-title">
              {{item.name}}
            </p>
            <p class="book-title">
              {{item.album}}
            </p>
            <p class="singer-name">
              <i @click="next()" class="iconfont icon-gengduo1 "></i>
              <i @click="next()" class="iconfont icon-fenxiang1 "></i>
              <i @click="next()" class="iconfont icon-detail-add "></i>
              <i @click="next()" class="iconfont icon-webduanmobancaozuo_qiyong "></i>
            </p>
            <p class="time-long">
              {{item.duration}}
            </p>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Api from '@/api/xdApi'

import { Message } from 'element-ui';

export default {
  data(){
    return {
      arrList:[]
    }
  },
  activated() {
    debugger
    this.fetchPage()
  },
  mounted() {
    debugger
    this.fetchPage()
  },
  methods: {
    fetchPage(){
        Api.getAllMusics().then(res=>{
        console.log(res.data)
        this.arrList=res.data
        })
    },
    next() {
      const options = {
        message: '功能开发中......',
        duration: 1000,
        center: true,
        type: 'warning',
      };
      Message(options);
    },
  },
};
</script>
<style lang="stylus">
liheight=40px
.musics-page{
  width 100%
  .musics-page-child-box{
    margin 0 auto
    width bodywidth
    ul{
      li{
        height liheight
        line-height liheight
        span{
          display flex
          flex-direction row
          p{
            flex-grow 0
          }
          p:nth-child(1){
            width 10%
            cursor pointer
            
          }
          p:nth-child(2){
            flex-grow 1
            width 30%
            cursor pointer

          }
          p:nth-child(3){
            width 15%
          }
          p:nth-child(4){
            width 20%
            cursor pointer

          }
          p:nth-child(5){
            width 10%
          }
        }
      }
      li:nth-child(odd){
        background-color #f6f6f6
      }
      // .col-header{
      //   span{

      //   }
      // }
      // .value{
      //    span{

      //    }
      //  }
    }
  }
}
</style>
