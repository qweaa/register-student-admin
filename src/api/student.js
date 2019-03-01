import request from '@/utils/request'

export function getStudentList({currentPage = 1, pageSize = 10}) {
    return request({
        url: '/index.php/index/Studentcontroller/getAllStudents',
        method: 'get',
        params: {
            currentPage,
            pageSize,
        }
    })
}

export function addStudent(options = {}) {
    return request({
        url: '/index/Studentcontroller/addStudent',
        method: 'post',
        data: options
    })
}

export function updateStudent({ studentId, graduate, fatherPhone, motherPhone }) {
    return request({
        url: '/index/Studentcontroller/updateStudentById',
        method: 'post',
        data: { studentId, graduate, fatherPhone, motherPhone }
    })
}

export function delStudent(studentId) {
    return request({
        url: '/index/Studentcontroller/deleteStudentById',
        method: 'post',
        data: { studentId }
    })
}
// export default {
//     getStudentList({currentPage = 1, pageSize = 10}) {
//         return request({
//             url: '/index.php/index/Studentcontroller/getAllStudents',
//             method: 'get',
//             params: {
//                 currentPage,
//                 pageSize,
//             }
//         })
//     }
// }
