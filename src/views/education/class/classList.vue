<template>
    <el-container>
        <el-main>
            <el-table :data="tableData" border style="width: 100%">
                <el-table-column prop="specialtyId" label="ID" width="180"></el-table-column>
                <el-table-column prop="specialtyName" label="班级"> </el-table-column>

                <el-table-column fixed="right" label="操作">
                    <template slot-scope="scope">
                        <el-button type="text" @click="del(scope.$index, scope.row.specialtyId)" style="color: #F56C6C;" size="small">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-main>
    </el-container>
</template>
<script>
import {getSpecialtyByDept, deleteSpecialty} from '@/api/specialty'
export default {
    data(){
        return {
            tableData: [],
            tableDataIndex: 0,

            dept: '',
        }
    },
    methods: {
        getList(dept){
            getSpecialtyByDept(dept).then(data=>{
                this.tableData = data.data
            })
        },

        del(index, id){
            this.$confirm('此操作将永久删除该班级信息, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                deleteSpecialty(id).then(data=>{
                    this.tableData.splice(index, 1)
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                })
            }).catch();
        },
    },
    created(){
        if(this.$route.query.dept){
            this.dept = this.$route.query.dept
            this.getList(this.$route.query.dept)
        }
    }
}
</script>
