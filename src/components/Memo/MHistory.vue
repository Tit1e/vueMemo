<template>
  <div class="m-history">
    <c-title></c-title>
    m-history
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
}
</style>
