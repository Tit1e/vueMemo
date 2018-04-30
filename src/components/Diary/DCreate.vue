<template>
  <div class="d-create">
    <c-title></c-title>
    <add-diary></add-diary>
    <textarea v-model="diary.content" rows="10"></textarea>
    <div class="_icon">
      <span>心 情：</span>
      <svg class="icon" aria-hidden="true" @click="()=>{show = true}">
          <use :xlink:href="diary.icon"></use>
      </svg>
    </div>
    <button class="submit" @click="submit">提 交</button>
    <d-choose
      v-if="show"
      @choose="choose">
    </d-choose>
  </div>
</template>
<script>
import CTitle from '@/components/common/CTitle'
import AddDiary from '@/components/common/AddDiary'
import DChoose from '@/components/common/DChoose'
import { dget, dset } from '../../js/getData'
export default {
  components: {
    CTitle,
    AddDiary,
    DChoose
  },
  data(){
    // localStorage.clear()
    return{
      diary: {
        content: '',
        icon: '#icon-emoji-26'
      },
      show: false
    }
  },
  methods: {
    choose(icon){
      this.diary.icon = icon
      this.show = false
    },
    submit(){
      let create = new Date()
      this.diary.createtime = create.getTime()
      let data = dget()
      this.diary.id = !data.length
      ? 1
      : data[data.length - 1]['id'] + 1
      data.unshift(this.diary)
      dset(data)
      this.$router.push('/DList')
    }
  }
}
</script>
<style lang="scss" scoped>
.d-create{
  padding: 12px;
  textarea{
    resize: none;
    outline: none;
    padding: 10px;
    border: 1px solid #eee;
    border-radius: 3px;
    width: 100%;
    box-sizing: border-box;
    margin: 20px 0 10px;
    font-size: 14px;
    letter-spacing: 0.1em;
  }
  ._icon{
    margin-bottom: 20px;
    span{
      float: left;
      line-height: 30px;
    }
    .icon{
      width: 30px;
      height: 30px;
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
</style>
