<template>
  <div class="home">
    <div class="content">
      <router-link class="link t-shadow" to="/MToday">
      备 忘 录 <i class="iconfont icon-jinru"></i>
      </router-link>
      <router-link class="link t-shadow" to="/DList">
      心 情  <i class="iconfont icon-jinru"></i>
      </router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home{
  background-color: #54BF8E;
  height: 100%;
  .content{
    padding-top: 60%;
    .link{
      display: block;
      font-size: 30px;
      font-weight: bold;
      text-align: center;
      color: #fff;
      .iconfont{
        font-size: 25px;
      }
    }
  }
}
</style>

