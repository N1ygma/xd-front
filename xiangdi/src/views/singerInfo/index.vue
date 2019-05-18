<template>
  <div class="singer-info-detail app-page vcontent">
    <div class="singer-info-detail-box">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span class="card-title">泰勒·斯威夫特</span>
        </div>
        <div class="singer-info-box">
        <div class="img-box">
         <img src="../../assets/imgs/a8773912b31bb051439bc5b33a7adab44bede0ea.jpg" alt="">
        </div>
        <div class="info-box">
            <span class="info-box-header">
              <p>泰勒·斯威夫特：乡村音乐中的真性情</p>
              <p>2018-06-04 12:06</p>
            </span>
            <span class="info-box-body">
               <p>泰勒斯威夫特于1989年12月13日出生，童年在一个11英亩的圣诞树农场度过。于是，乡村音乐影响了她的童年。懂的人都明白，美国的乡村音乐欢快而直爽，悠然中带着强烈的节奏感。</p>
             </span>
         </div>
        </div>
       </el-card>
       <!-- card 2 -->
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>基本信息</span>
          </div>
          <div v-html="data.text"  class="text item">
            
          </div>
        </el-card>
        <!-- card 3 -->
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>早年经历</span>
          </div>
          <div  class="text item">
            <p>
               2003年，14岁的泰勒·斯威夫特搬到纳什维尔。作为和美国广播唱片公司合约的一部分，她和类似于托伊·魏杰思，布雷特·比弗斯，布雷特·詹姆斯等等经验丰富的的音乐行词曲作者一起写歌。最终，她和莉兹·罗斯形成了持久的合作伙伴关系。泰勒看到莉兹在RCA的词曲作者活动上表演，并建议她们在一起写歌。每周二下午放学后，她们会用两个小时来写歌。基本上都是写当天在学校发生了什么事。与此同时，泰勒还与制作人内森·查普曼一起录歌曲小样。在BMI作曲家表演秀之后，泰勒和索尼/联合电视音乐出版公司签约。15岁时，泰勒离开了RCA唱片公司，因为公司想要等到她18岁再帮她出专辑，而她觉得她已经准备好了。
            </p>
            <p>
              泰勒在纳什维尔作曲家集合地蓝鸟咖啡馆演唱时，引起了斯科特·波切塔的注意并和她签约。斯科特刚成立了自己的独立唱片公司大机器唱片，泰勒也成为了公司旗下的第一位歌手。泰勒的父亲购买下了公司百分之三的股份。和大机器签约之后，泰勒开始着手于第一张专辑。泰勒劝说大机器唱片雇佣内森·查普曼作为她的歌曲制作人。泰勒独自写了专辑中的两首单曲，剩下的歌和莉兹等人共同完成。
            </p>
            <p>
              2006年10月24日，同名专辑《泰勒·斯威夫特》发行。专辑发行首周销售了39000张，在公告牌专辑榜排行第19 [36]  。之后在公告牌专辑榜中排行第5，公告牌乡村专辑榜冠军后保持连续8周 [37]  ，前24保持91周 [38]  。
            </p>
            <p>
              2006年6月推出首单《蒂姆·麦格劳》时，大机器仍处于起步阶段。泰勒和她妈妈一起帮忙，将CD装进信封，然后送往各大电台。泰勒在许多电视节目上露面，其中包括《Grand Ole Opry》《早安美国》等。《Tim McGraw》的音乐录像带在GAC的粉丝每周20佳音乐投票榜上创造了连续30周的记录，位于美国乡村音乐电视奖视频榜首位。该音乐录像带也使泰勒得到了2007年CMT音乐奖的最具突破录像带奖。
            </p>
            <p>
              2007年5月，泰勒在美国乡村音乐协会奖上表演了《Tim McGraw》。她对着观众席中的蒂姆·麦格罗演唱。 同年，泰勒在蒂姆·麦格罗和菲丝·希尔的Soul2Soul巡回演唱会上作了开场表演。
            </p>
            <p>
              2007年8月21日，泰勒在《美国达人》总决赛上现场表演。《泰勒·斯威夫特》的第二支单曲《Teardrops on My Guitar》在2007年2月24日发行，在单曲榜排行第13，流行音乐榜第11。9月9日，第三支单曲《Our Song》发行，在乡村榜夺冠连续6周，单曲榜位居第16，流行音乐榜排行榜第24。2007年10月，纳什维尔歌曲作家国际协会授予泰勒年度歌曲作家/艺术家奖，这使其成为赢得该奖项的最年轻歌手。11月7日，泰勒赢得了2007年乡村音乐协会最佳新人奖并表演《Our Song》。10月16日，发行假期专辑《Sounds of the Season: The Taylor Swift Holiday Collection》，该专辑在Target专卖店独有发行。
            </p>
          </div>
        </el-card>
    </div>
  </div>
</template>
<script>
import Api from '@/api/xdApi'
export default {
data(){
  return {
    index:1,
    text:'sasas',
    data:{

    }
  }
},
methods: {
  fetchPage(){
     Api.GetSingerInfo().then(res=>{
       this.data=res.data[0]
     })
  }
},
mounted() {
  this.fetchPage()
  console.log('a')
},
activated() {
  
 
  
},
};
</script>
<style lang="stylus">
.singer-info-detail{
  background-color #eee
  min-height 500px
  .singer-info-detail-box{
    width bodywidth
    // background-image url('https://gss0.bdstatic.com/-4o3dSag_xI4khGkpoWK1HF6hhy/baike/h%3D452/sign=25eb74b69b2bd4075dc7d2f849889e9c/a08b87d6277f9e2f2bc7f7961330e924b999f3ba.jpg')
    // background-size cover
    margin 0 auto
    padding 10px
    .box-card{
      margin-top 10px
      .el-card__header{
      border-left 4px solid #409eff
      span{
        display block
        width 100%
        text-align left
        color: #409eff;
      }
    }
    .text{
      p{
        margin-top 5px
        line-height 29px
        text-indent 25px
        text-align left
        letter-spacing 1px
      }
    }
    }

    .singer-info-box{
      display flex
      flex-direction row
      padding 20px
      // box-shadow 3px 3px 13px #aaa
      border-radius 4px
      // background-color rgba(0,0,0,0.1)
      .img-box{
        order 0
        flex 0 200px
        padding-right 10px
        img{
          width 100%
          // border-radius 5px
        }
      }
      .info-box{
        order 1
        flex 1
        display flex
        flex-direction column
        .info-box-header{
          height 40px
          line-height 40px
          display flex
          flex-direction row
          p{
            flex-grow 1
          }
          p:nth-child(1){
            text-align left
            color: #409eff;
            font-size 15px
          }
          p:nth-child(2){
            text-align right
            color #aaa
          }
        }
        .info-box-body{
          text-align left
          flex-grow 1
          padding 10px 0
        }
      }
    }
  }
}

</style>
