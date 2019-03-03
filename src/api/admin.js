import request from '@/utils/request'

export function getAdminList() {
    return request({
        url: '/index.php/index/Admincontroller/getAdmins',
        method: 'post',
    })
}

export function addAdmin({teacherId, password}) {
    return request({
        url: '/index.php/index/Admincontroller/addAdmin',
        method: 'post',
        data: {teacherId, password}
    })
}

//为管理员分配角色
export function AssignRoles({ teacherId, roleId }) {
    return request({
        url: '/index.php/index/Admincontroller/AssignRoles',
        method: 'post',
        data: { teacherId, roleId }
    })
}

export function deleteAdmin(teacherId) {
    return request({
        url: '/index.php/index/Admincontroller/deleteAdmin',
        method: 'post',
        data: { teacherId }
    })
}

//取所有角色列表
export function getAllRoles() {
    return request({
        url: '/index.php/index/Admincontroller/getAllRoles',
        method: 'post',
    })
}

//获取所有的权限
export function getAllPermission() {
    return request({
        url: '/index.php/index/Admincontroller/getAllPermission',
        method: 'post',
    })
}

//根据teacherId获取该用户的角色
export function getRoleByTeachId(teacherId) {
    return request({
        url: '/index.php/index/Admincontroller/getRoleByTeachId',
        method: 'post',
        params: {teacherId}
    })
}

//根据teacherId获取该用户的权限
export function getPermissionByTeachId(teacherId) {
    return request({
        url: '/index.php/index/Admincontroller/getPermissionByTeachId',
        method: 'post',
        params: {teacherId}
    })
}

//为指定的角色增加权限
export function addPermissionForRole({teacherId, roleId}) {
    return request({
        url: '/index.php/index/Admincontroller/addPermissionForRole',
        method: 'post',
        data: {teacherId, roleId}
    })
}
//为指定的角色删除权限
export function delPermissionForRole({teacherId, roleId}) {
    return request({
        url: '/index.php/index/Admincontroller/delPermissionForRole',
        method: 'post',
        data: {teacherId, roleId}
    })
}
//管理员修改密码
export function changePass({adminId, password}) {
    return request({
        url: '/index.php/index/Admincontroller/changePass',
        method: 'post',
        data: {adminId, password}
    })
}


// export default {
//     getStudentList({currentPage = 1, pageSize = 10}) {
//         return request({
//             url: '/index.php/index/Admincontroller/getAllStudents',
//             method: 'get',
//             params: {
//                 currentPage,
//                 pageSize,
//             }
//         })
//     }
// }
