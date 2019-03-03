<style lang="sass" scoped>

</style>
<template>
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
            <el-input type="number" v-model="form.IDnumber"></el-input>
        </el-form-item>
        <el-form-item label="联系电话">
            <el-input type="number" v-model="form.phone"></el-input>
        </el-form-item>

        <el-form-item label="系别">
            <!-- <el-select @change="onDeptChange" style="width: 100%;" v-model="form.dept" placeholder="请选择"> -->
            <el-select style="width: 100%;" v-model="form.dept" placeholder="请选择">
                <el-option v-for="item in deptData" :key="item.ID" :label="item.Name" :value="item.Name"></el-option>
            </el-select>
        </el-form-item>
        <!-- <el-form-item label="班级">
            <el-select style="width: 100%;" v-model="form.specialtyId" placeholder="请先选择系别">
                <el-option v-for="item in specialtyData" :key="item.specialtyId" :label="item.specialtyName" :value="item.specialtyId"></el-option>
            </el-select>
        </el-form-item> -->

        <!-- <el-form-item label="系别方向">
            <el-cascader expand-trigger="hover" :options="options" v-model="specialty" @change="handleChange" placeholder="请选择" style="width: 100%;"></el-cascader>
        </el-form-item> -->
        <!-- <el-form-item label="宿舍">
            <el-input v-model="form.dormitoryName"></el-input> -->

            <!-- <el-select style="width: 100%;" v-model="form.dormitoryId" placeholder="请选择">
                <el-option v-for="item in dormitory" :key="item.ID" :label="item.Name" :value="item.ID"></el-option>
            </el-select> -->
        <!-- </el-form-item> -->
        <!-- <el-form-item label="导师">
            <el-select style="width: 100%;" v-model="form.tutorId" placeholder="请选择">
                <el-option v-for="item in tutor" :key="item.teacherId" :label="item.teacherName" :value="item.teacherId"></el-option>
            </el-select>
        </el-form-item> -->
        <!-- <el-form-item label="辅导员">
            <el-select style="width: 100%;" v-model="form.instructorId" placeholder="请选择">
                <el-option v-for="item in instructor" :key="item.ID" :label="item.Name" :value="item.ID"></el-option>
            </el-select>
        </el-form-item> -->

        <el-form-item label="地址">
            <el-input v-model="form.address"></el-input>
        </el-form-item>
        <el-form-item label="父亲">
            <el-input v-model="form.father"></el-input>
        </el-form-item>
        <el-form-item label="父亲电话">
            <el-input type="number" v-model="form.fatherPhone"></el-input>
        </el-form-item>
        <el-form-item label="母亲">
            <el-input v-model="form.mother"></el-input>
        </el-form-item>
        <el-form-item label="母亲电话">
            <el-input type="number" v-model="form.motherPhone"></el-input>
        </el-form-item>

        <el-form-item>
            <el-button type="primary" @click="onSubmit">立即创建</el-button>
            <el-button @click="resetForm">重置</el-button>
        </el-form-item>
    </el-form>
</template>
<script>
import deptData from '@/data/dept'
import { addStudent } from "@/api/student";
import { getSpecialtyByDept } from "@/api/specialty";
import { getTeacherList } from "@/api/teacher";
export default {
    data() {
        return {
            deptData: deptData,
            form: {
                studentName: '',
                ticketNumber: '',
                IDnumber: '',
                phone: '',
                // specialtyId: '',
                // specialtyName: '',
                dept: '',
                // dormitoryId: '',
                // dormitoryName: '',
                // tutorId: '',
                // tutorName: '',
                // instructorId: '',
                // instructorName: '',
                graduate: '',
                address: '',
                father: '',
                fatherPhone: '',
                mother: '',
                motherPhone: '',
            },
            
                // studentName: '',
                // ticketNumber: '',
                // IDnumber: '',
                // specialtyId: '',
                // specialtyName: '',
                // dept: '',
                // dormitoryId: '',
                // dormitoryName: '',
                // tutorId: '',
                // tutorName: '',
                // instructorId: '',
                // instructorName: '',
                // graduate: '',
                // address: '',
                // father: '',
                // fatherPhone: '',
                // mother: '',
                // motherPhone: '',
            
            formModel: {
                studentName: '测试',
                ticketNumber: '4401542121564156454',
                IDnumber: '44015613215645646',
                phone: '13727887876',
                // specialtyId: '',
                // specialtyName: '',
                dept: '',
                // dormitoryId: '1',
                // dormitoryName: 'R340',
                // tutorId: '1',
                // tutorName: '',
                // instructorId: '',
                // instructorName: '',
                graduate: '广州六中',
                address: '广东广州越秀',
                father: '李刚',
                fatherPhone: '137265556565',
                mother: '李梅',
                motherPhone: '134564654645',
            },
            specialtyData: [],
            specialtyDataIndex: 0,

            tutor: [],
            instructor: [
                {
                    ID: 1,
                    Name: '曹璐婷'
                },{
                    ID: 2,
                    Name: '李Sir'
                }
            ],
        }
    },
    methods: {
        getTeacher(){
            getTeacherList({
                currentPage: 1,
                pageSize: 10000,
            }).then(data=>{
                console.log('教师：',data)
                this.tutor = data.data
            })
        },

        getName(id, arrID, arrName, arr){
            if(!arr || !arr.length) return ''

            let result = ''
            for(let i of arr){
                if(i[arrID] == id){
                    result = i[arrName]
                }
            }
            return result
        },
        onSubmit() {
            let form  = JSON.parse(JSON.stringify(this.form))
            console.log(form)

            // let specialtyName = this.getName(form.specialtyId, 'specialtyId', 'specialtyName', this.specialtyData)

            // let tutorName = this.getName(form.tutorId, 'teacherId', 'teacherName', this.tutor)

            // form.specialtyName = specialtyName
            // form.tutorName = tutorName
            // form.dormitoryId = 1

            for(let i in form){
                if(form[i] === ''){
                    this.$message({
                        type: 'warning',
                        message: '请填写表单'
                    });
                    return
                }
            }

            if(!/^\d{15}|\d{18}$/.test(form.IDnumber)){
                this.$message({
                    type: 'warning',
                    message: '请填写正确的身份证号'
                });
                return
            }

            if(!/^1[3|4|5|7|8]\d{9}$/.test(form.phone)){
                this.$message({
                    type: 'warning',
                    message: '请填写正确的学生联系电话'
                });
                return
            }

            if(!/^1[3|4|5|7|8]\d{9}$/.test(form.fatherPhone)){
                this.$message({
                    type: 'warning',
                    message: '请填写正确的父亲联系电话'
                });
                return
            }

            if(!/^1[3|4|5|7|8]\d{9}$/.test(form.motherPhone)){
                this.$message({
                    type: 'warning',
                    message: '请填写正确的母亲联系电话'
                });
                return
            }

            addStudent(form).then(data=>{
                this.resetForm()
                this.$message({
                    type: 'success',
                    message: '添加成功'
                });
                console.log('添加学生：',data)
            })
            
        },
        onDeptChange(value){
            this.form.specialtyId = ''
            this.specialtyData = ''
            getSpecialtyByDept(value).then(data=>{
                this.specialtyData = data.data
            })
        },
        resetForm(){
            for(let i in this.form){
                this.form[i] = ''
            }
        },
    },
    created(){
        this.getTeacher()
    }
}
</script>
