<style scoped>
.box{max-width: 600px;}
</style>
<template>
    <div class="box">
        <el-form ref="form" :model="form" label-width="100px" :rules="formRules">
            <el-form-item prop="password" label="密码">
                <el-input v-model="form.password" placeholder="密码"></el-input>
            </el-form-item>
            <el-form-item prop="confirmPassword" label="确认密码">
                <el-input v-model="form.confirmPassword" placeholder="确认密码"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">保存</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
import {changePass} from '@/api/admin'
export default {
    data(){
        const checkPsd = (rule, value, callback) => {
            if (value.length < 5) {
                callback(new Error('密码不能小于5位'))
            } else {
                callback()
            }
        }
        const checkCPsd = (rule, value, callback) => {
            if (!value) {
                callback(new Error('确认密码不能为空'))
            } else if(value !== this.form.password){
                callback(new Error('两次密码不一致，请检查'))
            }else{
                callback()
            }
        }
        return{
            form: {
                adminId: this.$store.getters.token,
                password: '',
                confirmPassword: '',
            },
            formRules: {
                password: [{ required: true, trigger: 'blur', validator: checkPsd }],
                confirmPassword: [{ required: true, trigger: 'blur', validator: checkCPsd }]
            },
        }
    },
    methods: {
        onSubmit(){
            this.$refs.form.validate(valid => {
                if (valid) {
                    changePass(this.form).then(data=>{
                        this.$message({
                            message: '修改成功',
                            type: 'success'
                        });
                        this.$router.replace('/')
                    })
                } else {
                    this.$message({
                        message: '请完成表单',
                        type: 'warning'
                    });
                    return false
                }
            })
        }
    },
    created(){
        console.log(this.$store.getters.token)
    }
}
</script>
