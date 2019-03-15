<style scoped>

</style>
<template>
    <div>
        <work-form :formData="formData" @onSubmit="onSubmit"></work-form>
    </div>
</template>
<script>
import {updateWorkName} from '@/api/work'
import workForm from './workform'
export default {
    components: {
        workForm,
    },
    data(){
        return {
            formData: {},
        }
    },
    methods: {
        onSubmit(form){
            updateWorkName(form).then(data=>{
                this.$message({
                    type: 'success',
                    message: '保存成功'
                })
                this.$router.back()
            })
        }
    },
    created(){
        if(localStorage.getItem('workInfo')){
            this.formData = JSON.parse(localStorage.getItem('workInfo'))
        }else{
            this.$message({
                type: 'warning',
                message: '网页错误'
            })
        }
    },
    beforeRouteLeave (to, from, next){
        localStorage.removeItem('workInfo')
        next()
    }
}
</script>
