<template>
  <div class="m-today">
    <c-title></c-title>
    <h3 class="h3">今日未完成</h3>
    <ul class="m-list">
      <li class="m-list-item" v-for="item in list" v-if="!item.finsh" :key="item.id">
        <span @click="changState(item)">
          <i class="iconfont icon-fangxingweixuanzhong"></i> 
          <span>{{ item.content }}</span>
          <i v-if="item.urgent === '1'" class="urgent iconfont icon-youxianji1"></i>
          <i v-if="item.urgent === '2'" class="urgent iconfont icon-youxianji2"></i>
          <i v-if="item.urgent === '3'" class="urgent iconfont icon-youxianji"></i>
        </span>
        <div>
          <span><i class="iconfont icon-edit"></i></span>&nbsp;&nbsp;
          <span><i class="iconfont icon-system-deleteb" @click="Delete(item)"></i></span>
        </div>
      </li>
      <li class="m-list-item add">
        <div class="add-button">
          <i class="iconfont icon-add" @click="()=>{showForm = true}"></i>
        </div>
      </li>
    </ul>
    <h3 class="h3">今日已完成</h3>
    <ul class="m-list">
      <li class="m-list-item" v-for="item in list" v-if="item.finsh" :key="item.id">
        <span @click="changState(item)">
          <i class="iconfont icon-fangxingxuanzhongfill"></i> 
          <span class="_finsh">{{ item.content }}</span>
          <i v-if="item.urgent === '1'" class="urgent iconfont icon-youxianji1"></i>
          <i v-if="item.urgent === '2'" class="urgent iconfont icon-youxianji2"></i>
          <i v-if="item.urgent === '3'" class="urgent iconfont icon-youxianji"></i>
        </span>
        <div>
          <span><i class="iconfont icon-system-deleteb" @click="Delete(item)"></i></span>
        </div>
      </li>
    </ul>
    <change-btn></change-btn>
    <m-create
      v-if="showForm"
      @close="close"></m-create>
  </div>
</template>
<script>
import CTitle from '@/components/common/CTitle'
import NowHistoryButton from '@/components/common/NowHistoryButton'
import MCreate from '@/components/Memo/MCreate'
import { formatDate } from '../../js/dateFormat.js'
import { mget, mset } from '../../js/getData'
export default {
  components: {
    "c-title": CTitle,
    "change-btn": NowHistoryButton,
    "m-create": MCreate
  },
  data(){
    return{
      list: [],
      showForm: false,
      date: formatDate(new Date(),'yyyy-MM-dd')
    }
  },
  created(){
    this.list = mget(this.date)
  },
  methods: {
    close(isUpdate){
      if(isUpdate){
        this.list = mget(this.date)
      }
      this.showForm = false
    },
    changState(item){
      console.log(item)
      item.finsh = item.finsh ? 0 : 1
      mset(this.list,this.date)
      this.list = mget(this.date)
    },
    Delete(item){
      this.list = this.list.filter(o => {
        return item.id !== o.id
      })
      mset(this.list,this.date)
    }
  }
}
</script>
<style lang="scss" scoped>
.m-today{
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
      .urgent{
        color: red;
      }
    }
    .add-button{
      flex-grow: 1;
      text-align: center;
      .iconfont{
        font-size: 30px;
      }
    }
  }
}
</style>
