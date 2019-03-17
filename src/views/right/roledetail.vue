<style scoped>
.detail{line-height: 30px; max-width: 600px;}
.text-center{text-align: center;}
.mar-top60{margin-top: 60px;}
.mar-top30{margin-top: 30px;}
.mar-right10{margin-right: 10px;}

.right_item{margin: 10px; display: inline-block;}
</style>
<template>
    <div>
        <div class="detail" v-if="role">
            <div>
                <span class="mar-right10">角色名：{{role.roleName}}</span>
                <span>
                    <el-button type="primary" size="mini" @click="update">编辑</el-button>
                </span>
            </div>
            <div class="mar-top30">权限：</div>
            <div v-if="rightList && rightList.length">
                <!-- <el-tag v-for="(v, i) in rightList" :key="i" closable @close="delRight">{{v.workName}}</el-tag> -->
                <el-tag class="right_item" v-for="(v, i) in rightList" :key="i" closable @close="delRight(i)">{{v.workName}}</el-tag>
            </div>
            <div v-else>
                <p class="color-gray">未添加任何权限</p>
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
                    <span class="right_item" v-for="(v, i) in allRightList" :key="i">
                        <el-checkbox :disabled="v.disable" :label="v.workId">{{v.workName}}</el-checkbox>
                    </span>
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
import {getAllPermission, getWorksByRoleId, addPermissionForRole, delPermissionForRole} from '@/api/work'
import {updateRoleName, addWorksforRole} from  '@/api/role'
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
        //更新角色名
        update(){
            this.$prompt('请修改角色名', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                inputValue:  this.role.roleName,
            }).then(({ value }) => {
                if(!value){
                    this.$message({
                        type: 'warning',
                        message: '请填入角色名'
                    });
                }else{
                    updateRoleName({
                        roleId:  this.role.roleId,
                        roleName: value
                    }).then(data=>{
                        this.$message({
                            type: 'success',
                            message: '修改成功'
                        })
                        this.role.roleName = value
                        localStorage.setItem(this.localStorageName, JSON.stringify(this.role))
                    })
                }
            }).catch(() => {});
        },
        delRight(index){
            this.$confirm('是否需要删除该权限?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                delPermissionForRole({
                    workId: this.rightList[index].workId,
                    roleId: this.role.roleId,
                }).then(data=>{
                    this.$message({
                        type: 'success',
                        message: '删除成功',
                    })
                    // this.setAllRightDisable(this.rightList[index].workId, false)
                    this.selectRightList.splice(this.selectRightList.indexOf(this.rightList[index].workId), 1)
                    this.rightList.splice(index, 1)
                })
            }).catch(() => {});
            
        },
        addRight(){
            if(!this.allRightList || !this.allRightList.length){
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
            }else{
                let has = []
                for(let i of this.rightList){
                    has.push(i.workId)
                }
                this.allRightList.map(v=>{
                    v.disable = has.includes(v.workId)
                })
                this.dialogVisible = true
            }
        },
        submitAdd(){
            addWorksforRole({
                roleId: this.role.roleId,
                works: this.selectRightList.join(',')
            }).then(data=>{
                let r = []
                for(let i of this.selectRightList){
                    for(let j of this.allRightList){
                        if(i == j.workId) r.push(j)
                    }
                }
                this.rightList = r
                this.$message({
                    type: 'success',
                    message: '添加成功',
                })
                this.dialogVisible = false
            })
        },

        //根据权限id设置所有权限是否被选中
        setAllRightDisable(workId, disable){
            console.log('aaa', workId, disable)
            if(this.allRightList && this.allRightList.length){
                for(let i of this.allRightList){
                    if(i.workId == workId) i.disable = disable
                    break
                }
            }
        },
    },
    created(){
        if(localStorage.getItem(this.localStorageName)){
            this.role = JSON.parse(localStorage.getItem(this.localStorageName))
            getWorksByRoleId(this.role.roleId).then(data=>{
                this.rightList = data.data
                let l = []
                for(let i of data.data){
                    l.push(i.workId)
                }
                this.selectRightList = l
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
