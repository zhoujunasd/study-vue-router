import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

import home from '../components/home'
// import detail from "../components/detail"

// 1、下载npm install --save nprogress
// 2、导入 nprogress以及样式，
// 3、使用：开始时：NProgress.start();结束时：NProgress.done();
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const router = new Router({
  // history模式，不需要#，
  mode: 'history',
  routes: [{
      path: '/',
      meta: {
        title: "首页"
      },
      name: "home",
      component: home,

      // name: 'HelloWorld',
      // component: HelloWorld
    },
    // {
    //   path: '/detail',
    //   component: detail
    // },
    // 同步加载，在第一次请求时，就将所有同步加载路由下载完成
    // 异步加载，在跳转时再请求页面内容，（单页面性能需求）
    {
      // 设置动态路由的名称 :id,获取$route.params.id
      // 在script函数中，通过this.$route.params.id获取
      path: '/detail/:id',
      meta: {
        title: "详情页"
      },
      name: "detail",
      component: () => import('../components/detail'),

    }, {
      path: '/login',
      meta: {
        title: "登录页"
      },
      name: 'login',
      component: () => import('../components/login'),

    },
    {
      path:'/main',
      component:()=> import('../views/Layout/index'),
      redirect:'/main/home',
      children:[
        {
          path:'home',
          meta: {
            title: "首页"
          },
          name: "mhome",
          component: home,
        },
        {
          path: 'detail/:id',
          meta: {
            title: "详情页"
          },
          name: "mdetail",component: () => import('../components/detail')
        }, {
          path: 'login',
          meta: {
            title: "登录页"
          },
          name: 'mlogin',component: () => import('../components/login'),
        },
      ]
    }
  ]
})

// 在路由跳转之前
router.beforeEach((to, from, next) => {
  // to and from are both route objects
  // console.log(to)
  // console.log(from)
  NProgress.start();
  if (to.meta.title) {
    document.title = to.meta.title
  }
  // 必须要写next()
  next()
})

// 在路由跳转之后
router.afterEach((to, from) => {
  NProgress.done();

})

export default router
