<template>
    <div>
        <el-table :data="tableData" border style="width: 100%">
            <el-table-column prop="workId" label="ID" width="180"></el-table-column>
            <el-table-column prop="workName" label="权限名称"></el-table-column>
            <!-- <el-table-column prop="workValue" label="权限模块名"></el-table-column> -->
            
            <el-table-column fixed="right" label="操作">
                <template slot-scope="scope">
                    <!-- <el-button type="text" @click="del(scope.$index, scope.row.workId)" style="color: #F56C6C;" size="small">删除</el-button> -->
                    <el-button type="text" @click="gotoUpdate(scope.$index, scope.row.workId)" size="small">编辑</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
import {getAllPermission, deleteWork} from '@/api/work'
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
            getAllPermission().then(data=>{
                this.tableData = data.data
            })
        },

        del(index, id){
            this.$confirm('此操作将永久删除该权限, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                deleteWork(id).then(data=>{
                    this.$message({
                        type: 'success',
                        message: '删除成功'
                    })
                    this.tableData.splice(index, 1)
                })
            }).catch();
        },
        gotoUpdate(index, id){
            localStorage.setItem('workInfo', JSON.stringify(this.tableData[index]))
            this.$router.push({name: 'workupdate'})
        },
    },
    created(){
        this.getList()
    }
}
</script>
