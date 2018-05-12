<template>
  <div class="m-history">
    <c-title></c-title>
    <h3 class="h3">历史未完成</h3>
    <ul class="m-list">
      <li class="m-list-item" v-for="item in list" v-if="!item.isfinsh" :key="item.createtime">
        <span>
          <i class="iconfont icon-fangxingweixuanzhong"></i> 
          <span>{{ item.content }}</span>
        </span>
        <div>
          <span>{{item.createtime | formatDate}}</span>&nbsp;&nbsp;
          <span @click="Delete(item)"><i class="iconfont icon-system-deleteb"></i></span>
        </div>
      </li>
    </ul>
    <h3 class="h3">历史已完成</h3>
    <ul class="m-list" v-for="item in list" v-if="item.isfinsh" :key="item.createtime">
      <li class="m-list-item">
        <div>
          <span>
            <i class="iconfont icon-fangxingxuanzhongfill"></i></span> 
            <span class="_finsh">{{ item.content }}</span>
        </div>
        <div>
          <span>{{item.finshtime | formatDate}}</span>&nbsp;&nbsp;
          <span @click="Delete(item)"><i class="iconfont icon-system-deleteb"></i></span>
        </div>
      </li>
    </ul>
    <change-btn></change-btn>
  </div>
</template>
<script>
import CTitle from '@/components/common/CTitle'
import NowHistoryButton from '@/components/common/NowHistoryButton'
import { formatDate } from '../../js/dateFormat.js'
import { mget, mset } from '../../js/getData'
export default {
  components: {
    "c-title": CTitle,
    "change-btn": NowHistoryButton
  },
  data(){
    return{
      list: [],
    }
  },
  created(){
    this.initData()
  },
  methods: {
    initData(){
      let rData = mget()
      let nowDate = formatDate(new Date(),'yyyy-MM-dd')
      let list = []
      for (const key in rData) {
        if (key !== nowDate) {
        console.log(key,nowDate)
          list = list.concat(rData[key])
        }
      }
      this.list = list
    },
    Delete(item){
      this.list = this.list.filter(o => {
        return item.createtime !== o.createtime
      })
      let date = formatDate(new Date(item.createtime),'yyyy-MM-dd')
      let data = mget()
      data[date] = data[date].filter(o => {
        return item.createtime !== o.createtime
      })
      mset(data)
    }
  },
  filters: {
    formatDate(time) {
      let date = new Date(time);
      return formatDate(date, "yy/MM/dd");
    }
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
