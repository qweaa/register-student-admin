import request from '@/utils/request'

export function getSpecialtyByDept(dept) {
    return request({
        url: '/index/Specialtycontroller/getSpecialtyByDept',
        method: 'get',
        params: { dept }
    })
}

export function deleteSpecialty(specialtyId) {
    return request({
        url: '/index/Specialtycontroller/deleteSpecialty',
        method: 'post',
        data: { specialtyId }
    })
}

export function addSpecialty({ dept, specialtyName }) {
    return request({
        url: '/index/Specialtycontroller/addSpecialty',
        method: 'post',
        data: { dept, specialtyName }
    })
}