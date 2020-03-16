<!--
 * @Date: 2020-03-16 00:27:31
 * @LastEditors: BeckoninGshy
 * @LastEditTime: 2020-03-16 22:28:31
 -->
<template>

    <div class="singer-detail">aaa</div>
  
</template>

<script>
export default {
  name: 'SingerDetail',
  created() {
    console.log('created!')
  }
}
</script>

<style lang="stylus" scoped>
  @import '~common/stylus/variable'

  .singer-detail
    position fixed
    z-index 100
    top 0
    bottom 0
    left 0
    right 0
    background $color-background

  .s-enter-active, .s-leave-active
    transition all 1s
  .s-enter, .s-leave-to
    transform translate3d(100%, 0, 0)
</style>
