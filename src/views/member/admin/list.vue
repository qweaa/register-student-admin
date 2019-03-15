<style scoped>
.cell{display: flex; justify-content: space-between;}
.cell_hd{flex-shrink: 0; min-width: 40px;}
.cell_bd{flex: 1;}
.cell_ft{min-width: 40px;}

.text-right{text-align: right}

.detail{max-width: 600px; line-height: 24px;}
</style>
<template>
    <div>
        <el-table :data="tableData" border style="width: 100%">
            <el-table-column prop="adminId" label="ID"></el-table-column>
            <el-table-column prop="teacherId" label="教师ID"></el-table-column>
            <el-table-column prop="adminName" label="管理员名字"> </el-table-column>
            
            <el-table-column fixed="right" label="操作" width="160">
                <template slot-scope="scope">
                    <el-button type="text" @click="gotoDetail(scope.$index, scope.row.teacherId)" size="small">详情</el-button>
                    <!-- <el-button type="text" @click="editor(scope.$index)" size="small">角色</el-button> -->
                    <el-button type="text" @click="del(scope.$index, scope.row.adminId)" style="color: #F56C6C;" size="small">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-dialog title="详细信息" width="600px" :visible.sync="detailVisible">
            <div class="detail" v-if="tableData[tableDataIndex]">
                <div class="cell">
                    <div class="cell_hd">父亲</div>
                    <div class="cell_ft text-right">{{tableData[tableDataIndex].father || '空'}}</div>
                </div>
                <div class="cell">
                    <div class="cell_hd">父亲电话</div>
                    <div class="cell_ft text-right">{{tableData[tableDataIndex].fatherPhone || '空'}}</div>
                </div>
                <div class="cell">
                    <div class="cell_hd">母亲</div>
                    <div class="cell_ft text-right">{{tableData[tableDataIndex].mother || '空'}}</div>
                </div>
                <div class="cell">
                    <div class="cell_hd">母亲电话</div>
                    <div class="cell_ft text-right">{{tableData[tableDataIndex].motherPhone || '空'}}</div>
                </div>
                <div class="cell">
                    <div class="cell_hd">地址</div>
                    <div class="cell_ft text-right">{{tableData[tableDataIndex].address || '空'}}</div>
                </div>
            </div>
            <div slot="footer" class="dialog-footer">
                <el-button type="danger" size="mini" @click="detailVisible = false">关闭</el-button>
            </div>
        </el-dialog>
        <el-dialog title="修改基本信息" :visible.sync="formVisible">
            <el-form label-width="80px">
                <el-form-item label="毕业中学">
                    <el-input v-model="form.graduate"></el-input>
                </el-form-item>
                <el-form-item label="父亲电话">
                    <el-input type="number" v-model="form.fatherPhone"></el-input>
                </el-form-item>
                <el-form-item label="母亲电话">
                    <el-input type="number" v-model="form.motherPhone"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="formVisible = false">取 消</el-button>
                <el-button type="primary" @click="submitUpdate">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
import {getAdminList, deleteAdmin} from '@/api/admin'
export default {
    data(){
        return {
            tableData: [],
            tableDataIndex: 0,

            currentPage: 1,
            pageSize: 10,


            detailVisible: false,
            formVisible: false,

            form: {
                graduate: '',
                fatherPhone: '',
                motherPhone: '',
            }
        }
    },
    methods: {
        getList(){
            getAdminList().then(data=>{
                console.log("学生列表：", data)
                this.tableData = data.data
            })
        },
        //查看角色详情
        gotoDetail(index, id){
            this.$router.push({name: 'admindetail', query: {teacherid: id}})
        },
        //删除
        del(index, id){
            this.$confirm('此操作将永久删除该管理员, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                deleteAdmin(id).then(data=>{
                    this.tableData.splice(index, 1)
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                })
            }).catch();
        },
        //修改信息
        editor(index){
            this.formVisible = true
            this.tableDataIndex = index
            this.form.graduate = this.tableData[index].graduate
            this.form.fatherPhone = this.tableData[index].fatherPhone
            this.form.motherPhone = this.tableData[index].motherPhone
        },
        //确定跟新
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
            form.studentId = this.tableData[this.tableDataIndex].studentId
            updateStudent(form).then(data=>{
                this.$message({
                    type: 'success',
                    message: '修改成功'
                });
                this.tableData[this.tableDataIndex].graduate = form.graduate
                this.tableData[this.tableDataIndex].fatherPhone = form.fatherPhone
                this.tableData[this.tableDataIndex].motherPhone = form.motherPhone
                this.formVisible = false
            })
        },
    },
    created(){
        this.getList()
    }
}
</script>
