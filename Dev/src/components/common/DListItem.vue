<template>
  <div class="d-list-item">
    <div class="line">
      <svg v-if="data" class="icon" aria-hidden="true">
          <use :xlink:href="data.icon"></use>
      </svg>
    </div>
    <div class="content" v-if="data">
      <div class="_pre">
        <pre>{{data.content}}</pre>
      </div>
      <div class="time">{{ data.createtime | formatDate }}</div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.d-list-item{
  position: relative;
  height: 200%;
  .line{
    position: absolute;
    left: 18%;
    height: 100%;
    width: 6px;
    background-color: #47B784;
    .icon{
      background-color: #47B784;
      padding: 4px;
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      width: 30px;
      height: 30px;
    }
  }
  .content{
    padding: 20px 0px;
    box-sizing: border-box;
    .time{
      position: absolute;
      bottom: 25px;
      right: 8px;
      font-size: 12px;
      color: #aaa;
    }
    ._pre{
      margin: 0px 0px 0px 28%;
      position: relative;
      &:after, &:before {
        border: solid transparent;
        content: ' ';
        height: 0;
        right: calc(100%);
        position: absolute;
        width: 0;
      }
      &:before {
        border-width: 11px;
        border-right-color: #47B784;
        top: 50%;
        transform: translateY(-50%);
      }
      pre{
        margin: 0px;
        padding: 10px 10px 30px 10px;
        border: 1px solid #47B784;
        border-radius: 3px;
        box-sizing: border-box;
        font-size: 14px;
        line-height: 20px;
        white-space: pre-wrap;
        word-wrap: break-word;
      }
    }
  }
}
</style>

<script>
import { formatDate } from '../../js/dateFormat.js'
export default {
  props: ['data'],
  filters: {
    formatDate(time) {
      let date = new Date(time);
      return formatDate(date, "yy/MM/dd hh:mm");
    }
  }
}
</script>
