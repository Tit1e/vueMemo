<template>
  <div class="d-choose">
    <div class="dialog">
      <div ref="icon" @click="choose('#icon-emoji-')" class="item" v-for="(item,index) in 30" v-if="index === 0">
        <svg :style="style" class="icon" aria-hidden="true">
          <use xlink:href="#icon-emoji-"></use>
        </svg>
      </div>
      <div class="item" @click="choose(`#icon-emoji-${index}`)" v-else>
        <svg :style="style" class="icon" aria-hidden="true">
          <use :xlink:href="`#icon-emoji-${index}`"></use>
        </svg>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      style: {
        height: ''
      }
    }
  },
  mounted(){
    let width = this.$refs.icon[0].clientWidth
    this.style.height = `${width}px`
  },
  methods: {
    choose(icon){
      this.$emit('choose',icon)
    }
  }
}
</script>
<style lang="scss" scoped>
.d-choose{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  .dialog{
    background-color: #fff;
    position: relative;
    padding: 10px;
    border-radius: 2px;
    box-shadow: 0px 2px 10px -2px;
    box-sizing: border-box;
    top: 30%;
    left: 10%;
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    .item{
      width: 10%;
      margin-bottom: 10px;
      .icon{
        width: 100%;
      }
    }
  }
}
</style>
