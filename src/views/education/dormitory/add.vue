<style lang="sass" scoped>

</style>
<template>
    <div>
        <el-form style="max-width: 600px; width: 100%;" ref="form" :model="form" label-width="80px">
            <el-form-item label="宿舍楼">
                <el-select style="width: 100%;" v-model="form.building" placeholder="请选择宿舍楼">
                    <el-option v-for="item in buildingData" :key="item.ID" :label="item.Name" :value="item.Name"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="宿舍名称">
                <el-input v-model="form.dormitoryName"></el-input>
            </el-form-item>

            <el-form-item label="系别">
                <el-select style="width: 100%;" @change="onDeptChange" v-model="form.dept" placeholder="请选择系别，可不选">
                    <el-option v-for="item in deptData" :key="item.ID" :label="item.Name" :value="item.Name"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="专业">
                <el-select style="width: 100%;" v-model="form.specialtyName" placeholder="请选择专业，可不选">
                    <el-option v-for="item in dormitoryData" :key="item.specialtyId" :label="item.specialtyName" :value="item.specialtyName"></el-option>
                </el-select>
            </el-form-item>


            <el-form-item>
                <el-button type="primary" @click="onSubmit">立即创建</el-button>
                <el-button>取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
import buildingData from '@/data/building'
import deptData from '@/data/dept'
import {addDormitory} from '@/api/dormitory'
import {getSpecialtyByDept} from '@/api/specialty'
export default {
    data() {
        return {
            buildingData: buildingData,
            deptData: deptData,

            form: {
                building: '',
                dormitoryName: '',
                specialtyId: '',
                specialtyName: '',
                dept: '',
            },

            dormitoryData: []
        }
    },
    methods: {
        onSubmit() {
            let ignoreKey = ['specialtyId', 'specialtyName', 'dept']
            let form = JSON.parse(JSON.stringify(this.form))
            for(let i in form){
                if(!ignoreKey.includes(i) && form[i] === ''){
                    this.$message({
                        type: 'warning',
                        message: '请完成表单'
                    });
                    return
                }
            }

            console.log(this.dormitoryData, form.specialtyName)

            for(let i of this.dormitoryData){
                if(form.specialtyName === i.specialtyName){
                    form.specialtyId = i.specialtyId
                    break;
                }
            }

            if(!form.specialtyId){
                this.$message({
                    type: 'warning',
                    message: '表单错误，请刷新重试'
                });
                return
            }
            
            addDormitory(form).then(data=>{
                this.form.dormitoryName = ''
                this.$message({
                    type: 'success',
                    message: '添加成功'
                });
            })
            
        },

        //选择系别
        onDeptChange(dept){
            console.log(dept)
            this.dormitoryData = []
            this.form.specialtyId = ''
            this.form.specialtyName = ''
            getSpecialtyByDept(dept).then(data=>{
                this.dormitoryData = data.data
            })
        }
    },
    created(){
    }
}
</script>
