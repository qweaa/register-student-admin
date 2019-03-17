import request from '@/utils/request'

export function addRole({roleName}) {
    return request({
        url: '/index.php/index/Admincontroller/addRole',
        method: 'post',
        data: { roleName } 
    })
}


export function addWorksforRole({roleId, works}) {
    return request({
        url: '/index.php/index/Admincontroller/addWorksforRole',
        method: 'post',
        data: { roleId, works } 
    })
}

export function updateRoleName({roleId, roleName}) {
    return request({
        url: '/index.php/index/Admincontroller/updateRoleName',
        method: 'post',
        data: { roleId, roleName } 
    })
}


export function deleteRole(roleId) {
    return request({
        url: '/index.php/index/Admincontroller/deleteRole',
        method: 'post',
        data: { roleId } 
    })
}