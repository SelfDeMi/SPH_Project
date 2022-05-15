<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header' 
import Footer from '@/components/Footer'
export default {
  name: 'App',
  components: {
    Header,Footer
  },
  mounted () {
    //性能优化，只发送一次请求获取一次数据，因为app只执行一次
      this.$store.dispatch("home/categoryList");
  }
}
</script>

<style>

</style>
