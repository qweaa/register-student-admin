import request from '@/utils/request'

export function getTeacherList({ currentPage = 1, pageSize = 10 }) {
    return request({
        url: '/index/Teachercontroller/getAllTeachers',
        method: 'get',
        params: { currentPage, pageSize }
    })
}

export function updateTeacher({ teacherId, phone, type }) {
    return request({
        url: '/index/Teachercontroller/updateTeacherById',
        method: 'post',
        data: { teacherId, phone, type }
    })
}

export function addTeacher({ teacherName, specialtyId, specialtyName, dept, phone, type }) {
    return request({
        url: '/index.php/index/Teachercontroller/addTeacher',
        method: 'post',
        data: { teacherName, specialtyId, specialtyName, dept, phone, type }
    })
}   