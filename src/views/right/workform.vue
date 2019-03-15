<style scoped>

</style>
<template>
    <div class="container">
        <el-form ref="form" :model="form" :rules="formRules" label-width="100px">
            <el-form-item label="权限名称">
                <el-input style="width: 300px" v-model="form.workName" placeholder="请填写权限名称"></el-input>
            </el-form-item>
            <el-form-item label="权限模块名">
                <el-input style="width: 300px" v-model="form.workValue" placeholder="请填写权限模块名" :disabled="!!formData"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">{{formData ? '保存' : '立即创建'}}</el-button>
            </el-form-item>
        </el-form>  
    </div>
</template>
<script>
export default {
    props: {
        formData: {
            type: Object
        }
    },
    data(){
        return {
            form: {
                workName: '',
                workValue: '',
            },
            formRules: {
                workName: [{ required: true, trigger: 'blur', message: '权限名不能为空' }],
                workValue: [{ required: true, trigger: 'blur', message: '权限模块名不能为空' }]
            }
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
        }
    },
    created(){
        if(this.formData){
            Object.assign(this.form, this.formData)
        }
    }
}
</script>
