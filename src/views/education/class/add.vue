<style lang="sass" scoped>

</style>
<template>
    <div>
        <el-form style="max-width: 600px; width: 100%;" ref="form" :model="form" label-width="80px">
            <el-form-item label="系别">
                <el-select style="width: 100%;" v-model="form.dept" placeholder="请选择系别">
                    <el-option v-for="item in deptData" :key="item.ID" :label="item.Name" :value="item.Name"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="班级名称">
                <el-input v-model="form.specialtyName"></el-input>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="onSubmit">立即创建</el-button>
                <el-button>取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
import deptData from '@/data/dept'
import {addSpecialty} from '@/api/specialty'
export default {
    data() {
        return {
            deptData: deptData,
            form: {
                dept: '',
                specialtyName: '',
            },
        }
    },
    methods: {
        onSubmit() {
            let form = JSON.parse(JSON.stringify(this.form))
            for(let i in form){
                if(form[i] === ''){
                    this.$message({
                        type: 'warning',
                        message: '请完成表单'
                    });
                    return
                }
            }
            
            addSpecialty(form).then(data=>{
                this.form.specialtyName = ''
                this.$message({
                    type: 'success',
                    message: '添加成功'
                });
            })
            
        },
    },
    created(){
    }
}
</script>
