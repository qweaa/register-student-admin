<template>
    <div>
        <el-table :data="tableData" size="mini" border style="width: 100%">
            <el-table-column prop="id" label="ID" width="180"></el-table-column>
            <el-table-column prop="name" label="贷款人"></el-table-column>
            <el-table-column prop="loantype" label="贷款类型"></el-table-column>
            <el-table-column prop="loanmoney" label="贷款金额（元）"></el-table-column>
            <el-table-column label="状态">
                <template slot-scope="scope">
                    <div>
                        <span v-if="!scope.row.status" class="color-warning">待审核</span>
                        <span v-else-if="Number(scope.row.status) === 1" class="color-success">审核通过</span>
                        <span v-else class="color-danger">审核失败</span>
                    </div>
                </template>
            </el-table-column>

            <el-table-column fixed="right" label="操作">
                <template slot-scope="scope">
                    <!-- <el-button type="text" @click="del(scope.$index, scope.row.postId)" style="color: #F56C6C;" size="small">删除</el-button> -->
                    <el-button type="text" @click="gotoComments(scope.$index)" size="small">详情</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
import {getLoanList} from '@/api/loan'
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
            getLoanList().then(data=>{
                if(data.data && data.data.length){
                    this.tableData = data.data
                }
            })
        },

        del(index, id){
            this.$confirm('此操作将永久删除该帖子, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                deletePostById(id).then(data=>{
                    this.tableData.splice(index, 1)
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                })
            }).catch();
        },
        gotoComments(index){
            window.localStorage.setItem('loanDetail', JSON.stringify(this.tableData[index]))
            this.$router.push({name: 'loandetail'})
        },
    },
    created(){
        this.getList()
    }
}
</script>
