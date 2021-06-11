import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: require('@/components/Home').default
    },
    {
      path:'income',
      name:'income',
      component: require('@/components/Income').default
    },
    {
      path:'expend',
      name:'expend',
      component: require('@/components/Expend').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
