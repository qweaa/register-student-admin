<style scoped>
.cell{display: flex; justify-content: space-between;}
.cell_hd{flex-shrink: 0; min-width: 40px;}
.cell_bd{flex: 1;}
.cell_ft{min-width: 40px;}

.detail{max-width: 600px; line-height: 24px;}
</style>
<template>
    <el-container>
        <el-main>
            <el-table :data="tableData" border style="width: 100%">
                <el-table-column prop="studentName" label="姓名" width="180"></el-table-column>
                <el-table-column prop="ticketNumber" label="准考证号" width="180"> </el-table-column>
                <!-- <el-table-column prop="IDnumber" label="身份证"> </el-table-column> -->
                <el-table-column prop="graduate" label="毕业中学"> </el-table-column>
                <el-table-column prop="dept" label="系别"> </el-table-column>
                <el-table-column prop="specialtyName" label="专业"> </el-table-column>
                <!-- <el-table-column prop="className" label="班级"> </el-table-column> -->
                <el-table-column prop="dormitoryName" label="宿舍"> </el-table-column>
                <el-table-column prop="tutorName" label="导师"></el-table-column>
                <el-table-column prop="instructorName" label="辅导员"> </el-table-column>
                <!-- <el-table-column prop="address" label="地址"> </el-table-column>
                <el-table-column prop="father" label="父亲"> </el-table-column>
                <el-table-column prop="fatherPhone" label="父亲电话"> </el-table-column>
                <el-table-column prop="mother" label="母亲"> </el-table-column>
                <el-table-column prop="motherPhone" label="母亲电话"> </el-table-column> -->

                <el-table-column fixed="right" label="操作" width="160">
                    <template slot-scope="scope">
                        <el-button type="text" @click="detailVisible = true" size="small">详情</el-button>
                        <el-button type="text" @click="formVisible = true" size="small">编辑</el-button>
                        <el-button type="text" @click="del" style="color: #F56C6C;" size="small">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-dialog title="详细信息" width="600px" :visible.sync="detailVisible">
                <div class="detail">
                    <div class="cell">
                        <div class="cell_hd">父亲</div>
                        <div class="cell_ft">李刚</div>
                    </div>
                    <div class="cell">
                        <div class="cell_hd">父亲电话</div>
                        <div class="cell_ft">李刚</div>
                    </div>
                    <div class="cell">
                        <div class="cell_hd">母亲</div>
                        <div class="cell_ft">李刚</div>
                    </div>
                    <div class="cell">
                        <div class="cell_hd">母亲电话</div>
                        <div class="cell_ft">李刚</div>
                    </div>
                    <div class="cell">
                        <div class="cell_hd">地址</div>
                        <div class="cell_ft">李刚</div>
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
                    <el-button type="primary" @click="formVisible = false">确 定</el-button>
                </div>
            </el-dialog>
        </el-main>
    </el-container>
</template>
<script>
import {getStudentList} from '@/api/student'
export default {
    data(){
        return {
            tableData: [{
                date: '2016-05-02',
                ticketNumber: 4611321545651321,
                graduate: '广州六中',
                dept: '网络系',
                specialtyName: '网络安全',
                dormitoryName: 'R301',
                tutorName: '张明君',
                instructorName: '曹璐婷',
                studentName: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-04',
                studentName: '王小虎',
                ticketNumber: 4611321545651321,
                graduate: '广州六中',
                dept: '网络系',
                specialtyName: '网络安全',
                dormitoryName: 'R301',
                tutorName: '张明君',
                instructorName: '曹璐婷',
                address: '上海市普陀区金沙江路 1517 弄'
            }, {
                date: '2016-05-01',
                studentName: '王小虎',
                ticketNumber: 4611321545651321,
                graduate: '广州六中',
                dept: '网络系',
                specialtyName: '网络安全',
                dormitoryName: 'R301',
                tutorName: '张明君',
                instructorName: '曹璐婷',
                address: '上海市普陀区金沙江路 1519 弄'
            }, {
                date: '2016-05-03',
                studentName: '王小虎',
                ticketNumber: 4611321545651321,
                graduate: '广州六中',
                dept: '网络系',
                specialtyName: '网络安全',
                dormitoryName: 'R301',
                tutorName: '张明君',
                instructorName: '曹璐婷',
                address: '上海市普陀区金沙江路 1516 弄'
            }],

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
            getStudentList({
                currentPage: this.currentPage,
                pageSize: this.pageSize,
            }).then(data=>{
                console.log("学生列表：", data)
                this.tableData = data.data
            })
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
