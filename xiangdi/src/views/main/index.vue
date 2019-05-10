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
        <ul @click="next()">
          <li :class="listIndex==i?'selected-music':''" @click="selectedMusic(i)" v-for="(item,i) in musics" :key='i'>
            <p>
            {{item.title}}
            </p>
          </li>
        </ul>
      </div>
    </div>
    <!-- 新闻预览 -->
    <div @click="next()" v-for="i in 8" :key='i' class="article-fa-box">
      <div class="article-box">
        <el-card class="box-card">
          <div  class="text-content">
            <div class="content-title">
              泰勒·斯威夫特：乡村音乐中的真性情
            </div>
            <div class="content-body">
              <p>
              2015年4月获第50届乡村音乐学院奖50周年里程碑奖 [13-14]  ；5月，成为2015福布斯全球权势女性榜上榜最年轻女性 [15-17]  。2016年登顶《福布斯》全球百大名人榜榜首 [18]  。
              <a @click="next()">（点击查看更多）</a>
              </p>
            </div>
          </div>
        </el-card>
      </div>
    </div>
  </div>
  </div>
</template>
<script>
import { Message } from 'element-ui';

export default {
  data() {
    return {
      listIndex: 0,
      item: [
        {
          src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557519033293&di=ab8499256f48fa39cdbbed0abc201d89&imgtype=0&src=http%3A%2F%2Fgss0.baidu.com%2F-fo3dSag_xI4khGko9WTAnF6hhy%2Fzhidao%2Fpic%2Fitem%2F5366d0160924ab183966e41b34fae6cd7b890bad.jpg',
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
     next(){
      let options={
        message:'功能开发中......',
        duration:1000,
        center:true,
        type:'warning'
      }
      Message(options)
    }
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
        box-shadow 3px 3px 3px #ccc
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
        background-color #eee
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
  .article-fa-box{
    .article-box{
      width 100%
      padding 10px
      .box-card{
        cursor pointer
        .el-card__header{
          padding 10px
          .clearfix{
          display flex
          flex-direction row
          span{
            flex 1
            line-height 40px
            color: #409eff;
            text-align left
          }
          .el-button{
            width 90px
            color: #409eff;
          }
        }
        }
        .text-content{
          .content-title{
            font-size 17px
            font-weight bold
          }
          .content-body{
            line-height 27px
            p{
              margin-top 5px
              line-height 29px
              text-indent 25px
              text-align left
              letter-spacing 1px
              a{
                color: #409eff;
                font-size 12px
              }
            }
          }
        }
      }
      .box-card:hover{
          box-shadow 8px 8px 12px #aaa
          .el-card__body{
            box-shadow -8px -8px 12px #aaa
          }
      }
    }
  }
}
}

</style>
