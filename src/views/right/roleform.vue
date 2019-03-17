<style scoped>
.right_item{margin: 10px;}
</style>
<template>
    <div class="container">
        <el-form ref="form" :model="form" :rules="formRules" label-width="100px">
            <el-form-item prop="roleName" label="角色名称">
                <el-input style="width: 300px" v-model="form.roleName" placeholder="请填写权限名称"></el-input>
            </el-form-item>
            <!-- <el-form-item prop="selectRightList" label="权限">
                <el-checkbox-group v-model="form.selectRightList">
                    <span class="right_item" v-for="(v, i) in allRightList" :key="i">
                        <el-checkbox :label="v.workId">{{v.workName}}</el-checkbox>
                    </span>
                </el-checkbox-group>
            </el-form-item> -->
            <el-form-item>
                <el-button type="primary" @click="onSubmit">{{formData ? '保存' : '立即创建'}}</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
import {getAllPermission} from '@/api/work'
export default {
    props: {
        formData: {
            type: Object
        }
    },
    data(){
        return {
            form: {
                roleName: '',
                // selectRightList: '',
            },
            formRules: {
                roleName: [{ required: true, trigger: 'blur', message: '角色名不能为空' }],
                // selectRightList: [{ required: true, trigger: 'blur', message: '权限不能为空' }],
            },

            allRightList: [],
        }
    },
    methods: {
        onSubmit(){
            this.$refs.form.validate((valid) => {
                if(valid){
                    this.$emit('onSubmit', this.form)
                }else{
                    this.$message({
                        type: 'warning',
                        message: '请完成表单'
                    })
                }
            })
        },
        reset(){
            this.form = {
                roleName: '',
            }
        }
    },
    created(){
        if(this.formData){
            Object.assign(this.form, this.formData)
        }
        
        // getAllPermission().then(data=>{
        //     this.allRightList = data.data
        // })
    }
}
</script>
