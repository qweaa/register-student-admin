<style scoped>
.mytable{height: 100%; border: 1px solid #ccc; border-collapse:collapse; width: 1000px; font-size: 14px;}
.mytable td{width: 50px; text-align: center;}
</style>
<style>
.el-input__inner{border: none;}
</style>

<template>
    <el-container>
        <el-main>
            <div>国家组学贷款申请表</div>
            <table class="mytable" border="1" cellspacing="0">
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                        <td>6</td>
                        <td>7</td>
                        <td>8</td>
                        <td>9</td>
                        <td>10</td>

                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                        <td>6</td>
                        <td>7</td>
                        <td>8</td>
                        <td>9</td>
                        <td>10</td>
                    </tr>
                    <tr>
                        <td colspan="3">借款人姓名</td>
                        <td colspan="5">
                            <el-input v-model="form.name"></el-input>
                        </td>
                        <td colspan="2">性别</td>
                        <td colspan="4">
                            <el-radio-group v-model="form.sex">
                                <el-radio label="男">男</el-radio>
                                <el-radio label="女">女</el-radio>
                            </el-radio-group>
                        </td>
                        <td colspan="2">出生年月</td>
                        <td colspan="4">
                            <el-date-picker v-model="form.birth" type="date"></el-date-picker>
                        </td>
                    </tr>
                    <tr>
                        <td>学院</td>
                        <td colspan="5">
                            <el-input v-model="form.school"></el-input>
                        </td>
                        <td>专业</td>
                        <td colspan="6">
                            <el-input v-model="form.specialty"></el-input>
                        </td>
                        <td>学制</td>
                        <td colspan="2">
                            <el-input v-model="form.specialty" type="number"></el-input>
                        </td>
                        <td>学号</td>
                        <td colspan="3">
                            <el-input v-model="form.studentId" type="number"></el-input>
                        </td>
                    </tr>
                    <!-- 第三行 -->
                    <tr>
                        <td colspan="3">户籍所在地</td>
                        <td colspan="11">
                            <el-input v-model="form.auditopinion"></el-input>
                        </td>
                        <td colspan="3">邮政编码</td>
                        <td colspan="3">
                            <el-input v-model="form.postalcode1"></el-input>
                        </td>
                    </tr>
                    <!-- 第四行 -->
                    <tr>
                        <td colspan="3">家庭居住地</td>
                        <td colspan="11">
                            <el-input v-model="form.domicile"></el-input>
                        </td>
                        <td colspan="3">邮政编码</td>
                        <td colspan="3">
                            <el-input v-model="form.postalcode2"></el-input>
                        </td>
                    </tr>
                    <!-- 第五行 -->
                    <tr>
                        <td colspan="3">家庭居住地</td>
                        <td colspan="11">
                            <el-input v-model="form.domicile"></el-input>
                        </td>
                        <td colspan="3">邮政编码</td>
                        <td colspan="3">
                            <el-input v-model="form.postalcode2"></el-input>
                        </td>
                    </tr>
                </tbody>
            </table>
        </el-main>
    </el-container>
</template>
<script>
export default {
    data(){
        return {
            form: {
                sex: '男',
                name: '',
                birth: '',

                school: '',         //学院
                specialty: '',      //专业
                years: '',          //学制
                studentId: '',      //学号

                auditopinion: '',   //不知道是不是户籍地址
                postalcode1: '',    //户籍所在地邮政编码

                domicile: '',       //家庭居住地
                postalcode2: '',    //家庭居住地邮政编码
            }
        }
    }
}
</script>
