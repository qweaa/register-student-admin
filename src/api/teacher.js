import request from '@/utils/request'

export default {
    getTeacherList() {
        return request({
            url: '/index.php/index/Teachercontroller/getAllTeachers',
            method: 'get',
        })
    }
}
