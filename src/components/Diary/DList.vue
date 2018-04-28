<template>
  <div class="d-list">
    <c-title></c-title>
    d-list
  </div>
</template>
<script>
import CTitle from '@/components/common/CTitle'
export default {
  components: {
    CTitle
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
.d-list{
  background-color: #fdea77;
}
</style>
