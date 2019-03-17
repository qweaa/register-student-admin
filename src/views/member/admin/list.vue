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
            <el-table-column prop="adminName" label="管理员名字"></el-table-column>
            <el-table-column prop="roleName" label="管理员角色"></el-table-column>
            
            <el-table-column fixed="right" label="操作" width="160">
                <template slot-scope="scope">
                    <!-- <el-button type="text" @click="gotoDetail(scope.$index, scope.row.adminId)" size="small">详情</el-button> -->
                    <el-button type="text" @click="updateRole(scope.$index, scope.row.adminId)" size="small">修改角色</el-button>
                    <!-- <el-button type="text" @click="editor(scope.$index)" size="small">角色</el-button> -->
                    <el-button type="text" @click="del(scope.$index, scope.row.adminId)" style="color: #F56C6C;" size="small">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-dialog title="修改管理员角色" width="600px" :visible.sync="detailVisible">
            <div>
                <el-radio-group v-model="selectRole">
                    <el-radio v-for="(v, i) in allRolesList" :key="i" :label="v.roleId">{{v.roleName}}</el-radio>
                </el-radio-group>
            </div>
            <div slot="footer" class="dialog-footer">
                <el-button size="mini" @click="detailVisible = false">取消</el-button>
                <el-button type="primary" size="mini" @click="submitUpdateRole">保存</el-button>
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
import {getAdminList, deleteAdmin, getAllRoles, AssignRoles} from '@/api/admin'
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
            },

            allRolesList: [],
            selectRole: '',
        }
    },
    methods: {
        getList(){
            getAdminList().then(data=>{
                console.log("学生列表：", data)
                let r = []
                for(let i of data.data){
                    if(!i[0].roleId) i[0].roleId = ''
                    if(!i[0].roleName) i[0].roleName = ''
                    r.push(i[0])
                }
                this.tableData = r
            })
        },
        //查看角色详情
        gotoDetail(index, id){
            this.$router.push({name: 'admindetail', query: {adminId: id}})
        },
        //修改角色
        updateRole(index, id){
            if(this.allRolesList && this.allRolesList.length){
                this.tableDataIndex = index
                this.selectRole = this.tableData[index].roleId
                this.detailVisible = true
            }else{
                getAllRoles().then(data=>{
                    this.allRolesList = data.data

                    this.tableDataIndex = index
                    this.selectRole = this.tableData[index].roleId
                    this.detailVisible = true
                })
            }
        },
        //确认修改角色
        submitUpdateRole(){
            AssignRoles({
                adminId: this.tableData[this.tableDataIndex].adminId,
                roleId: this.selectRole
            }).then(data=>{
                this.$message({
                    type: 'success',
                    message: '修改成功'
                })
                this.tableData[this.tableDataIndex].roleId = this.selectRole
                for(let i of this.allRolesList){
                    if(i.roleId == this.selectRole) {
                        this.tableData[this.tableDataIndex].roleName = i.roleName
                        break
                    }
                }
                this.detailVisible = false

            })
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
