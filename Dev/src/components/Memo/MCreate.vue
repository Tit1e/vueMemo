<template>
  <div class="m-create" @click="close">
    <div class="create-form">
      <h3 class="h3">{{param ? '编辑' : '新建'}}备忘</h3>
      <input type="text" v-model="formData.content" class="input">
      <div class="urgent">
        <label @click="cancelCheck('1')">
          <input type="radio" name="urgent" v-model="formData.urgent" value="1">
          <i class="iconfont icon-youxianji1" :class="formData.urgent === '1' ? 'active' : ''"></i>
        </label>
        <label @click="cancelCheck('2')">
          <input type="radio" name="urgent" v-model="formData.urgent" value="2">
          <i class="iconfont icon-youxianji2" :class="formData.urgent === '2' ? 'active' : ''"></i>
        </label>
        <label @click="cancelCheck('3')">
          <input type="radio" name="urgent" v-model="formData.urgent" value="3">
          <i class="iconfont icon-youxianji" :class="formData.urgent === '3' ? 'active' : ''"></i>
        </label>
      </div>
      <button class="submit" @click="submit">{{param ? '保 存' : '新 建'}}</button>
    </div>
  </div>
</template>
<script>
import { formatDate } from '../../js/dateFormat'
import { mget, mset } from '../../js/getData'
export default {
  props:['param'],
  data(){
    return {
      formData: this.param ? Object.assign({},this.param) : {}
    }
  },
  methods: {
    close(e){
      if(e.target.className === 'm-create'){
        this.$emit('close')
      }
    },
    submit(){
      if(!this.param){
        let now = new Date()
        let nowDate = formatDate(now,'yyyy-MM-dd')
        let data = mget()
        if(data[nowDate] === undefined){
          data[nowDate] = []
        }
        // 如果当天没有记录，则 id 为 1 ，如果有记录，则取列表最后一个元素的 id 再 +1
        this.formData.id = data[nowDate].length === 0 
        ? 1 
        : data[nowDate][data[nowDate].length - 1]['id'] + 1
  
        this.formData.createtime = now.getTime()
        this.formData.isfinsh = 0
        this.formData.finshtime = ''
        data[nowDate].push(this.formData)
        mset(data)
      }else{
        let date = new Date(this.param.createtime)
        let format = formatDate(date,'yyyy-MM-dd')
        let data = mget()
        data[format].map(item => {
          if(item.id === this.formData.id){
            item.content = this.formData.content
            item.urgent = this.formData.urgent
          }
        })
        console.log(data)
        mset(data)
      }
      this.$emit('close',1)
    },
    cancelCheck(val){
      if(this.formData.urgent === val){
        this.formData.urgent = ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.m-create{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  .create-form{
    position: relative;
    background-color: #fff;
    padding: 10px;
    border-radius: 2px;
    box-shadow: 0px 2px 10px -2px;
    box-sizing: border-box;
    top: 30%;
    left: 10%;
    width: 80%;
    .h3{
      margin-top: 0;
      text-align: center;
    }
    .input{
      outline: none;
      background-color: #fff;
      box-sizing: border-box;
      border: 1px solid #eee;
      width: 100%;
      height: 30px;
      font-size: 14px;
      padding: 4px 10px;
    }
    .urgent{
      display: flex;
      margin: 20px 0;
      label{
        flex-grow: 1;
        text-align: center;
        input[type=radio]{
          display: none;
        }
        .active{
          color:red;
        }
        .iconfont{
          font-size: 18px;
        }
      }
    }
    .submit{
      display: block;
      width: 80px;
      border: none;
      background-color: #54BF8E;
      color: #fff;
      font-size: 16px;
      font-weight: bold;
      border-radius: 3px;
      margin: 0 auto;
      padding: 4px 10px;
    }
  }
}
</style>

