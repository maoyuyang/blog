import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './common/assets/editor.css'
import './common/assets/snsFont/iconfont.css'
import 'normalize.css'
import VueRouter from 'vue-router'
import store from './store'
import './filters'

import App from './App.vue'
import Home from './components/home/index.vue'
import Article from './components/article/index.vue'

Vue.use(ElementUI)
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/page/1',
    component: Home,
  },
  {
    path: '/page/:pid',
    name: 'page',
    component: Home
  },
  {
    path: '/article/:aid',
    name: 'article',
    component: Article,
    meta: {
      goTop: true
    }
  },
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.goTop)) {
    window.scroll(0, 0)
  }

  next()
})

// eslint-disable-next-line
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
