<template>
  <div class="home-page app-page">
    <div class="home-header-box-father">
      <!-- main header -->
    <div class="home-header-box">
      <div class="header-box-header">
        <div  class="img-box">
          <img @mouseover="ImgMouseOver()"  src="../../assets/imgs/a8773912b31bb051439bc5b33a7adab44bede0ea.jpg" alt="头像">
        </div>
        <!--  -->
        <!-- music ctrl -->
      <div :class="isShowPlayer?'music-play-box player-box-fa':'music-play-box-no player-box-fa'">
        <p class="title-box">{{musicSrc.name}}</p>
        <!-- 控制器模块 -->
        <div  @mouseout="ImgMouseOut()" class="player-box">
          <p @click="onAMusic(musicSrc.index)"><i class="iconfont icon-shangyishou"></i></p>
          <p @click="pausePlayer()" id="pause"><i :class="!playing?'iconfont icon-play-round':'iconfont icon-zantingtingzhi'"></i></p>
          <p @click="nextMusic(musicSrc.index)"><i class="iconfont icon-xiayishou1"></i></p>
        </div>
        <!-- 多媒体标签 -->
        <video controls='controls' style="height:0" name="media" id="video" autoplay="autoplay">
         <source :src="musicSrc.address" type="audio/mpeg" />
        </video>
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
          @blur="inputBlur()" :class="isFocus ? 'focus-input': ''" v-model="searchContent" type="text" placeholder="search">
        </div>
        <div class="btn-box">
        <button @click="searchElse()" v-if="showButton" class="search-btn">search</button>
        </div>
      </div>
    </div>
    </div>

    <!-- 首页板块 -->
    <main-page v-if="tab==0"/>
    <!-- singer detail  歌手简介-->
    <singer-detail v-if="tab==1"/>
    <!-- main body -->
    <div 
       v-loading="loading1"
       element-loading-text="拼命加载中"
       element-loading-spinner="el-icon-loading"
       element-loading-background="rgba(250,250,250, 0.8)"
       v-if="tab==2" class="body-box vcontent">
      <div class="main-body-box">
    <!-- main body content 文章板块-->
        <div  class="cards-box">
          <card v-for="(item,i) in list1" :key='i' :info="item" @click.native="goDetail(item)"/>
        </div>
        <div class="page-ctrl">
          <div class="page-ctrl-icon">
            <p> <i class="iconfont icon-fanhui2"></i> </p>
            <p> <i @click="goNext()" class="iconfont icon-jiantouyou"></i>  </p>
          </div>
        </div>
      </div>
    </div>
    <!-- imgs wall 照片墙 -->
    <imgs-wall v-if="tab==3"/>
    <!-- 音乐试听 -->
    <musics-page v-if="tab==4"/>
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
    <div class="circle-ctrl-box">
      <div @click="showCtrl()" class="plus-circle">
        <i class="iconfont icon-jia "></i>
      </div>
      <div v-if="isShowCtrl" class="ctrl-icon vcontent">
        <ul>
          <li @click="onAMusic(musicSrc.index)">
            <i class="iconfont icon-shangyishou"></i>
          </li>
          <li @click="pausePlayer()">
            <i :class="!playing?'iconfont icon-play-round':'iconfont icon-zantingtingzhi'"></i>
          </li>
          <li  @click="nextMusic(musicSrc.index)">
            <i class="iconfont icon-xiayishou1"></i>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Api from '@/api/xdApi'

// eslint-disable-next-line import/no-unresolved
import MusicsPage from '../musicsPage/index';
import ImgsWall from '../imgsWall/index';
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
    ImgsWall,
    MusicsPage,
  },
  data() {
    return {
      searchContent:'',
      loading1:false,
      showButton:false,
      isShowCtrl: false,

      isShowPlayer: false,
      playing: false,
      tab: 0,
      isFocus: false,
      loading: false,
      musicArr: [
        {
          title: '这是第一首',
          src: 'http://106.14.175.12:8090/music/1.mp3',
          index: 0,
        },
        {

          title: '这是第二首歌',
          src: 'http://106.14.175.12:8090/music/2.mp3',
          index: 1,
        },
        {
          title: '这是第三首歌',
          src: 'http://localhost:8090/music/Others/Taylor%20Swift%20-%20Beautiful%20Eyes.mp3',
          index: 2,
        },
        {
          title: '这是第三首歌',
          src: 'http://localhost:8090/music/Others/Taylor%20Swift%20-%20Beautiful%20Eyes.mp3',
          index: 2,

        },
      ],
      list1: [],
      list: [
      ],
    };
  },
  mounted() {
    this.feacthPage();

    this.loading1 = true;
      this.getCards();
      setTimeout(() => {
        this.list1 = this.$store.getters.selectArList;
        this.loading1 = false;
      }, 2000);

  },
  beforeMount() {
    
  },
  watch: {
    'this.$store.getters.getSelectMusic':function(){
      this.musicSrc=this.$store.getters.getSelectMusic
    }
  },
  computed: {
    musicSrc(){
      debugger
      return this.$store.getters.getSelectMusic
      
    }
  },
  activated() {
    this.list1 = this.$store.getters.selectArList;
  },
  methods: {
    feacthPage() {
      Api.getAllMusics().then(res=>{
        console.log(res.data)
        this.musicArr=res.data
        this.musicArr.forEach((ele,index)=>{
          ele.index=index
        })
        console.log(this.musicArr)
        this.$store.commit('seSelectMusic',this.musicArr[0])
        console.log('sasa',this.$store)
        console.log(this.musicSrc)
        // this.musicSrc=this.musicArr[0]
        })
      this.list = TabsList; // tabs list
      // console.log(this.$route.params.tab)
      if(this.$route.params.tab){
        this.tab=this.$route.params.tab
      }
      this.getCards()
    },
    searchElse(){

    },
    showCtrl() {
      this.isShowCtrl = !this.isShowCtrl;
    },
    goDetail(item) {
      this.$router.push({
        name:'Detail',
        params:{
          article:item
        }
      })
    },
    // 多媒体播放
    pausePlayer() {
      const pause = document.getElementById('video');
      if (pause.paused == true) {
        pause.play();
        this.playing = true;
      } else {
        pause.pause();
        this.playing = false;
      }
    },
    // 上一首
    onAMusic(i) {
      i=i-1
      if (i > 0) {
        this.$store.commit('seSelectMusic',this.musicArr[i])
        // this.musicSrc = this.musicArr[i - 1];
        console.log(this.musicSrc)
        const pause = document.getElementById('video');
        this.playing = true;
        pause.load();
      }else{
        alert('已经到第一首了')
      }
    },
    // 下一首
    nextMusic(i) {
      i=i+1
      if (i < this.musicArr.length) {
        // this.musicSrc = this.musicArr[i + 1];
        this.$store.commit('seSelectMusic',this.musicArr[i])
        console.log(this.musicSrc)
        const pause = document.getElementById('video');
        this.playing = true;
        pause.load();
      }else{
        alert('已经是最后一首了')
      }
    },
    // 播放器显示控制
    ImgMouseOver() {
      if (this.isShowPlayer == true) {
        this.isShowPlayer = false;
      } else {
        this.isShowPlayer = true;
      }
    },
    ImgMouseOut() {
      setTimeout(() => {
        this.isShowPlayer = false;
      }, 10000);
    },
    getCards() {
      Api.GetAllArticles().then(res=>{
      //  this.list1 = res.data;
       this.$store.commit('setArList',res.data)
    })

    },
    goNext() {
      this.loading = true;
      // this.getCards();
      setTimeout(() => {
        this.loading = false;
      }, 2000);
    },
    tabEmit(e) {
      console.log(e);
      this.loading = true;
      setTimeout(() => {
        this.tab = parseInt(e);
        this.loading = false;
      }, 1000);
    },
    inputFocus() {
      this.isFocus = true;
      this.showButton=true
    },
    inputBlur() {
      this.isFocus = false;
      setTimeout(() => {
        this.showButton=false
      }, 1000);
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
  .home-header-box-father{
    width 100%
    background-color #333
    .home-header-box{
    width bodywidth
    margin 0 auto
    background-color #333
    display flex
    flex-direction column
    .header-box-header{
      cursor pointer
      height 144px
      padding 5px 0 5px 0
      display flex
      flex-direction row
      .img-box{
        flex-grow 1
        overflow hidden
        img{
          width 100%
          width imgWidth
          height imgWidth
          border-radius borderRadius
        }
      }
      .player-box-fa{
        width 30%
        .title-box{
          height 50px
          line-height 60px
          white-space:nowrap; 
          overflow:hidden; 
          text-overflow:ellipsis;
          font-size 20px
          color #fff
        }
        .player-box{
          padding 0 20px
          height 100%
          line-height 84px
          display flex
          flex-direction row
          background-color #333
          overflow hidden
          p{
            flex-grow 1
            i{
              font-size 26px
              color #fff
            }
          }
        }
      }
      .music-play-box{
        width 30%
        overflow hidden
        transition width 0.5s

      }
      .music-play-box-no{
        width 0
        overflow hidden
        transition width 0.5s
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
      display flex
      flex-direction row
      .search-box{
        flex-grow 1
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
          float right
        }
        .focus-input{
          width 240px
        }
      }
      .btn-box{
        flex-grow 1
        button{
          float left
          background none
          border 1px solid #df846c
          width 70px
          height 25px
          line-height 25px
        }
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
  .circle-ctrl-box{
    position fixed
    width 50px
    height 50px
    bottom 70px
    right 50px
    border-radius 25px
    z-index 999
    background-color #333
    .plus-circle{
      cursor pointer
      i{
        font-size 17px
        color #fff
        height 50px
        line-height 50px
      }
    }
    .ctrl-icon{
      position relative
      top -180px
      ul{
        li{
          height 30px
          line-height 30px
          width 100%
          margin-top 10px
          border-radius 5px
          background-color #ccc
          cursor pointer
          i{
            font-size 15px
          }
        }
        li:hover{
          background-color #aaa
        }
      }
    }
  }
}
</style>
