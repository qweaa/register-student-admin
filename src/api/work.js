import request from '@/utils/request'

export function getAllPermission() {
    return request({
        url: '/index.php/index/Admincontroller/getAllPermission',
        method: 'post',
    })
}

export function addWork({workName, workValue}) {
    return request({
        url: '/index.php/index/Admincontroller/addWork',
        method: 'post',
        data: {workName, workValue}
    })
}

export function updateWorkName({workId, workName}) {
    return request({
        url: '/index.php/index/Admincontroller/updateWorkName',
        method: 'post',
        data: {workId, workName}
    })
}

export function deleteWork(workId) {
    return request({
        url: '/index.php/index/Admincontroller/deleteWork',
        method: 'post',
        data: {workId}
    })
}

//根据角色id取权限列表
export function getWorksByRoleId(roleId) {
    return request({
        url: '/index.php/index/Admincontroller/getWorksByRoleId',
        method: 'post',
        data: {roleId}
    })
}

//为角色添加权限
export function addPermissionForRole({roleId, workId}) {
    return request({
        url: '/index.php/index/Admincontroller/addPermissionForRole',
        method: 'post',
        data: {roleId, workId}
    })
}

//为角色删除权限
export function delPermissionForRole({roleId, workId}) {
    return request({
        url: '/index.php/index/Admincontroller/delPermissionForRole',
        method: 'post',
        data: {roleId, workId}
    })
}