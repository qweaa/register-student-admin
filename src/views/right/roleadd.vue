<style scoped>
.right_item{margin: 10px;}
</style>
<template>
    <div>
        <role-form ref="roleform" @onSubmit="onSubmit"></role-form>
    </div>
</template>
<script>
import {addRole, addWorksforRole} from '@/api/role'
import roleForm from './roleform'
export default {
    components: {
        roleForm,
    },
    data(){
        return {
        }
    },
    methods: {
        onSubmit(form){
            addRole(form).then(data=>{
                
                // addWorksforRole({
                //     roleId: this.role.roleId,
                //     works: this.selectRightList.join(',')
                // }).then(data=>{
                //     let r = []
                //     for(let i of this.selectRightList){
                //         for(let j of this.allRightList){
                //             if(i == j.workId) r.push(j)
                //         }
                //     }
                //     this.rightList = r
                //     this.$message({
                //         type: 'success',
                //         message: '添加成功',
                //     })
                //     this.dialogVisible = false
                // })

                this.$message({
                    type: 'success',
                    message: '添加成功'
                })
                this.$refs.roleform.reset()
            })
        }
    },
    created(){
    }
}
</script>
