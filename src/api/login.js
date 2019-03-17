import request from '@/utils/request'

export function login(username, password) {
  return request({
    url: '/index.php/index/Logincontroller/login_admin',
    method: 'post',
    data: {
      adminId: username,
      password
    }
  })
}

export function getInfo(adminId) {
  return request({
    url: '/index.php/index/Admincontroller/getAdminInfoById',
    method: 'post',
    data: { adminId }
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
