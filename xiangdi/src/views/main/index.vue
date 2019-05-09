<template>
    <div class="login-page app-page">
      <!-- header tabs -->
      <div class="header-box">
        <div class="tabs-box">
          <tabs @tabEmit="tabEmit" :list='list'/>
        </div>
      </div>
      <!-- content -box -1 -->
      <div class="body-content-first">
        <div class="body-content-box-child">
          <!-- header -->
          <div class="content-header">
            <p>今日头条</p>
          </div>
          <!-- body -->
          <div class="content-body">
            <div  @click="goDetail()" v-for="(item,i) in imgList1" :key='i' class="img-box">
              <img :src="item.imgSrc" alt="图片">
            </div>
          </div>
          <!-- footer -->
          <div class="content-footer">
            <div class="footer-content">
              <p>推荐</p>
              <p>28阅读量</p>
            </div>
          </div>
        </div>
      </div>
      <!-- content box -2 -->
      <div class="body-content-second">
        <div class="body-content-box-child">
          <!-- 左侧轮播 -->
          <div class="content-left-box">
               <!-- header -->
             <div class="content-header">
               <p>李春雨真帅</p>
             </div>
             <!-- body -->
             <div class="content-body">
               <div  class="img-box">
                 <img src="../../assets/imgs/6e222076320503.5c65d8c08671a.jpg" alt="图片">
               </div>
             </div>
             <!-- footer -->
             <div class="content-footer">
               <div class="footer-content">
                 <p>推荐</p>
                 <p>28阅读量</p>
               </div>
             </div>
          </div>
        <!-- 右侧登录 -->
          <div class="content-right-box">
            <div class="right-box-child">
              <!-- header -->
             <div class="right-header">
              <img src="../../assets/imgs/Viadeo_300px_1230522_easyicon.net.png" alt="">
              <p>Catplate Show</p>
             </div>
             <!-- right body -->
             <div class="right-box-body">
               <div class="login-box">
                 <p class="title">登录</p>
                 <span>
                   <input type="text" placeholder="请输入账号">
                 </span>
                 <span>
                   <input type="text" placeholder="请输入账号">
                 </span>
                 <span>
                   <input  type="text" placeholder="请输入账号">
                 </span>
                 <div class="remeber-password">
                  <input @click="isChecked()" type="radio" :checked='checked'>
                   <p @click="isChecked()">记住密码</p>
                 </div>
                 <button>登录</button>
                 <p class="footer-word">JavaScript 从入门到精通</p>
               </div>
             </div>
            </div>
            
          </div>
        </div>
        
      </div>
      <!-- content box -3 -->
       <!-- content -box -1 -->
      <div class="body-content-third body-content-first">
        <div class="body-content-box-child">
          <!-- header -->
          <div class="content-header">
            <p>今日头条</p>
          </div>
          <!-- body -->
          <div class="content-body">
            <div v-for="(item,i) in imgList1" :key='i' class="img-box">
              <img :src="item.imgSrc" alt="图片">
            </div>
          </div>
          <!-- footer -->
          <div class="content-footer">
            <div class="footer-content">
              <p>推荐</p>
              <p>28阅读量</p>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
import Tabs from '@/components/common-bottom-tabs'
import {imgList} from '@/data/imgList'
// tabs config
import TabsList from '@/data/tabs'
export default {
  name: 'login',
  components: {
    Tabs
  },
  data() {
    return {
      checked:false,
       list: [   // tabs list
      ],
      imgList1:[  // img list1
      ]
      
    };
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      
    });
  },
  mounted() {
    this.feacthPage()
  },
  methods: {
    feacthPage() {
      this.list=TabsList  //tabs list
      this.imgList1 = imgList  // img list1
    },
    isChecked(){
      this.checked=!this.checked
    },
    tabEmit(e){
      console.log(e)
    },
    goDetail(){
      this.$router.zyPagePush('Detail')
    },
    // 跳转注册界面
    joinus() {
      this.$router.zyPagePush('Join', 500);
      this.$router.zyToast('跳转成功...', 1000);
    },

  },
};
</script>
<style lang="stylus">
   $width = 1200px;
    .login-page{
        position absolute
        width 100%
        top 0px
        left 0px
        bottom 0px
      .header-box{
          border-bottom 1px solid #aaa
          .tabs-box{
            width $width
            margin 0 auto
            
          }
      }
      .body-content-first{
        padding-top 10px
        .body-content-box-child{
          width $width
          margin 0 auto
          display flex 
          flex-direction column
          border-bottom 1px solid #ccc

          .content-header{
            order 0
            flex 0 30px
            line-height 30px
            text-align left
            font-size 15px
            letter-spacing 2px
            font-weight bold
          }
          .content-body{
            order 1
            flex 0
            display flex 
            flex-direction row
            // height 300px
            .img-box{
              flex-grow 1
              overflow hidden
              padding 0 10px;
              border 1px solid #ccc 
              display flex
              flex-direction column
              cursor pointer
              img{
                flex-grow 1
                width 100%
              }
            }
            .img-box:hover{
              box-shadow 2px 2px 12px  #aaa
              
            }
            .img-box:nth-child(1),.img-box:nth-child(3){
              padding-left 0
              padding-right 0
              
            }
            .img-box:nth-child(1){
              border-right 0;
            }
            .img-box:nth-child(3){
              border-left 0;
            }
          }
          .content-footer{
            order 2
            padding 8px 0
            .footer-content{
              display flex
              flex-direction row
              p{
                flex 1
                cursor pointer
                font-size 13px
                letter-spacing 1px
              }
              p:nth-child(1){
                text-align left
              }
              p:nth-child(2){
                text-align right
              }
              p:hover{
                color $basecolor
              }
            }
          }
        }
      }
      .body-content-second{
        .body-content-box-child{
          width $width
          margin 0 auto
          display flex 
          flex-direction row
          border-bottom 1px solid #ccc
          max-height 300px
          .content-left-box{
            flex-grow 1
            overflow hidden
            border-right 1px solid #ccc
            .content-header{
              position relative
              height 30px
              line-height 30px
              z-index 20
              background rgba(0,0,0,0.1)
              p{
                text-align left
                padding-left 20px
                letter-spacing 3px
                font-size 14px
                font-weight bold
                color #aaa
              }
            }
            .content-body{
              position relative
              top -30px
              z-index 18
              height 100%
              .img-box{
                width 100%
                height 100%
                overflow hidden
                img{
                  width 100%
                  height 100%
                }
              }
              }
              .content-footer{
                position relative
                z-index 21
                height 30px
                line-height 30px
                top -60px
                background-color rgba(0,0,0,0.4)
                .footer-content{
                  width 100%
                  z-index 44
                  display flex
                  flex-direction row
                  p{
                    flex-grow 1
                    text-align left
                    padding-left 10px
                    letter-spacing 3px
                    font-size 13px
                    color #aaa
                  }
                  p:nth-child(2){
                    text-align right
                    padding-right 10px
                  }
                }
              }
          }
          .content-right-box{
            flex:0
            width 400px
            min-width 400px
            background: url('http://106.14.175.12:8090/images/nicole-honeywill-1556928-unsplash.jpg')
            background-size cover
            .right-box-child{
              width 100%
              height 100%
              background rgba(0,0,0,0.5)
              .right-header{
                display flex
                flex-direction row
                height 30px
                line-height 30px
                padding 6px 10px
                background-color rgba(240,240,240,0.3)
                img{
                  order 0
                  flex 0
                  width 30px
                  height 30px
                }
                p{
                  flex 1
                  order 1
                  padding-left 10px
                  text-align left
                  font-size 15px
                  letter-spacing 1px
                  font-weight bold
                }
            }
            .right-box-body{
              padding 10px 30px
              .login-box{
                padding-bottom 10px
                background-color rgba(240,240,240,0.8)
                .title{
                  color $basecolor
                  padding 10px 0 7px 0
                  font-size 15px
                  font-weight 700
                  letter-spacing 14px
                }
                span{
                  width 80%
                  padding 5px 0
                  margin 0 auto
                  display flex
                  flex-direction row
                  height 26px
                  line-height 26px
                  p{
                    min-width 80px
                    text-align right
                    color #444
                    font-weight bold
                    font-size 13px
                    letter-spacing 5px
                  }
                  input{
                    border 0
                    flex-grow 1
                    height 26px
                    line-height 26px
                    font-size 12px
                    padding 0 5px
                    border-radius 3px
                    outline none
                    border 1px solid #aaa
                  }
                  input:focus{
                    border 1px solid $basecolor
                  }
                }
                .remeber-password{
                  width 80%
                  margin 0 auto
                  display flex
                  flex-direction row
                  height 18px
                  line-height 18px
                  input{
                    flex-grow 0
                    position relative
                    top 2px
                  }
                  p{
                    text-align left
                    padding-left 6px
                    cursor pointer
                    font-size 11px
                    color $basecolor
                  }
                }
                button{
                  width 80%
                  height 28px
                  line-height 28px
                  margin-top 15px
                }
                .footer-word{
                  width 80%
                  margin 0 auto
                  text-align left
                  font-size 11px
                  padding 2px 0
                  color $basecolor
                }
              }
            }
            }
            
          }
        }
      }
    }
</style>
