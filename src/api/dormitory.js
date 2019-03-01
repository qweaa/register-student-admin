import request from '@/utils/request'

export function getAllDormitoryByBuildings(building) {
    return request({
        url: '/index.php/index/Dormitorycontroller/getAllDormitoryByBuilding',
        method: 'post',
        params: { building }
    })
}

export function deleteDormitoryById(dormitoryId) {
    return request({
        url: '/index.php/index/Dormitorycontroller/deleteDormitoryById',
        method: 'post',
        data: { dormitoryId }
    })
}

export function updateDormitoryById({ dormitoryId, dormitoryName }) {
    return request({
        url: '/index.php/index/Dormitorycontroller/updateDormitoryById',
        method: 'post',
        data: { dormitoryId, dormitoryName }
    })
}

export function addDormitory({ dormitoryName, building, specialtyId, specialtyName, dept }) {
    return request({
        url: '/index.php/index/Dormitorycontroller/addDormitory',
        method: 'post',
        data: { dormitoryName, building, specialtyId, specialtyName, dept }
    })
}