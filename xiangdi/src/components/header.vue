<template>
    <div class="common-header-box">
         <span v-if="!headerObj.noBack" class="common-header-left" @click="$router.zyPageBack()">
           <i class="iconfont icon-fanhui1"></i>
         </span>
         <span v-if="headerObj.noBack" class="common-header-left">
           <i class="iconfont icon-fanhui1"></i>
         </span>
         <span class="common-header-center letter-spacing-header" v-if='!headerObj.isSearch'>
           {{headerObj.title || ''}}
         </span>
         <span class="common-header-center" v-if='headerObj.isSearch'>
           <input type="text" placeholder="搜索">
         </span>
         <span class="common-header-right" @click="isShowSuspension()">
           <i class="iconfont icon-gengduo"></i>
         </span>
         <div v-if='suspensionShow' class='suspension-box'>
           <ul>
             <li v-for="(item, index) in listInfo" :key="index" @click="chooseOne(item)">
               <i :class="item.icon"></i>
               <p>{{item.title}}</p>
             </li>
           </ul>
         </div>
         <div v-if='suspensionShow' class="header-mask" @click="hideMask()"></div>
    </div>
</template>
<script>
export default {
  props: {
    headerObj: {
      type: Object,
      default: () => {
      },
    },
  },
  data() {
    return {
      suspensionShow: false,
      listInfo: [
        {
          icon: 'iconfont icon-saoyisao',
          title: '登录页',
          path: 'Login',
        },
        {
          icon: 'iconfont icon-cloud-download',
          title: '注册页',
          path: 'Join',
        },
        {
          icon: 'iconfont icon-wode',
          title: '主页面',
          path: 'Main',
        },
      ],
    };
  },

  methods: {
    feacthPage() {

    },
    isShowSuspension() {
      this.suspensionShow = !this.suspensionShow;
    },
    hideMask() {
      this.suspensionShow = false;
    },
    chooseOne(item) {
      const that = this;
      setTimeout(() => {
        that.suspensionShow = false;
        this.$router.zyPagePush(item.path);
      }, 200);
    },
  },

};
</script>
<style lang="stylus">
.common-header-box{

            display flex
            justify-content flex-start
            flex-flow row nowrap
            background $basecolor
            height $headerheight
            line-height $headerheight
            span{
                color $bgcolor
                transition color 1s
            }
            .common-header-left{
                flex 0 60px
                cursor pointer
            }
            .common-header-center{
                flex 1
                input{
                  border-radius 5px
                  border 0
                  height 60%
                  padding 0 3%
                  width 60%
                  font-size 11px
                  outline none
                  color $fontlesscolor
                  transition all 0.5s
                }
                input:focus{
                  width 80%
                  color $fontlesscolor
                }
            }
            .letter-spacing-header{
              letter-spacing :9px;
            }
            .common-header-right{
                flex 0 60px
                cursor pointer
                i{
                  font-size 20px
                  font-weight 800
                }
            }
            span:active{
                color $infofontcolor
            }
            .suspension-box{
               position fixed
               min-width 30%
               width auto
               top 52px
               right 10px
               z-index 999
               padding 10px 0px 20px 0px
               background rgba(0,0,0,0.9)
               border-radius 8px
               ul{
                 li{
                   height 40px
                   display flex
                   width auto
                   padding 0 5px
                   margin-top 7px
                   justify-content flex-start
                   flex-flow row nowrap
                   i{
                     color $infofontcolor
                     flex 0 30px
                     height 31px
                     font-size 19px
                     line-height 31px
                     font-weight 700
                   }
                   p{
                     color $infofontcolor
                     flex 1
                     font-size 14px
                     font-weight 600
                     padding 0px 0
                     height 30px
                     line-height 30px
                     border-bottom 1px solid $fontlesscolor
                   }
                 }
                 li:active{
                   background-color $infofontcolor
                   i, p{
                     border 0
                     color $fontcolor
                   }
                 }
               }
            }
            .header-mask{
              position fixed
              width 100%
              top 0px
              bottom 0px
              left 0px
              z-index 50
              background-color rgba(0,0,0,0.5)
            }
        }
</style>
