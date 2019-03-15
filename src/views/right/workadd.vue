<style scoped>

</style>
<template>
    <div>
        <work-form @onSubmit="onSubmit"></work-form>
    </div>
</template>
<script>
import {addWork} from '@/api/work'
import workForm from './workform'
export default {
    components: {
        workForm,
    },
    data(){
        return {

        }
    },
    methods: {
        onSubmit(form){
            addWork(form).then(data=>{
                this.$message({
                    type: 'success',
                    message: '添加成功'
                })
            })
        }
    }
}
</script>
