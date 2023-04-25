import { RouteRecordRaw } from 'vue-router'
import layout from '@/layouts'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    component: layout,
    children: [
      {
        path: '',
        name: 'index-home',
        component: () => import('@/views/index/HomePage.vue'),
        meta: {
          title: '首页',
          showAppBar: true,
          showBottomBar: true
        }
      },
      {
        path: 'about',
        name: 'index-about',
        component: () => import('@/views/index/Page2.vue'),
        meta: {
          title: '关于',
          showAppBar: true,
          showBottomBar: true
        }
      },
      {
        path: 'page1',
        name: 'index-page1',
        component: () => import('@/views/index/Page1.vue'),
        meta: {
          title: 'page1',
          showAppBar: true,
          showBack: true,
          showThemeChange: true
        }
      },
      {
        path: 'page2',
        name: 'index-page2',
        component: () => import('@/views/index/Page2.vue'),
        meta: {
          title: 'page2',
          showAppBar: true,
          showBack: true,
          showGoHome: true,
          showGithub: true,
        }
      }
    ]
  }
]
