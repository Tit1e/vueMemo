<template>
  <div class="m-history">
    <c-title></c-title>
    <h3 class="h3">历史未完成</h3>
    <ul class="m-list">
      <li class="m-list-item">
        <span><i class="iconfont icon-fangxingweixuanzhong"></i> 吃饭</span>
        <div>
          <span>2018 年 4月 1日</span>&nbsp;&nbsp;
          <span><i class="iconfont icon-system-deleteb"></i></span>
        </div>
      </li>
    </ul>
    <h3 class="h3">历史已完成</h3>
    <ul class="m-list">
      <li class="m-list-item">
        <div>
          <span><i class="iconfont icon-fangxingxuanzhongfill"></i></span> <span>吃饭</span>
        </div>
        <div>
          <span>2018 年 4月 1日</span>&nbsp;&nbsp;
          <span><i class="iconfont icon-system-deleteb"></i></span>
        </div>
      </li>
    </ul>
    <change-btn></change-btn>
  </div>
</template>
<script>
import CTitle from '@/components/common/CTitle'
import NowHistoryButton from '@/components/common/NowHistoryButton'
export default {
  components: {
    "c-title": CTitle,
    "change-btn": NowHistoryButton
  },
  data(){
    return{

    }
  },
  created(){
    console.log(this.$route)
  }
}
</script>
<style lang="scss" scoped>
.m-history{
  padding: 12px;
  height: 100%;
  padding: 12px;
  .h3{
    margin-top: 20px;
    margin-bottom: 10px;
  }
  .m-list{
    list-style: none;
    padding: 0;
    margin: 0;
    .m-list-item{
      padding: 0 12px;
      font-size: 17px;
      margin: 3px 0px;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
