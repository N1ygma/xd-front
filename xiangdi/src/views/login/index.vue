<template>
    <div class="login-page app-page">
        <div class="common-header">
            <span @click="$router.zyPageBack()"><i class="iconfont icon-fanhui1"></i></span>
            <span></span>
            <span @click="help()"><i class="iconfont icon-gengduo"></i></span>
        </div>
        <div class="login-page-banner">
            <p>Palette preview</p>
            <p>Full Palette colors below</p>
            <span @click="info()"><i class="circle">J</i> </span>
        </div>
        <div class="login-box">
          <div class="id-box">
            <p>账号</p>
            <input v-model="userid" placeholder="请输入账号" type="text">
          </div>
          <div class="ps-box">
            <p>密码</p>
            <input v-model="password" placeholder="密码" type="password">
          </div>
        <p class="forget" @click="joinus">注册账号</p>
        </div>
        <div class="go-box">
         <button class="goMain"  @click="login">登 录</button>
        </div>
    </div>
</template>
<script>
import UserApi from '@/api/userapi';
// import axios from 'axios';

export default {
  name: 'login',
  components: {
  },
  data() {
    return {
      userid: '',
      password: '',
      toastStatus: {
        text: '',
        showToast: false,
      },

    };
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      if (JSON.parse(window.sessionStorage.loginSuccess) === true) {
        vm.$router.zyPagePush('Main');
      } else {
        vm.feacthPage();
      }
    });
  },
  mounted() {
  },
  methods: {
    feacthPage() {
    },
    help() {
      this.$router.zyToast('您还未登录，暂不提供此功能');
      // setTimeout(() => {
      //   this.$router.zyPagePush('Join');
      // }, 2000);
    },
    info() {
      this.$router.zyToast('请登录');
    },
    // 登录请求
    login() {
      const data = {
        id: this.userid,
        password: this.password,
      };

      UserApi.login(data).then((res) => {
        // eslint-disable-next-line
        console.log(res);
        if (res.success === true) {
          window.sessionStorage.loginSuccess = res.success;
          const userInfo = {
            name: res.name,
            id: res.id,
            phoneNum: res.phoneNumber,
            address: res.defaultAddress,
          };
          this.$router.zyToast('登陆成功');
          this.$store.commit('setUserInfo', userInfo);

          this.$router.zyPagePush('Main', 1000);
        } else {
          this.$router.zyToast('登陆失败，账号或密码错误');
        }
      });
    },
    goBack() {
    },
    // 跳转注册界面
    joinus() {
      this.$router.zyPagePush('Join', 500);
      this.$router.zyToast('跳转成功...', 1000);
    },
    // 进入主界面
    goMain() {
      this.$router.push({
        name: 'main',
      });
    },
  },
};
</script>
<style lang="stylus">
    .login-page{
        position absolute
        width 100%
        top 0px
        left 0px
        bottom 0px
        .common-header{
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
            span:nth-child(1){
                flex 0 60px
                cursor pointer
            }
            span:nth-child(2){
                flex 1
            }
            span:nth-child(3){
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
        }
        .login-page-banner{
            height 150px
            background $basecolor
            padding-top 30px
            p{
                padding 3px 0 3px 60px
                text-align left
            }
            p:nth-child(1){
                font-size 30px
                color #ffffff
                font-weight 500
            }
            p:nth-child(2){
                color $infofontcolor
                font-size 13px
            }
            span{
                position relative
                top 59px
                float right
                right 50px
                cursor pointer
                display block
                width 50px
                height 50px
                line-height 50px
                border-radius 25px
                background #536DFE
                box-shadow 0px 1px 5px rgba(0,0,0,.23)
            }
            .circle{
                display block
                width 50px
                height 50px
                border-radius 25px
                color #fff
                font-size 22px
                box-shadow -0px -1px 5px rgba(0,0,0,.23)
            }

        }
          .login-box {
                margin-top: 70px;
    div {
      width: 80%;
      height: 50px;
      line-height: 50px;
      display: flex;
      justify-content: flex-start;
      flex-flow: row nowrap;
      margin: 0 auto;
      margin-top: 30px;
      color:$fontlesscolor;

      p {
        order: 0;
        padding: 0 20px;
        text-align: right;
        font-size: 14px;
      }
      p::before {
        content: "*";
        color: #ed5589;
      }
      input {
        padding: 0 10px;
        color: $fontlesscolor;
        order: 1;
        flex-grow: 1;
        height: 36px;
        position: relative;
        top: 5px;
        border-radius: 5px;
        border: 1px solid #ddd;
        background #fff
        outline: none;
      }
      input:focus {
        border: 1px solid $basecolor;
        background #fff
      }
    }
    .forget {
      text-align: right;
      font-size: 11px;
      cursor pointer
      color: $elsecolor;
      width: 80%;
      display: block;
      margin: 0 auto;
      margin-top: 10px;
    }
    }
    .go-box{
        width 100%
        padding 20px 0px
        position absolute
        bottom 10px

        .goMain{
            position relative
            width 80%
            border 0
            background $basecolor
            color #ffffff
            height 40px
            line-height 40px
            border-radius 5px
        }
    }
    .toast{
        background $toastbgcolor
        position absolute
        bottom 80px
        z-index 99
        width 80%
        padding 10px 0px
        border-radius 10px
        left 10%

        p{
            color #fff
            display block
            padding 0 10%
            text-align center
        }
     }
    }
</style>
