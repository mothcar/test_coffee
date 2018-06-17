import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Edit from '@/components/Edit'
import News from '@/components/News'
import Login from '@/components/Login'
import Frame from '@/components/Frame'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },

    {
      path: '/edit',
      name: 'edit',
      component: Edit
    },

    {
      path: '/news',
      name: 'news',
      component: News
    },

    {
      path: '/frame',
      name: 'frame',
      component: Frame
    },

    {
      path: '/login',
      name: 'login',
      component: Login
    },

  ]
})
