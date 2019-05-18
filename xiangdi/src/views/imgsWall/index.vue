<template>
  <div class="imgs-wall-box vcontent">
    <div class="imgs-wall-child-box">
      <div @click="selectedThis(item)" v-for="(item,i) in list" :key='i' class="img-box">
          <img :src="item.address" alt="">
      </div>
    </div>
    <div @click="closeMask()" v-if="isMask" class="img-detail-box app-page">
      <div class="img-box">
        <img :src="selectedImg" alt="">
      </div>
    </div>
  </div>
</template>
<script>
import ImgsApi from '@/api/imgsApi';
import Api from '@/api/xdApi'


export default {
  data() {
    return {
      selectedImg: '',
      isMask: false,
      list: [],
    };
  },
  mounted() {
    this.getImgs();
  },
  methods: {
    selectedThis(item) {
      this.selectedImg = item.address;
      this.isMask = !this.isMask;
    },
    closeMask() {
      this.isMask = !this.isMask;
    },
    getImgs() {
      Api.GetAllPics().then(res=>{
        this.list=res.data
      })
      // const data = {
      //   page: 1,
      //   size: 100,
      // };
      // ImgsApi.GetImgs(data).then((res) => {
      //   this.list = res.data;
      // });

    },
  },
};
</script>
<style lang="stylus">
.imgs-wall-box{
  width 100%
  .imgs-wall-child-box{
     width bodywidth
     margin 0 auto
     -webkit-column-count: 4;
     -moz-column-count: 4;
     column-count: 4;
     -moz-column-gap:20px;
     -webkit-column-gap:20px;
     column-gap:20px;
     padding: 10px;
     padding-bottom 30px
    .img-box{
      transition all 0.5s
      // border: solid 1px #ccc;
      border-radius: 4px;
      margin-bottom: 15px;
      cursor: pointer;
      box-shadow 2px 2px 2px #eee
      // padding: 15px;
        img{
          width: 100%;
          border: solid 1px #ccc;
          border-radius: 4px;
          box-shadow 2px 2px 2px #bbb

        }
    }
    .img-box:hover{
      box-shadow 8px 8px 10px #aaa
    }
  }
  .img-detail-box{
    position fixed
    top 0px
    left 0px
    width 100%
    height 100%
    z-index 88
    background-color rgba(0,0,0,0.7)
    .img-box{
      width 50%
      height 80%
      margin 0 auto
      position relative
      top 60px
      img{
        height 100%
      }
    }
  }
}
</style>
