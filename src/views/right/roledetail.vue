<style scoped>
.detail{line-height: 30px; max-width: 600px;}
.text-center{text-align: center;}
.mar-top60{margin-top: 60px;}
</style>
<template>
    <div>
        <div class="detail" v-if="role">
            <div>角色名：{{role.roleName}}</div>
            <div>权限：</div>
            <div>
                <!-- <el-tag v-for="(v, i) in rightList" :key="i" closable @close="delRight">{{v.workName}}</el-tag> -->
                <el-tag v-for="(v, i) in rightList" :key="i" closable @close="delRight">{{v.workId}}</el-tag>
            </div>
            <div class="text-center mar-top60">
                <el-button size="mini" @click="addRight" type="primary">添加权限</el-button>
            </div>
        </div>
        <div v-else>
            <p>页面错误</p>
        </div>
        <el-dialog title="添加权限" :visible.sync="dialogVisible" width="600px">
            <div>
                <el-checkbox-group v-model="selectRightList">
                    <el-checkbox :disabled="v.disable" v-for="(v, i) in allRightList" :key="i" :label="v.workName"></el-checkbox>
                </el-checkbox-group>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button size="mini" @click="dialogVisible = false">取 消</el-button>
                <el-button size="mini" type="primary" @click="submitAdd">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
import {getAllPermission, getWorksByRoleId} from '@/api/work'
export default {
    data(){
        return {
            localStorageName: 'roleDetail',
            role: '',
            rightList: [],
            allRightList: [],
            dialogVisible: false,

            selectRightList: [],
        }
    },
    methods: {
        delRight(value){
            console.log(value)
        },
        addRight(){
            getAllPermission().then(data=>{
                let r = []
                let has = []
                for(let i of this.rightList){
                    has.push(i.workId)
                }
                data.data.map(v=>{
                    v.disable = has.includes(v.workId)
                    r.push(v)
                })
                this.allRightList = r
                this.dialogVisible = true
            })
        },
        submitAdd(){
            console.log(this.selectRightList)
        }
    },
    created(){
        if(localStorage.getItem(this.localStorageName)){
            this.role = JSON.parse(localStorage.getItem(this.localStorageName))
            getWorksByRoleId(this.role.roleId).then(data=>{
                this.rightList = data.data
            })
        }else{
            this.$message({
                type: 'warning',
                message: '网页错误'
            })
        }
    },
    beforeRouteLeave (to, from, next){
        localStorage.removeItem(this.localStorageName)
        next()
    }
}
</script>
