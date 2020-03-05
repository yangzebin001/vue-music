<!--
 * @Date: 2020-02-29 12:57:14
 * @LastEditors: BeckoninGshy
 * @LastEditTime: 2020-03-05 22:10:56
 -->
<template>
  <div id="app">
    <m-header></m-header>
    <tab></tab>
    <keep-alive>
      <router-view>
      </router-view>
    </keep-alive>
  </div>
</template>

<script>
import MHeader from 'components/m-header/m-header'
import Tab from 'components/tab/tab'
export default {
  name: 'App',
  components: {
    MHeader,
    Tab
  }
}
</script>

<style lang="stylus" scoped>

</style>
