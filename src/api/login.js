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

export function getInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
