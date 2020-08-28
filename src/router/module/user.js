/**
 * @description 用户管理
 */

import Layout from '@/layout'

const user = {
  path: '/user',
  component: Layout,
  redirect: '/user/account',
  alwaysShow: true,
  meta: { title: '用户管理', icon: 'dashboard' },
  children: [
    {
      path: 'account',
      name: 'account',
      component: () => import('@/views/user/account/index'),
      meta: { title: '账号管理', icon: 'dashboard' }
    },
    {
      path: 'role',
      name: 'role',
      component: () => import('@/views/user/role/index'),
      meta: { title: '角色管理', icon: 'dashboard' }
    }
  ]
}

export default user
