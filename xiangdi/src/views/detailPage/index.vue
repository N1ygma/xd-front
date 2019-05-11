<template>
  <div class="detail-page app-page">
    <div class="header-box">
      <div class="tabs-box">
        <tabs @tabEmit="tabEmit" :list='list'/>
      </div>
    </div>
    <div class="article-box">
      <div class="article-header">
        <span>{{title}}</span>
        <span>发布：2018-06-04 12:52:52    更新：{{date}}</span>
      </div>
      <div class="article-content">
           <p>
             泰勒·斯威夫特（Taylor Swift），1989年12月13日出生于美国宾夕法尼亚州，美国流行音乐、乡村音乐创作型女歌手、音乐制作人、演员、慈善家。
            </p>
            <p>
              {{content}}
            </p>
            <p>
              2010年发行第三张录音室专辑《Speak Now》，单曲《Mean》获2座格莱美奖。同年获创作人名人堂哈尔·戴维星光奖 [5]  。2012年发行第四张录音室专辑《Red》 [6]  。2013年11月获第47届乡村音乐协会奖巅峰奖 [7]  。2014年发行第五张专辑《1989》 [8]  ，发行首周在美国售出128.7万张为近12年最高纪录，专辑也是2014年全美最畅销专辑 [9]  ，在全球售出超过1000万张 [10]  。专辑获第58届格莱美奖年度专辑，使泰勒成为格莱美首位两次获得此奖项的女歌手；同年11月获第42届全美音乐奖迪克·克拉克成就奖 [11]  ；12月入围《时代》年度人物 [12]  。
            </p>
            <p>
              2015年4月获第50届乡村音乐学院奖50周年里程碑奖 [13-14]  ；5月，成为2015福布斯全球权势女性榜上榜最年轻女性 [15-17]  。2016年登顶《福布斯》全球百大名人榜榜首 [18]  。
            </p>
            <p>
              2017年发行第六张录音室专辑《reputation》，美国首周销量123.8万张，使她成为唯一一位拥有四张首周百万销量专辑的歌手 [19]  。同年被《时代周刊》选为年度人物 [20]  。
          </p>
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
    </div>
    <div v-if="loading" v-loading="loading"
       element-loading-text="拼命加载中"
       element-loading-spinner="el-icon-loading"
       element-loading-background="rgba(250,250,250, 0.9)"
       class="mask-box">
    </div>
  </div>
</template>
<script>
import Tabs from '@/components/common-bottom-tabs';
import TabsList from '@/data/tabs';

export default {
components:{
  Tabs
},
data(){
  return {
    title:'',
    date:'',
    content:'',
    list:[],
    loading:false
  }
},
mounted() {
  this.list=TabsList
  console.log(this.$route.params)
  this.title=this.$route.params.article.title
  this.content=this.$route.params.article.content
  this.date=this.$route.params.article.date
},
methods: {
   tabEmit(e) {
      console.log(e);
      this.loading = true;
      setTimeout(() => {
        this.tab = parseInt(e);
        this.loading = false;
        this.$router.push({
          name:'MainPage',
          params:{
            tab:this.tab
          }
        })
      }, 1000);
    },
},
};
</script>
<style lang="stylus">
.detail-page{
        position absolute
        width 100%
        top 0px
        left 0px
        bottom 0px
        .header-box{
          background-color #333;
          .tabs-box{
            width 700px
            margin 0 auto
          }
        }
        .article-box{
          width 100%
          .article-header{
            padding 0 20px
            width 920px
            margin 0 auto
            display flex 
            flex-direction column
            border-bottom 1px solid #aaa
            // p{
            //   width 100%
            // }
            span:nth-child(1){
              padding 20px 0 10px 0
              height 40px
              line-height 40px
              font-size 27px
              font-weight bold
            }
            span:nth-child(2){
              text-align right
              padding 10px 10px
              color #888
            }
          }
          .article-content{
            width 920px 
            margin 0 auto
            padding 20px
            p{
              line-height 30px
              font-size 15px
              text-align left
              text-indent 26px
              margin-top 10px
            }
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
