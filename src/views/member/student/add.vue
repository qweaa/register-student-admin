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
                <el-input type="number" v-model="form.IDnumber"></el-input>
            </el-form-item>

            <el-form-item label="系别方向">
                <el-cascader expand-trigger="hover" :options="options" v-model="specialty" @change="handleChange" placeholder="请选择" style="width: 100%;"></el-cascader>
            </el-form-item>
            <el-form-item label="宿舍">
                <el-select style="width: 100%;" v-model="form.dormitoryId" placeholder="请选择">
                    <el-option v-for="item in dormitory" :key="item.ID" :label="item.Name" :value="item.ID"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="导师">
                <el-select style="width: 100%;" v-model="form.tutorId" placeholder="请选择">
                    <el-option v-for="item in tutor" :key="item.ID" :label="item.Name" :value="item.ID"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="辅导员">
                <el-select style="width: 100%;" v-model="form.instructorId" placeholder="请选择">
                    <el-option v-for="item in instructor" :key="item.ID" :label="item.Name" :value="item.ID"></el-option>
                </el-select>
            </el-form-item>

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
                <el-button>取消</el-button>
            </el-form-item>
        </el-form>
    </el-main>
  </el-container>
</template>
<script>
import { addStudent } from "@/api/student";
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
            
            form: {
                studentName: '测试',
                ticketNumber: '4401542121564156454',
                IDnumber: '44015613215645646',
                specialtyId: '',
                specialtyName: '',
                dept: '',
                dormitoryId: 1,
                dormitoryName: '',
                tutorId: 1,
                tutorName: '',
                instructorId: 1,
                instructorName: '',
                graduate: '广州六中',
                address: '广东广州越秀',
                father: '李刚',
                fatherPhone: '137265556565',
                mother: '李梅',
                motherPhone: '134564654645',
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
            specialty: [1,0],

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
            ],
            dormitory: [
                {
                    ID: 1,
                    Name: 'R340'
                },{
                    ID: 2,
                    Name: 'R341'
                }
            ],
        }
    },
    methods: {
        getTutorName(id){
            let result = ''
            for(let i of this.tutor){
                if(i.ID === id){
                    result = i.Name
                    break
                }
            }
            return result
        },
        getInstructorName(id){
            let result = ''
            for(let i of this.dormitory){
                if(i.ID === id){
                    result = i.Name
                    break
                }
            }
            return result
        },
        getDormitoryName(id){
            let result = ''
            for(let i of this.dormitory){
                if(i.ID === id){
                    result = i.Name
                    break
                }
            }
            return result
        },
        onSubmit() {
            
            let data = JSON.parse(JSON.stringify(this.form))
            let ignoreKey = ['dept', 'dormitoryName', 'tutorName', 'instructorName', 'specialtyId', 'specialtyName']

            for(let i in data){
                if(ignoreKey.indexOf(i) === -1 && !data[i]){
                    this.$message.warning('请完成表单填写');
                    return
                }
            }

            let dept = this.options[this.specialty[0]].label
            let specialtyName = this.options[
                    this.specialty[0]
                ].children[
                    this.specialty[1]
                ].label
            console.log(
                dept,
                specialtyName,
                this.getTutorName(this.form.tutorId),
                this.getInstructorName(this.form.instructorId)
            )

            data.instructorName = this.getInstructorName(this.form.instructorId)
            data.tutorName = this.getTutorName(this.form.instructorId)
            data.dormitoryName = this.getDormitoryName(this.form.dormitoryId)
            data.dept = dept
            data.specialtyId = this.specialty[1]
            data.specialtyName = specialtyName

            console.log(data)

            addStudent(data).then(res=>{
                console.log('添加学生：',res)
            })
            
        },
        handleChange(value) {
            console.log(value);
        },
    }
}
</script>
