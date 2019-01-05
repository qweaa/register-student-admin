<style lang="sass" scoped>

</style>
<template>
  <el-container>
    <el-main>
        <el-form style="max-width: 600px; width: 100%;" ref="form" :model="form" label-width="80px">
            <el-form-item label="学生姓名">
                <el-input v-model="form.studentName"></el-input>
            </el-form-item>
            <el-form-item label="准考证号">
                <el-input type="number" v-model="form.ticketNumber"></el-input>
            </el-form-item>
            <el-form-item label="毕业中学">
                <el-input v-model="form.graduate"></el-input>
            </el-form-item>
            <el-form-item label="身份证号">
                <el-input v-model="form.IDnumber"></el-input>
            </el-form-item>

            <el-form-item label="系别方向">
                <el-cascader expand-trigger="hover" :options="options" v-model="selectedOptions2" @change="handleChange" placeholder="请选择" style="width: 100%;"></el-cascader>
                <!-- <el-input v-model="form.graduate"></el-input> -->
            </el-form-item>
            <!-- <el-form-item label="系别">
                <el-input v-model="form.dept"></el-input>
            </el-form-item>
            <el-form-item label="专业ID">
                <el-input v-model="form.specialtyId"></el-input>
            </el-form-item>
            <el-form-item label="专业名称">
                <el-input v-model="form.specialtyName"></el-input>
            </el-form-item>
            <el-form-item label="班级ID">
                <el-input v-model="form.classId"></el-input>
            </el-form-item>
            <el-form-item label="班级">
                <el-input v-model="form.className"></el-input>
            </el-form-item> -->
            <!-- <el-form-item label="宿舍ID">
                <el-input v-model="form.dormitoryId"></el-input>
            </el-form-item> -->
            <el-form-item label="宿舍">
                <el-input v-model="form.dormitoryName"></el-input>
            </el-form-item>

            <!-- <el-form-item label="导师ID">
                <el-input v-model="form.tutorId"></el-input>
            </el-form-item> -->
            <el-form-item label="导师">
                <el-select style="width: 100%;" v-model="form.tutorId" placeholder="请选择">
                    <el-option v-for="item in tutor" :key="item.ID" :label="item.Name" :value="item.ID"></el-option>
                </el-select>
                <!-- <el-input v-model="form.tutorName"></el-input> -->
            </el-form-item>
            <!-- <el-form-item label="辅导员ID">
                <el-input v-model="form.instructorId"></el-input>
            </el-form-item> -->
            <el-form-item label="辅导员">
                <el-select style="width: 100%;" v-model="form.instructorId" placeholder="请选择">
                    <el-option v-for="item in instructor" :key="item.ID" :label="item.Name" :value="item.ID"></el-option>
                </el-select>
                <!-- <el-input v-model="form.instructorName"></el-input> -->
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
            formModel: {
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
            },
            
            form: {
                studentName: '',
                ticketNumber: '',
                IDnumber: '',
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
            },
            options: [{
                value: 0,
                label: '外语系',
                children: [{
                    value: 0,
                    label: '翻译',
                }]
            }, {
                value: 1,
                label: '国贸系',
                children: [{
                    value: 0,
                    label: '电子商务'
                }]
            }, {
                value: 2,
                label: '网络系',
                children: [{
                    value: 0,
                    label: '网络传播与商务网站设计'
                }, {
                    value: 1,
                    label: '多媒体'
                }, {
                    value: 2,
                    label: '网络安全'
                }]
            }],
            selectedOptions2: [],

            tutor: [
                {
                    ID: 1,
                    Name: '覃忠台'
                },{
                    ID: 2,
                    Name: '廖景荣'
                }
            ],
            instructor: [
                {
                    ID: 1,
                    Name: '曹璐婷'
                },{
                    ID: 2,
                    Name: '李Sir'
                }
            ]
        }
    },
    methods: {
        onSubmit() {
            let dept = this.options[this.selectedOptions2[0]].label
            let specialtyName = this.options[
                    this.selectedOptions2[0]
                ].children[
                    this.selectedOptions2[1]
                ].label
            console.log(dept, specialtyName)

            
        },
        handleChange(value) {
            console.log(value);
        },
    }
}
</script>
