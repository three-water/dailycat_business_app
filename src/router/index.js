import Vue from 'vue'
import Router from 'vue-router'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(Router)
Vue.use(Mint)

const MainCooperation = resolve => require(['../pages/MainCooperation'], resolve)

// 常见问题
const Issue = resolve => require(['../pages/Issue'], resolve)

// 联系我们
const Contact = resolve => require(['../pages/Contact'], resolve)

let routes = [
  {name: MainCooperation, path: '/', component: MainCooperation},

  // 常见问题
  {name: Issue, path: '/issue', component: Issue},
  // 联系我们
  {name: Contact, path: '/contact', component: Contact}
]

const router = new Router({
  routes: routes
})

export default router
