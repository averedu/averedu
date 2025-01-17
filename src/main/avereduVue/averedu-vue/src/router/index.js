import { createRouter, createWebHistory } from 'vue-router'
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
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/main',
      name: 'main',
      component: MainView,
    },
    {
      path: '/ProgramMgmt',
      name: 'ProgramMgmt',
      component: ProgramMgmtView,
    },
    {
      path: '/MenuMgmt',
      name: 'MenuMgmt',
      component: MenuMgmtView,
    },
    {
      path: '/ComCdMgmt',
      name: 'ComCdMgmt',
      component: CodeGrid,
    },
    {
      path: '/DeptCdMgmt',
      name: 'DeptCdMgmt',
      component: DeptCdMgmtView,
    },
    {
      path: '/deptCdConnAttrInfo',
      name: 'deptCdConnAttrInfo',
      component: DeptCdConnAttrInfoView,
    },
  ],
})

export default router
