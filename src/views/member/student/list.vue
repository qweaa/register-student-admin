<style lang="sass" scoped>

</style>
<template>
    <el-container>
        <el-main>
            <el-table :data="tableData" border style="width: 100%">
                <el-table-column prop="studentName" label="姓名" width="180"></el-table-column>
                <el-table-column prop="ticketNumber" label="准考证号" width="180"> </el-table-column>
                <!-- <el-table-column prop="IDnumber" label="身份证"> </el-table-column> -->
                <el-table-column prop="graduate" label="学院"> </el-table-column>
                <el-table-column prop="dept" label="系别"> </el-table-column>
                <el-table-column prop="specialtyName" label="专业"> </el-table-column>
                <el-table-column prop="className" label="班级"> </el-table-column>
                <el-table-column prop="dormitoryName" label="宿舍"> </el-table-column>
                <el-table-column prop="tutorName" label="导师"> </el-table-column>
                <!-- <el-table-column prop="instructorName" label="讲师"> </el-table-column>
                <el-table-column prop="address" label="地址"> </el-table-column>
                <el-table-column prop="father" label="父亲"> </el-table-column>
                <el-table-column prop="fatherPhone" label="父亲电话"> </el-table-column>
                <el-table-column prop="mother" label="母亲"> </el-table-column>
                <el-table-column prop="motherPhone" label="母亲电话"> </el-table-column> -->

                <el-table-column fixed="right" label="操作" width="100">
                    <template slot-scope="scope">
                        <el-button  type="text" size="small">查看</el-button>
                        <el-button type="text" size="small">编辑</el-button>
                    </template>
                </el-table-column>
            </el-table>
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
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
            }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            }],

            currentPage: 1,
            pageSize: 10,
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
        }
    },
    created(){
        this.getList()
    }
}
</script>
