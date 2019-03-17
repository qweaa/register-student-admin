<template>
    <div>
        <el-table :data="tableData" border style="width: 100%">
            <el-table-column prop="roleId" label="ID" width="180"></el-table-column>
            <el-table-column prop="roleName" label="角色名"></el-table-column>
            
            <el-table-column fixed="right" label="操作">
                <template slot-scope="scope">
                    <el-button type="text" @click="del(scope.$index, scope.row.roleId)" style="color: #F56C6C;" size="small">删除</el-button>
                    <el-button type="text" @click="gotoDetail(scope.$index, scope.row.roleId)" size="small">详情及编辑</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
import { getAllRoles } from '@/api/admin'
import {deleteRole} from '@/api/role'
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
        del(index, id){
            this.$confirm('此操作将永久删除该角色, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                deleteRole(id).then(data=>{
                    this.$message({
                        type: 'success',
                        message: '删除成功'
                    })
                    this.tableData.splice(index, 1)
                })
            }).catch();
        },
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
