<template>
    <div>
        <el-table :data="tableData" border style="width: 100%">
            <el-table-column prop="postId" label="ID" width="180"></el-table-column>
            <el-table-column prop="title" label="标题"></el-table-column>
            <el-table-column prop="createTime" label="发布时间"></el-table-column>
            <el-table-column prop="poster" label="发布者"></el-table-column>
            <el-table-column prop="read" label="阅读数"></el-table-column>
            <el-table-column prop="likes" label="点赞数"></el-table-column>

            <el-table-column fixed="right" label="操作">
                <template slot-scope="scope">
                    <el-button type="text" @click="del(scope.$index, scope.row.postId)" style="color: #F56C6C;" size="small">删除</el-button>
                    <el-button type="text" @click="gotoComments(scope.$index, scope.row.postId)" size="small">内容及回复</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
import {getPostList, deletePostById} from '@/api/post'
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
            getPostList({
                currentPage: this.currentPage,
                pageSize: this.pageSize,
            }).then(data=>{
                this.tableData = data.data
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
        gotoComments(index, id){
            window.localStorage.setItem('postData', JSON.stringify(this.tableData[index]))
            this.$router.push({name: 'articleComments', query: {postid: id}})
        },
    },
    created(){
        this.getList()
    }
}
</script>
