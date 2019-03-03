<style scoped>
.cell{display: flex; justify-content: space-between;}
.cell_hd{flex-shrink: 0; min-width: 40px;}
.cell_bd{flex: 1;}
.cell_ft{min-width: 40px;}

.detail{max-width: 600px; line-height: 24px;}
</style>
<template>
    <div>
        <el-table :data="tableData" border style="width: 100%">
            <el-table-column prop="teacherId" label="ID" width="180"></el-table-column>
            <el-table-column prop="teacherName" label="教师姓名" width="180"> </el-table-column>
            <el-table-column prop="type" label="教师类型">
                <template slot-scope="scope">
                    <span>{{scope.row.type | teacherTypeFilter}}</span>
                </template>
            </el-table-column>
            <el-table-column prop="dept" label="系别"> </el-table-column>
            <el-table-column prop="specialtyName" label="专业方向"> </el-table-column>
            <el-table-column prop="phone" label="联系电话"> </el-table-column>
            <el-table-column fixed="right" label="操作" width="160">
                <template slot-scope="scope">
                    <el-button type="text" @click="editer(scope.$index)" size="small">编辑</el-button>
                    <!-- <el-button type="text" @click="del" style="color: #F56C6C;" size="small">删除</el-button> -->
                </template>
            </el-table-column>
        </el-table>
        <el-dialog title="修改基本信息" :visible.sync="formVisible">
            <el-form label-width="80px">
                <el-form-item label="联系电话">
                    <el-input type="number" v-model="form.phone"></el-input>
                </el-form-item>
                <el-form-item label="教师类型">
                    <el-select style="width: 100%;" v-model="form.type" placeholder="请选择教师类型">
                        <el-option v-for="item in teacherTypeData" :key="item.ID" :label="item.Name" :value="item.ID"></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="formVisible = false">取 消</el-button>
                <el-button type="primary" @click="updateTeacher">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
import {getTeacherList, updateTeacher} from '@/api/teacher'
import teacherTypeData from '@/data/teacherType'
export default {
    data(){
        return {
            tableData: [],
            tableDataIndex: 0,

            teacherTypeData,

            currentPage: 1,
            pageSize: 10,


            detailVisible: false,
            formVisible: false,

            form: {
                teacherId: '',
                phone: '',
                type: '',
            }
        }
    },
    filters: {
        teacherTypeFilter: function (value) {
            if (!value) return ''
            for(let i of teacherTypeData){
                if(i.ID === value){
                    return i.Name
                }
            }
            return ''
        }
    },
    methods: {
        getList(){
            getTeacherList({
                currentPage: this.currentPage,
                pageSize: this.pageSize,
            }).then(data=>{
                this.tableData = data.data
            })
        },
        updateTeacher(id){

            updateTeacher(this.form).then(data=>{
                console.log('更新教师：', data)
                this.$message({
                    type: 'success',
                    message: '修改成功!'
                });
                this.tableData[this.tableDataIndex].phone = this.form.phone
                this.tableData[this.tableDataIndex].type = this.form.type
                this.formVisible = false
            })

        },

        editer(index){
            this.tableDataIndex = index

            this.form.teacherId = this.tableData[index].teacherId
            this.form.phone = this.tableData[index].phone
            this.form.type = this.tableData[index].type

            this.formVisible = true
        },
        //删除
        del(){
            this.$confirm('此操作将永久删除该学生信息, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.$message({
                    type: 'success',
                    message: '删除成功!'
                });
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });          
            });
        },
    },
    created(){
        this.getList()
    }
}
</script>
