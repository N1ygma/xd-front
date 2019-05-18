<template>
  <div class="article-box">
    <div class="article-box-child">
      <!-- title -->
      <div class="header-title">
        <span>{{info.title}}</span>
        <span>{{info.time}}</span>
      </div>
      <!-- img box -->
      <div class="article-img-box">
        <div class="img-box">
          <img src="../assets/imgs/a8773912b31bb051439bc5b33a7adab44bede0ea.jpg" alt="pic">
        </div>
      </div>
      <!-- content box -->
      <div class="article-content-box">
        <p>
          {{info.text}}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    info: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
<style lang="stylus">
titleHeight=30px
fontColor=#414141
.article-box{
  width 280px
  padding 10px 20px
  .article-box-child{
      display flex
      flex-direction column
      // border 1px solid #ccc
      border-radius 2px
      background-color #fff
      padding 10px
      box-shadow 2px 2px 2px #bbb
      cursor pointer
      transition all 0.3s
    .header-title{
      display flex
      flex-direction row
      padding 10px 0

      span{
        height titleHeight
        line-height titleHeight
        flex 1
      }
      span:nth-child(1){
        text-align left
        color fontColor
        font-size 15px
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap
      }
      span:nth-child(2){
        max-width 100px
        text-align right
        color #aaa
      }
    }
    .article-img-box{
      height 260px
      overflow hidden
      img{
        width 100%
      }
    }
    .article-content-box{
      width 100%
      max-height 126px
      padding 10px 0
      overflow hidden
      p{
        font-size 13px
        letter-spacing 1px
        text-align left
        line-height 20px
        display block
        height 100%
        overflow:hidden;
        text-overflow:ellipsis;
        white-space: wrap
        vertical-align: baseline;
        padding-bottom 20px
        color #666
      }
    }
  }
  .article-box-child:hover{
    box-shadow 8px 8px 18px #bbb
  }
}
</style>
