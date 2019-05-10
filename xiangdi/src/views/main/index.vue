<template>
<div class="main-page-father-box">
  <div class="main-page-component app-page">
    <!-- banner box -->
    <div class="banner-fa-box">
      <div class="banner-box">
        <div class="block">
          <el-carousel trigger="click" height="300px">
            <el-carousel-item v-for="(item,i) in item" :key="i">
              <img :src="item.src" alt="pic">
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
      <div class="music-box">
        <p class="list-box">今日推荐</p>
        <ul>
          <li :class="listIndex==i?'selected-music':''" @click="selectedMusic(i)" v-for="(item,i) in musics" :key='i'>
            <p>
            {{item.title}}
            </p>
          </li>
        </ul>
      </div>
    </div>
    <!-- 新闻预览 -->
    <div class="article">
      <div class="article-box">

      </div>
    </div>
  </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      listIndex: 0,
      item: [
        {
          src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557487984896&di=5016d2856f1d05eba513aadc3f928353&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201501%2F16%2F20150116202531_jSt4S.thumb.700_0.jpeg',
        },
        {
          src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557487984891&di=e433794d60b61605733a4fd5546241e0&imgtype=0&src=http%3A%2F%2Fwww.deyu.ln.cn%2Fimages%2Fmvqxg6lsmvqwiltqnaxdcmrwfzxgk5a%2FO_oU3QqM1xTljAr3Rw461A%3D%3D%2F7916600268221654230.jpg',
        },
        {
          src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557487984888&di=005dff3e0e6bf3e10e1238de9428bb38&imgtype=0&src=http%3A%2F%2Fimg5q.duitang.com%2Fuploads%2Fitem%2F201407%2F18%2F20140718184331_yay8Z.thumb.700_0.jpeg',
        },
        {
          src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557488104757&di=116a49b1b5db0f31743c60b43d49ab23&imgtype=0&src=http%3A%2F%2Fupload.cankaoxiaoxi.com%2F2016%2F0616%2F1466048560612.jpg',
        },
      ],
      musics: [
        {
          title: 'I Knew You Were Trouble',
          src: '',
        },
        {
          title: 'I Knew You Were Trouble',
          src: '',
        },
        {
          title: 'I Knew You Were Trouble',
          src: '',
        },
        {
          title: 'I Knew You Were Trouble',
          src: '',
        },
        {
          title: 'I Knew You Were Trouble',
          src: '',
        },
        {
          title: 'I Knew You Were Trouble',
          src: '',
        },

      ],
    };
  },
  methods: {
    selectedMusic(i) {
      this.listIndex = i;
    },
  },
};
</script>

<style lang="stylus">
.main-page-father-box{
  // background-color #ddd

  .main-page-component{
  width bodywidth
  margin 0 auto
  background-color #fff
  .banner-fa-box{
    padding 10px
    width 100%
    display flex
    flex-direction row
    // min-height 500px
    .banner-box{
      width 60%
      .block{
        border-radius 8px
        overflow hidden
      }
    }
    .music-box{
      flex 1
      padding 3px 10px
      display flex
      flex-direction column
      .list-box{
        flex-grow 0
        margin-right 2px
        height 36px
        line-height 36px
        background-color #dfdfdf
        border-left 4px solid #212121
        color #212121
        font-size 13px
        font-weight bold
        text-align left
        padding-left 5px
        letter-spacing 2px
      }
      ul{
        flex-grow 1
        margin-right 2px
        border-radius 7px
        padding 8px 0
        background-color #eee
        padding 8px 10px
        margin-top 5px

        li{
          text-align center
          height 35px
          line-height 35px
          cursor pointer
          margin-top 5px
          background-color #f8f8f8
          border-radius 3px
          transition all 1s
          p{
            text-align left
            padding-left 5px
            font-size 14px
            font-weight 400
            color #777
            transition all 0.5s
          }
        }
        li:hover{
          background-color #212121
          p{
            color #fff
          }
        }
        .selected-music{
          background-color #212121
          p{
            color #fff
          }
        }
      }
    }
  }
}
}

</style>
