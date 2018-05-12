<template>
  <div id="app">
    <home-button v-if="$route.path !== '/Home'"></home-button>
    <router-view/>
  </div>
</template>

<script>
import HomeButton from '@/components/common/HomeButton'
export default {
  name: 'App',
  components: {
    HomeButton
  },
  created(){
    let momeList = localStorage.getItem('momeList')
    if(momeList === null){
      localStorage.setItem('momeList',JSON.stringify({}))
    }
    let diaryList = localStorage.getItem('diaryList')
    if(diaryList === null){
      localStorage.setItem('diaryList',JSON.stringify([]))
    }
  }
}
</script>

<style lang="scss" scoped>
#app {
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  .icon {
    width: 2em; height: 2em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
}
</style>
