import request from '@/utils/request'

export function getLoanList() {
  return request({
    url: '/index.php/index/Studentcontroller/getLoanList',
    method: 'post',
  })
}

export function getLoanDetail(id) {
  return request({
    url: '/index.php/index/Studentcontroller/getLoanDetail',
    method: 'get',
    params: { id }
  })
}

export function AuditingLoan({id, auditopinion}) {
  return request({
    url: '/index.php/index/Studentcontroller/AuditingLoan',
    method: 'post',
    data: {id, auditopinion}
  })
}
