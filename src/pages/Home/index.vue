<template>
  <div>
    <TypeNav/>
    <ListContainer />
    <ReCommend />
    <Rank/>
    <Like/>
    <Floor v-for="(floor, index) in floorList" :key="floor.id" :list='floor'/>
    <Brand/>
  </div>
</template>

<script>
import TypeNav from "@/components/TypeNav";
import ListContainer from "@/pages/Home/ListContainer";
import ReCommend from "@/pages/Home/ReCommend";
import Rank from "@/pages/Home/Rank";
import Like from "@/pages/Home/Like";
import Floor from "@/pages/Home/Floor";
import Brand from '@/pages/Home/Brand'
import {mapState} from 'vuex'

export default {
  name: "",
  components: {
    TypeNav,
    ListContainer,
    ReCommend,
    Rank,
    Like,
    Floor,
    Brand

  },
  mounted () {
      this.$store.dispatch('home/getFloorList')
      this.$store.dispatch('user/getUserInfo')
  },
  computed: {
      ...mapState({
        floorList : state => state.home.floorList
      })
  }
};
</script>

<style>
</style>