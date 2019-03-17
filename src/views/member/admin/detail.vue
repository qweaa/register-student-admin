<style lang="sass" scoped>

</style>
<template>
    <div>
        <p>管理员详情</p>
    </div>
</template>
<script>
import { getAllRoles, getRoleByTeachId, getPermissionByTeachId } from '@/api/admin'
export default {
    data(){
        return {
            data: ''
        }
    },
    created(){
        getAllRoles().then(data=>{
            console.log('所有角色列表：', data)
        })
        if(this.$route.query.adminId){
            this.adminId = this.$route.query.adminId
            getRoleByTeachId(this.adminId).then(data=>{
                console.log('角色，', data)
            })
            getPermissionByTeachId(this.adminId).then(data=>{
                console.log('权限，', data)
            })
        }
    }
}
</script>
