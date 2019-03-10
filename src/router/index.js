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
    },{
      path: 'adminUpdatePassword',
      component: () => import('@/views/dashboard/adminUpdatePassword')
    }]
  },

  {
    path: '/student',
    name: 'student',
    component: Layout,
    meta: { title: '学生管理', icon: 'user' },
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
    path: '/teacher',
    name: 'teacher',
    component: Layout,
    meta: { title: '教师管理', icon: 'user' },
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
    path: '/admin',
    name: 'admin',
    meta: { title: '管理员', icon: 'tree' },
    component: Layout,
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
        meta: { title: '添加管理员', icon: 'tree' },
      },{
        path: 'detail',
        name: 'admindetail',
        component: () => import('@/views/member/admin/detail'),
        meta: { title: '管理员详情', icon: 'tree' },
        hidden: true
      }
    ]
  },

  // {
  //   path: '/member',
  //   component: Layout,
  //   name: 'member',
  //   meta: { title: '人员管理', icon: 'example' },
  //   children: [
  //     {
  //       path: 'student',
  //       name: 'student',
  //       component: () => import('@/views/member/index'),
  //       meta: { title: '学生管理', icon: 'table' },
  //       children: [
  //         {
  //           path: 'list',
  //           name: 'studentlist',
  //           component: () => import('@/views/member/student/list'),
  //           meta: { title: '学生列表', icon: 'table' }
  //         },{
  //           path: 'add',
  //           name: 'studentadd',
  //           component: () => import('@/views/member/student/add'),
  //           meta: { title: '添加学生', icon: 'tree' }
  //         }
  //       ]
  //     },{
  //       path: 'teacher',
  //       name: 'teacher',
  //       component: () => import('@/views/member/index'),
  //       meta: { title: '教师管理', icon: 'tree' },
  //       children: [
  //         {
  //           path: 'list',
  //           name: 'teacherlist',
  //           component: () => import('@/views/member/teacher/list'),
  //           meta: { title: '教师列表', icon: 'table' }
  //         },{
  //           path: 'add',
  //           name: 'teacheradd',
  //           component: () => import('@/views/member/teacher/add'),
  //           meta: { title: '添加教师', icon: 'tree' }
  //         }
  //       ]
  //     },
  //     {
  //       path: 'admin',
  //       name: 'admin',
  //       meta: { title: '管理员', icon: 'tree' },
  //       component: () => import('@/views/member/index'),
  //       children: [
  //         {
  //           path: 'list',
  //           name: 'adminlist',
  //           component: () => import('@/views/member/admin/list'),
  //           meta: { title: '管理员列表', icon: 'table' }
  //         },{
  //           path: 'add',
  //           name: 'adminadd',
  //           component: () => import('@/views/member/admin/add'),
  //           meta: { title: '添加管理员', icon: 'tree' },
  //         },{
  //           path: 'detail',
  //           name: 'admindetail',
  //           component: () => import('@/views/member/admin/detail'),
  //           meta: { title: '管理员详情', icon: 'tree' },
  //           hidden: true
  //         }
  //       ]
  //     },
  //   ]
  // },

  // {
  //   path: '/dormitory',
  //   component: Layout,
  //   name: 'dormitory',
  //   meta: { title: '宿舍管理', icon: 'form' },
  //   children: [
  //     {
  //       path: 'list',
  //       name: 'dormitorylist',
  //       component: () => import('@/views/dormitory/list'),
  //       meta: { title: '宿舍列表', icon: 'table' }
  //     },{
  //       path: 'add',
  //       name: 'dormitoryadd',
  //       component: () => import('@/views/dormitory/add'),
  //       meta: { title: '添加宿舍', icon: 'tree' }
  //     }
  //   ]
  // },
  {
    path: '/education',
    component: Layout,
    name: 'education',
    meta: { title: '教学管理', icon: 'form' },
    children: [
      // {
      //   path: 'specialty',
      //   name: 'specialty',
      //   meta: { title: '系别列表', icon: 'table' },
      //   component: () => import('@/views/education/index'),
      //   children: [
      //     {
      //       path: 'list',
      //       name: 'specialtylist',
      //       component: () => import('@/views/education/specialty/list'),
      //       meta: { title: '系别列表', icon: 'table' }
      //     },{
      //       path: 'add',
      //       name: 'specialtyadd',
      //       component: () => import('@/views/education/specialty/add'),
      //       meta: { title: '添加系别', icon: 'tree' }
      //     }
      //   ]
      // },
      
      {
        path: 'class',
        name: 'class',
        component: () => import('@/views/education/index'),
        meta: { title: '班级管理', icon: 'tree' },
        children: [
          {
            path: 'list',
            name: 'speciatlylist',
            component: () => import('@/views/education/class/list'),
            meta: { title: '班级列表', icon: 'table' }
          },{
            path: 'add',
            name: 'classadd',
            component: () => import('@/views/education/class/add'),
            meta: { title: '添加班级', icon: 'tree' }
          },{
            path: 'classList',
            name: 'classList',
            hidden: true,
            component: () => import('@/views/education/class/classList'),
            meta: { title: '查看班级', icon: 'tree' }
          }
        ]
      }
    ]
  },

  {
    path: '/dormitory',
    name: 'dormitory',
    component: Layout,
    meta: { title: '宿舍管理', icon: 'table' },
    children: [
      {
        path: 'list',
        name: 'dormitorybuilding',
        component: () => import('@/views/education/dormitory/building'),
        meta: { title: '宿舍楼列表', icon: 'table' }
      },{
        path: 'add',
        name: 'dormitoryadd',
        component: () => import('@/views/education/dormitory/add'),
        meta: { title: '添加宿舍', icon: 'tree' }
      },{
        path: 'dormitory',
        name: 'dormitory',
        hidden: true,
        component: () => import('@/views/education/dormitory/dormitory'),
        meta: { title: '查看宿舍', icon: 'tree' }
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
        meta: { title: '帖子列表', icon: 'nested' }
      },
      // {
      //   path: 'add',
      //   name: 'articleadd',
      //   component: () => import('@/views/article/add'),
      //   meta: { title: '帖子添加', icon: 'form' }
      // },
      {
        path: 'comments',
        name: 'articleComments',
        component: () => import('@/views/article/comments'),
        hidden: true,
        meta: { title: '帖子评论', icon: 'form' }
      },
    ]
  },
  {
    path: '/loan',
    component: Layout,
    name: 'loan',
    meta: { title: '贷款', icon: 'example' },
    children: [
      {
        path: 'list',
        name: 'loanlist',
        component: () => import('@/views/loan/list'),
        meta: { title: '贷款列表', icon: 'example' }
      },
      {
        path: 'detail',
        name: 'loandetail',
        component: () => import('@/views/loan/detail'),
        meta: { title: '贷款详情', icon: 'table' },
        hidden: true,
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
