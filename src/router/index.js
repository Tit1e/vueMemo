import Vue from 'vue'
import Router from 'vue-router'
// Home
import Home from '@/components/Home/Home'
// Diary
import DList from '@/components/Diary/DList'
import DCreate from '@/components/Diary/DCreate'
// Memo
import MCreate from '@/components/Memo/MCreate'
import MHistory from '@/components/Memo/MHistory'
import MToday from '@/components/Memo/MToday'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/Home'
    },
    {
      path: '/Home',
      name: '主 页',
      component: Home
    },
    {
      path: '/DList',
      name: '心 情',
      component: DList
    },
    {
      path: '/DList/DCreate',
      name: '新 建 心 情',
      component: DCreate
    },
    {
      path: '/MToday',
      name: '今 日 备 忘',
      component: MToday
    },
    {
      path: '/MHistory',
      name: '历 史 备 忘',
      component: MHistory
    },
  ]
})
