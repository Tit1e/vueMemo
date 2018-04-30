<template>
  <div class="d-list">
    <c-title></c-title>
    <add-diary></add-diary>
    <scroll class="wrapper" :data="lists">
      <ul>
        <li v-for="item in lists" :key="item.createtime">
          <d-list-item :data="item"></d-list-item>
        </li>
        <li v-if="lists.length">
          <d-list-item :data="null" class="button-line"></d-list-item>
        </li>
      </ul>
    </scroll>
  </div>
</template>
<script>
import CTitle from '@/components/common/CTitle'
import Scroll from '@/components/common/scroll'
import AddDiary from '@/components/common/AddDiary'
import DListItem from '@/components/common/DListItem'
import { dget, dset } from '../../js/getData'
export default {
  components: {
    CTitle,
    AddDiary,
    DListItem,
    Scroll
  },
  data(){
    return{
      lists: []
    }
  },
  created(){
     this.lists = dget()
  }
}
</script>
<style lang="scss" scoped>
.d-list{
  padding: 12px;
  .wrapper{
    position: absolute;
    top: 73px;
    bottom: 0;
    left: 12px;
    right: 12px;
    overflow: hidden;
    ul{
      margin: 0;
      padding: 0;
      li{
        list-style: none;
        padding: 0;
        margin: 0;
      }
      .button-line{
        height: 100px;
      }
    }
  }
}
</style>
