<style scoped>
.container{max-width: 1000px;}
</style>
<template>
    <div class="container" size="mini">
        <el-form ref="form" label-width="100px">
            <el-form-item label="选择管理员">
                <el-select style="width: 300px" v-model="form.teacherId" placeholder="选择管理员">
                    <el-option v-for="(item, index) in teacherList" :key="index" :label="item.teacherName" :value="item.teacherId"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="密码">
                <el-input style="width: 300px" v-model="form.password" placeholder="请填写密码"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">立即创建</el-button>
            </el-form-item>
        </el-form>  
    </div>
</template>
<script>
import {addAdmin} from '@/api/admin'
import {getTeacherList} from '@/api/teacher'
export default {
    data(){
        return {
            teacherList: [],
            form: {
                teacherId: '',
                password: '',
            },
        }
    },
    created(){
        getTeacherList({
            pageSize: 1000,
        }).then(data=>{
            this.teacherList = data.data
        })
    },
    methods: {
        onSubmit(){
            addAdmin(this.form).then(data=>{
                this.$message({
                    message: '添加成功',
                    type: 'success'
                });
                this.form = {
                    teacherId: '',
                    password: '',
                }
            })
        },
    }
}
</script>
