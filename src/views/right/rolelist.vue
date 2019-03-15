<template>
    <div>
        <el-table :data="tableData" border style="width: 100%">
            <el-table-column prop="roleId" label="ID" width="180"></el-table-column>
            <el-table-column prop="roleName" label="角色名"></el-table-column>
            
            <el-table-column fixed="right" label="操作">
                <template slot-scope="scope">
                    <!-- <el-button type="text" @click="del(scope.$index, scope.row.postId)" style="color: #F56C6C;" size="small">删除</el-button> -->
                    <el-button type="text" @click="gotoDetail(scope.$index, scope.row.postId)" size="small">详情</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
import { getAllRoles } from '@/api/admin'
export default {
    data(){
        return {
            tableData: [],
            tableDataIndex: 0,

            currentPage: 1,
            pageSize: 10,

            dept: '',
        }
    },
    methods: {
        getList(dept){
            getAllRoles().then(data=>{
                this.tableData = data.data
            })
        },
        gotoDetail(index, id){
            localStorage.setItem('roleDetail', JSON.stringify(this.tableData[index]))
            this.$router.push({name: 'roledetail'})
        },
    },
    created(){
        this.getList()
    }
}
</script>
