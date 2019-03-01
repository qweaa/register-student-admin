<template>
    <el-container>
        <el-main>
            <div style="line-height: 60px; font-size: 16px;">宿舍楼：{{$route.query.dept}}</div>
            <el-table :data="tableData" border style="width: 100%">
                <el-table-column prop="dormitoryId" label="ID" width="180"></el-table-column>
                <el-table-column prop="dept" label="系别"> </el-table-column>
                <el-table-column prop="specialtyName" label="专业"> </el-table-column>
                <el-table-column prop="dormitoryName" label="宿舍"> </el-table-column>
                <el-table-column prop="population" label="人数"> </el-table-column>

                <el-table-column fixed="right" label="操作">
                    <template slot-scope="scope">
                        <el-button type="text" @click="edit(scope.$index, scope.row.dormitoryId)" size="small">编辑</el-button>
                        <el-button type="text" @click="del(scope.$index, scope.row.dormitoryId)" style="color: #F56C6C;" size="small">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-main>
        
        <el-dialog title="修改宿舍信息" :visible.sync="formVisible">
            <el-form label-width="80px">
                <el-form-item label="宿舍名">
                    <el-input v-model="form.dormitoryName"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="formVisible = false">取 消</el-button>
                <el-button type="primary" @click="submitUpdate">确 定</el-button>
            </div>
        </el-dialog>
    </el-container>
</template>
<script>
import {getAllDormitoryByBuildings, deleteDormitoryById, updateDormitoryById} from '@/api/dormitory'
export default {
    data(){
        return {
            tableData: [],
            tableDataIndex: 0,

            formVisible: false,

            dept: '',

            form: {
                dormitoryName: '',
            }
        }
    },
    methods: {
        getList(dept){
            getAllDormitoryByBuildings(dept).then(data=>{
                this.tableData = data.data
            })
        },

        del(index, id){
            this.$confirm('此操作将永久删除该宿舍信息, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                deleteDormitoryById(id).then(data=>{
                    this.tableData.splice(index, 1)
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                })
            }).catch();
        },

        edit(index){
            this.tableDataIndex = index
            this.formVisible = true
        },
        submitUpdate(){
            let form = JSON.parse(JSON.stringify(this.form))
            for(let i in form){
                if(form[i] === ''){
                    this.$message({
                        type: 'warning',
                        message: '表单不能为空'
                    });
                    return
                }
            }
            form.dormitoryId = this.tableData[this.tableDataIndex].dormitoryId
            updateDormitoryById(form).then(data=>{
                this.$message({
                    type: 'success',
                    message: '修改成功'
                });
                this.tableData[this.tableDataIndex].dormitoryName = form.dormitoryName
                this.formVisible = false
            })
        }
    },
    created(){
        if(this.$route.query.dept){
            this.dept = this.$route.query.dept
            this.getList(this.$route.query.dept)
        }
    }
}
</script>
