<template>
    <el-container>
        <el-main>
            <el-table :data="tableData" border style="width: 100%">
                <el-table-column prop="ID" label="ID" width="180"></el-table-column>
                <el-table-column prop="Name" label="宿舍楼"> </el-table-column>

                <el-table-column fixed="right" label="操作">
                    <template slot-scope="scope">
                        <el-button type="text" @click="editer(scope.row.Name)" size="small">查看宿舍</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-main>
    </el-container>
</template>
<script>
import buildingData from '@/data/building'
export default {
    data(){
        return {
            tableData: buildingData,
            tableDataIndex: 0,
        }
    },
    methods: {

        editer(dept){
            this.$router.push({name: 'dormitory', query: {dept: dept}})
        },
    },
    created(){
        // this.getList()
    }
}
</script>
