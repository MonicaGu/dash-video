import Vue from 'vue'
import Router from 'vue-router'
import watchVideo from '@/components/watchVideo'
import liveVideo from '@/components/liveVideo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'watchVideo',
      component: watchVideo
    },
    {
      path: '/liveVideo',
      component: liveVideo
    }
  ]
})
