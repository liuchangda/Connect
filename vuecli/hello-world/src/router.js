import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path:'/mine',
      name:'mine',
      component:() => import('./views/Mine.vue')
    },
    {
      path:'/test',
      name:'test',
      component:() => import('./views/Test.vue'),
      children:[
        {
          path:'/test1',
          name:'test1',
          component:() => import('./views/Test.1.vue')
        },
        {
          path:'/test2',
          name:'Test2',
          component:() => import('./views/Test.2.vue')
        },
        {
          path:'/testurl/:userId/:userName',
          name:'TestUrl',
          component:() => import('./views/TestUrl.vue')

        },
        {
          path:'/home',
          redirect:'/'
        },
        {
          path:'/redirectparam/:userId/:userName',
          redirect:'/testurl/:userId/:userName',

        },
        {
          path:'/test1',
          component:() => import('./views/Test.1.vue'),
          alias:'abc'
        }
      ]
    }
  ]
})
