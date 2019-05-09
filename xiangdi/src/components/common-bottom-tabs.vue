<template>
  <div class="common-bottom-tabs">
    <ul>
      <li v-for="(item, index) in list"
      :class="index===selected ? 'selected-style':''"
      :key= 'index'
      @click="chooseOne(index)">
        <span>
        <i :class="item.icon"></i>
        </span>
        <p>{{item.title}}</p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => {

      },
    },
  },
  data() {
    return {
      selected: 0,
      
    };
  },
  methods: {
    chooseOne(index) {
      this.selected = index;
      this.$emit('tabEmit', this.selected);
      // this.$router.zyToast(`您选择了${item.title}`);
    },
  },
};
</script>
<style lang="stylus">
.common-bottom-tabs{
  width 100%
  height 40px
  // border-bottom 1px solid #ccc
  background-color $bgcolor
  ul{
    display flex
    height 100%
    justify-content flex-start
    flex-flow row nowrap
    li{
      // padding-left 45px;
      flex 1
      cursor pointer
      height 100%
      display flex
      // border-radius 2px
      text-align center
      justify-content flex-start
      flex-flow row
      transition all 0.5s
      span{
        flex-grow 1
        padding-right 8px
        text-align right
        i{
          width 25px
          position relative
          top 10px
          color $maskColor
          font-weight 800
        }
      }
      p{
        text-align left
        flex-grow 1
        padding-left 6px
        color $maskColor
        top 3px
        display block
        position relative
        padding 8px 0
        font-size 11px
        letter-spacing 3px
      }
    }
    li:active{
      background-color $infofontcolor

    }
    li:hover{
      background-color $infofontcolor
    }
    .selected-style{
      background-color #efefef
      height 39px
      border-bottom 3px solid $headercolor

      i{
        color $basecolor
      }
      p{
        color $basecolor
      }
    }
  }
}
</style>
