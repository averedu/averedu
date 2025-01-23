import { createRouter, createWebHistory } from 'vue-router'
import CommonView from '../views/CommonView.vue'

import ProgramMgmtView from '../views/ProgramMgmtView.vue'
import MenuMgmtView from '../views/MenuMgmtView.vue'
import CodeGrid from '../views/CodeGrid.vue'
import DeptCdMgmtView from '../views/DeptCdMgmtView.vue'
import DeptCdConnAttrInfoView from '../views/DeptCdConnAttrInfoView.vue'
import MainView from '@/views/MainView.vue'
// import LoginView from '@/views/LoginView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    /*
    {
      path: '/',
      name: 'login',
      component: LoginView,
    },
    */
    {
      path: '/CommonView',
      name: '공통기능관리',

      component: CommonView,
    },   
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/main',
      name: '메인',

      component: MainView,
    },
    {
      path: '/ProgramMgmt',
      name: '프로그램관리',
      component: ProgramMgmtView,
    },
    {
      path: '/MenuMgmt',
      name: '메뉴관리',
      component: MenuMgmtView,
    },
    {
      path: '/ComCdMgmt',
      name: '공통코드관리',
      component: CodeGrid,
    },
    {
      path: '/DeptCdMgmt',
      name: '부서코드관리',
      component: DeptCdMgmtView,
    },
    {
      path: '/deptCdConnAttrInfo',
      name: '부서코드연계속성정보',
      component: DeptCdConnAttrInfoView,
    },
  ],
})

export default router
