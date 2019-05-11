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
        <li class="value" v-for="i in 20" :key="i">
          <span>
            <p @click="next()" class="first-left-icon">
              <i class="iconfont icon-cloud-download "></i>
            </p>
            <p @click="next()" class="music-title">
              I Knew You Were Trouble
            </p>
            <p class="book-title">
              2017-1-1-1
            </p>
            <p class="singer-name">
              <i @click="next()" class="iconfont icon-gengduo1 "></i>
              <i @click="next()" class="iconfont icon-fenxiang1 "></i>
              <i @click="next()" class="iconfont icon-detail-add "></i>
              <i @click="next()" class="iconfont icon-webduanmobancaozuo_qiyong "></i>
            </p>
            <p class="time-long">
              02:30
            </p>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { Message } from 'element-ui';

export default {
  methods: {
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
            flex-grow 1
          }
          .first-left-icon, .col-1{
            flex 0 80px
            width 80px
            cursor pointer
            i{
             font-size 16px
             transition all 0.2s
            }
          }
          .first-left-icon:hover{
            i{
              font-size 22px
              color #333
              font-weight bold
            }
          }
          .music-title{
            text-align center
            cursor pointer
          }
          .book-title, .col-3{
            text-align right
          }
          .singer-name, .col-4{
            text-align right
            display flex
            flex-direction row-reverse
            i:nth-child(4){
              font-size 18px
            }
            i:nth-child(2){
              font-size 14px
            }
            i{
              flex 0 40px
              cursor pointer
              font-size 16px
              font-weight bold

            }
          }
          .time-long, .col-5{
            flex 0 160px
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
