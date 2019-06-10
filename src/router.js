import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home'
import Login from './views/login'
import Info from './views/info'
import Admin from './views/admin'
import Chat from './views/chat'
import Header from './views/header'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/header',
      name: 'header',
      component: Header, children: [
        {
          path: '/home',
          name: 'home',
          component: Home
        },{
          path:'/admin',
          name: 'admin',
          component: Admin
        },{
          path: '/chat',
          name: 'chat',
          component: Chat
        },{
          path: '/info',
          name: 'info',
          component: Info
        }]
    }
  ]
})
