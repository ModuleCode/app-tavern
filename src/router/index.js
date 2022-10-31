import { createRouter, createWebHashHistory } from 'vue-router'
import HomeMineView from '@/views/HomeMineView'

const routes = [
  {
    path: '/',
    name: 'HomeMine',
    component: HomeMineView,
    redirect: to => {
      // 方法接收目标路由作为参数
      // return 重定向的字符串路径/路径对象
      return { path: '/home' }
    },
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/HomeMineView/view/HomeView.vue'),
      },
      {
        path: '/mine',
        name: 'Mine',
        component: () => import('@/views/HomeMineView/view/MineView.vue'),
      },
    ]
  },
  {
    path: '/loginReg',
    name: 'LoginReg',
    component: () => import('@/views/LoginRegView/index.vue'),
    redirect: to => {
      // 方法接收目标路由作为参数
      // return 重定向的字符串路径/路径对象
      return { path: '/login' }
    },
    children: [
      {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/LoginRegView/view/LoginView.vue'),
        meta: {
          requireAuth: false
        }
      },
      {
        path: '/reg',
        name: 'Reg',
        component: () => import('@/views/LoginRegView/view/RegView.vue'),
        meta: {
          requireAuth: false
        }
      },
    ]
  },
  {
    path: '/matching',
    name: 'Matching',
    component: () => import('@/views/MatchingSeek'),
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
//是否登录
function isAuthenticated() {
  const token = localStorage.getItem("token");
  if (token == null) {
    return false;
  } else {
    return true;
  }
}
// console.log(isAuthenticated());
router.beforeEach((to, from, next) => {
  if ((to.name == 'Login' || to.name == 'Reg') && isAuthenticated()) {
    next({
      name: "HomeMine"
    });
  }



  const requireAuth = to.meta.requireAuth;
  //  需要守护
  if (requireAuth == undefined && !isAuthenticated()) {
    next({
      name: "Login"
    })
  } else {
    next()
  }

})
export default router
