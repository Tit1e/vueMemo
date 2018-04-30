<template>
  <div class="home-button t-shadow">
    <router-link tag="div" to="Home"><i class="iconfont icon-home1"></i></router-link>
  </div>
</template>
<style lang="scss" scoped>
.home-button{
  position: fixed;
  bottom: 30px;
  left: 30px;
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  border-radius: 50%;
  background-color: #54BF8E;
  box-shadow: 0px 0px 4px 0px rgba($color: #000000, $alpha: 0.6);
  z-index: 99;
  .iconfont{
    font-size: 30px;
    color: #fff;
  }
}
</style>
