<template>
  <div class="home-page app-page">
    <!-- main header -->
    <div class="home-header-box">
      <div class="header-box-header">
        <div  class="img-box">
          <img src="../../assets/imgs/a8773912b31bb051439bc5b33a7adab44bede0ea.jpg" alt="头像">
        </div>
      </div>
      <!-- header-body -->
      <div class="header-box-body">
        <div class="center-box">
          <tabs @tabEmit="tabEmit" :list='list'/>
        </div>
      </div>
      <!-- header footer -->
      <div class="header-box-footer vcontent">
        <div class="search-box">
          <input
          @focus="inputFocus()"
          @blur="inputBlur()" :class="isFocus ? 'focus-input': ''" type="text" placeholder="search">
        </div>
      </div>
    </div>
    <!-- 首页板块 -->
    <main-page v-if="tab==0"/>
    <!-- singer detail  歌手简介-->
    <singer-detail v-if="tab==1"/>
    <!-- main body -->
    <div  v-if="tab==2" class="body-box vcontent">
      <div class="main-body-box">
    <!-- main body content 文章板块-->
        <div   class="cards-box">
          <card v-for="(item,i) in list1" :key='i' :info="item"/>
        </div>
        <div class="page-ctrl">
          <div class="page-ctrl-icon">
            <p> <i class="iconfont icon-fanhui2"></i> </p>
            <p> <i @click="goNext()" class="iconfont icon-jiantouyou"></i>  </p>
          </div>
        </div>
      </div>
    </div>
    <!-- main footer -->
    <div class="main-footer-box">
      <p>
        ©2006-2019  赵雷的个人官方网站  |  湘ICP备15020338号  站长统计|  MyLeiZi.Com
      </p>
    </div>
    <!-- mask -->
    <div v-if="loading" v-loading="loading"
       element-loading-text="拼命加载中"
       element-loading-spinner="el-icon-loading"
       element-loading-background="rgba(0,0,0, 0.9)"
       class="mask-box">

    </div>
  </div>
</template>

<script>
// eslint-disable-next-line import/no-unresolved
import CardsApi from '@/api/titleCard';
import MainPage from '../main/index';
import SingerDetail from '../singerInfo/index';
import Tabs from '@/components/common-bottom-tabs';
import TabsList from '@/data/tabs';
import Card from '@/components/article';
// import { Loading } from 'element-ui';


export default {
  name: 'sasa',
  components: {
    Tabs,
    Card,
    SingerDetail,
    MainPage,
  },
  data() {
    return {
      tab: 0,
      isFocus: false,
      loading: false,
      list1: [],
      list: [
      ],
    };
  },
  mounted() {
    this.feacthPage();
    this.getCards();
  },
  methods: {
    feacthPage() {
      this.list = TabsList; // tabs list
    },
    getCards() {
      CardsApi.CardsApi().then((res) => {
        console.log(res);
        this.list1 = res.arr;
      });
    },
    goNext() {
      this.loading = true;
      this.getCards();
      setTimeout(() => {
        this.loading = false;
      }, 2000);
    },
    tabEmit(e) {
      console.log(e);
      this.tab = parseInt(e);
    },
    inputFocus() {
      this.isFocus = true;
    },
    inputBlur() {
      this.isFocus = false;
    },
  },
};
</script>

<style lang="stylus">

imgWidth=140px
borderRadius=70px
.home-page{
  position absolute
  width 100%
  height 100%
  top 0px
  left 0px
  .home-header-box{
    background-color #333
    display flex
    flex-direction column
    .header-box-header{
      padding 5px 0 5px 0
      .img-box{
        width imgWidth
        height imgWidth
        border-radius borderRadius
        overflow hidden
        margin 0 auto
        img{
          width 100%
        }
      }
    }
    .header-box-body{
      width 100%
      .center-box{
        width 780px
        margin 0 auto
      }
    }
    .header-box-footer{
      width 100%
      padding 10px 0 20px 0
      .search-box{
        input{
          width 100px
          background-color #333
          border 0
          border-left 2px solid #df846c
          outline none
          padding-left 5px
          height 25px
          line-height 25px
          transition all 0.5s
        }
        .focus-input{
          width 240px
        }
      }
    }
  }
  .body-box{
    background-color #ddd
    .main-body-box{
      width bodywidth
      margin 0 auto
      .cards-box{
        display flex
        flex-flow row wrap
        padding 10px
        min-height 300px
      }
      .page-ctrl{
        width bodywidth
        height 50px
        line-height 50px
        margin 0 auto
        .page-ctrl-icon{
          display flex
          flex-direction row
          p{
            flex-grow 1
            i{
              cursor pointer
              display inline-block
              width 80px
              height 30px
              text-align center
              line-height 30px
              background-color #bbb;
              border-radius 8px
              color #f8f8f8
              transition all 0.2s
              font-size 14px
            }
            i:hover{
              background-color #aaaaaa
              color #f5f5f5
              font-size 18px
            }
          }
          p:nth-child(1){
            i{
              float right
              margin-right 20px
            }
          }
          p:nth-child(2){
            i{
              float left
              margin-left 20px
            }
          }

        }
      }
    }
  }
  .main-footer-box{
    height 80px
    background-color #333
    p{
      height 80px
      line-height 80px
      color #ccc
      font-size 12px
    }
  }
  .mask-box{
    z-index 999
    position fixed
    width 100%
    height 100%
    top 0px
    left 0
    bottom 0px
  }
}
</style>
