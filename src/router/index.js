import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const MainCooperation = resolve => require(['../pages/MainCooperation'], resolve)

// 联系我们
const Contact = resolve => require(['../pages/Contact'], resolve)

let routes = [
  {name: MainCooperation, path: '/', component: MainCooperation},

  // 联系我们
  {name: Contact, path: '/contact', component: Contact}
]

const router = new Router({
  routes: routes
})

export default router
