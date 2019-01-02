<style lang="sass" scoped>

</style>
<template>
  <el-container>
    <el-main>
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="学生姓名">
                <el-input v-model="form.studentName"></el-input>
            </el-form-item>
            <el-form-item label="准考证号">
                <el-input type="number" v-model="form.ticketNumber"></el-input>
            </el-form-item>
            <el-form-item label="身份证号">
                <el-input v-model="form.IDnumber"></el-input>
            </el-form-item>
            <el-form-item label="班级ID">
                <el-input v-model="form.classId"></el-input>
            </el-form-item>
            <el-form-item label="班级">
                <el-input v-model="form.className"></el-input>
            </el-form-item>
            <el-form-item label="专业ID">
                <el-input v-model="form.specialtyId"></el-input>
            </el-form-item>
            <el-form-item label="专业名称">
                <el-input v-model="form.specialtyName"></el-input>
            </el-form-item>
            <el-form-item label="系别">
                <el-input v-model="form.dept"></el-input>
            </el-form-item>
            <el-form-item label="宿舍ID">
                <el-input v-model="form.dormitoryId"></el-input>
            </el-form-item>
            <el-form-item label="宿舍名称">
                <el-input v-model="form.dormitoryName"></el-input>
            </el-form-item>
            <el-form-item label="导师ID">
                <el-input v-model="form.tutorId"></el-input>
            </el-form-item>
            <el-form-item label="导师姓名">
                <el-input v-model="form.tutorName"></el-input>
            </el-form-item>
            <el-form-item label="讲师ID">
                <el-input v-model="form.instructorId"></el-input>
            </el-form-item>
            <el-form-item label="讲师姓名">
                <el-input v-model="form.instructorName"></el-input>
            </el-form-item>
            <el-form-item label="学院">
                <el-input v-model="form.graduate"></el-input>
            </el-form-item>
            <el-form-item label="地址">
                <el-input v-model="form.address"></el-input>
            </el-form-item>
            <el-form-item label="父亲">
                <el-input v-model="form.father"></el-input>
            </el-form-item>
            <el-form-item label="父亲电话">
                <el-input v-model="form.fatherPhone"></el-input>
            </el-form-item>
            <el-form-item label="母亲">
                <el-input v-model="form.mother"></el-input>
            </el-form-item>
            <el-form-item label="母亲电话">
                <el-input v-model="form.motherPhone"></el-input>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="onSubmit">立即创建</el-button>
                <el-button>取消</el-button>
            </el-form-item>
        </el-form>
    </el-main>
  </el-container>
</template>
<script>
import { getStudentList } from "@/api/student";
export default {
    data() {
        return {
            form: {
                studentName: '',
                ticketNumber: '',
                IDnumber: '',
                classId: '',
                className: '',
                specialtyId: '',
                specialtyName: '',
                dept: '',
                dormitoryId: '',
                dormitoryName: '',
                tutorId: '',
                tutorName: '',
                instructorId: '',
                instructorName: '',
                graduate: '',
                address: '',
                father: '',
                fatherPhone: '',
                mother: '',
                motherPhone: '',
            }
        }
    },
    methods: {
        onSubmit() {
            console.log('submit!');
        }
    }
}
</script>
