import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirect in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
**/
export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/404', component: () => import('@/views/404'), hidden: true },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: 'Dashboard',
    hidden: true,
    children: [{
      path: 'dashboard',
      component: () => import('@/views/dashboard/index')
    }]
  },

  {
    path: '/member',
    component: Layout,
    name: 'member',
    meta: { title: '人员管理', icon: 'example' },
    children: [
      {
        path: 'student',
        name: 'student',
        component: () => import('@/views/member/student/index'),
        meta: { title: '学生管理', icon: 'table' },
        children: [
          {
            path: 'list',
            name: 'studentlist',
            component: () => import('@/views/member/student/list'),
            meta: { title: '学生列表', icon: 'table' }
          },{
            path: 'add',
            name: 'studentadd',
            component: () => import('@/views/member/student/add'),
            meta: { title: '添加学生', icon: 'tree' }
          }
        ]
      },{
        path: 'teacher',
        name: 'teacher',
        component: () => import('@/views/member/teacher/index'),
        meta: { title: '教师管理', icon: 'tree' },
        children: [
          {
            path: 'list',
            name: 'teacherlist',
            component: () => import('@/views/member/teacher/list'),
            meta: { title: '教师列表', icon: 'table' }
          },{
            path: 'add',
            name: 'teacheradd',
            component: () => import('@/views/member/teacher/add'),
            meta: { title: '添加教师', icon: 'tree' }
          }
        ]
      },{
        path: 'admin',
        name: 'admin',
        meta: { title: '管理员', icon: 'tree' },
        children: [
          {
            path: 'list',
            name: 'adminlist',
            component: () => import('@/views/member/admin/list'),
            meta: { title: '管理员列表', icon: 'table' }
          },{
            path: 'add',
            name: 'adminadd',
            component: () => import('@/views/member/admin/add'),
            meta: { title: '添加管理员', icon: 'tree' }
          }
        ]
      },
    ]
  },

  {
    path: '/dormitory',
    component: Layout,
    name: 'dormitory',
    meta: { title: '宿舍管理', icon: 'form' },
    children: [
      {
        path: 'list',
        name: 'dormitorylist',
        component: () => import('@/views/dormitory/list'),
        meta: { title: '宿舍列表', icon: 'table' }
      },{
        path: 'add',
        name: 'dormitoryadd',
        component: () => import('@/views/dormitory/add'),
        meta: { title: '添加宿舍', icon: 'tree' }
      }
    ]
  },{
    path: '/education',
    component: Layout,
    name: 'education',
    meta: { title: '教学管理', icon: 'form' },
    children: [
      {
        path: 'specialty',
        name: 'specialty',
        meta: { title: '系别列表', icon: 'table' },
        children: [
          {
            path: 'list',
            name: 'specialtylist',
            component: () => import('@/views/education/specialty/list'),
            meta: { title: '系别列表', icon: 'table' }
          },{
            path: 'add',
            name: 'specialtyadd',
            component: () => import('@/views/education/specialty/add'),
            meta: { title: '添加系别', icon: 'tree' }
          }
        ]
      },{
        path: 'class',
        name: 'class',
        meta: { title: '班级管理', icon: 'tree' },
        children: [
          {
            path: 'list',
            name: 'classlist',
            component: () => import('@/views/education/class/list'),
            meta: { title: '班级列表', icon: 'table' }
          },{
            path: 'add',
            name: 'classadd',
            component: () => import('@/views/education/class/add'),
            meta: { title: '添加班级', icon: 'tree' }
          }
        ]
      }
    ]
  },

  {
    path: '/article',
    component: Layout,
    name: 'article',
    meta: { title: '文章管理', icon: 'example' },
    children: [
      {
        path: 'list',
        name: 'articlelist',
        component: () => import('@/views/article/list'),
        meta: { title: '文章列表', icon: 'table' }
      },{
        path: 'add',
        name: 'articleadd',
        component: () => import('@/views/article/add'),
        meta: { title: '添加文章', icon: 'form' }
      },
    ]
  },

  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
