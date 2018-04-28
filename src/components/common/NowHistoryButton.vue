<template>
  <div class="now-history-btn t-shadow">
    <router-link tag="div" :to="$route.path === '/MToday' ? 'MHistory' : 'MToday'"><i class="iconfont" :class="$route.path === '/MToday' ? 'icon-history2' : 'icon-list'"></i></router-link>
  </div>
</template>
<style lang="scss" scoped>
.now-history-btn{
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  border-radius: 50%;
  background-color: #54BF8E;
  box-shadow: 0px 0px 4px 0px rgba($color: #000000, $alpha: 0.6);
  .iconfont{
    font-size: 30px;
    color: #fff;
  }
}
</style>