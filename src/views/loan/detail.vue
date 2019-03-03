<style scoped>
.box{padding: 20px;}
.title{line-height: 60px; text-align: center; font-size: 16px; width: 1000px;}
.mytable{height: 100%; border: 1px solid #ccc; border-collapse:collapse; width: 1000px; font-size: 14px; line-height: 24px;}
.mytable td{width: 50px; text-align: center;}
.text-left{text-align: left !important;}
.text-center{text-align: center;}
.myInput{border-top: 0; border-left: 0; border-right: 0; outline: none; width: 40px;}

.submit_div{padding-top: 30px; padding-bottom: 30px; width: 1000px;}
</style>
<style>
.no_border .el-input__inner, .no_border .el-textarea__inner, .no_border .input__inner{border: none;}

.td_no_border td{border: 0;}

.input_text_center .el-input__inner{text-align: center;}
</style>

<template>
    <div class="box">
        <div class="title">国家组学贷款申请表</div>
        <table class="mytable" border="1" cellspacing="0">
            <tbody>
                <tr class="td_no_border" style="opacity: 0; border: 0;">
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
                        <el-input class="no_border" :size="inputSize" v-model="form.name"></el-input>
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
                        <el-date-picker class="no_border" :size="inputSize" v-model="form.birth" type="date"></el-date-picker>
                    </td>
                </tr>
                <tr>
                    <td>学院</td>
                    <td colspan="5">
                        <el-input class="no_border" :size="inputSize" v-model="form.school"></el-input>
                    </td>
                    <td>专业</td>
                    <td colspan="6">
                        <el-input class="no_border" :size="inputSize" v-model="form.specialty"></el-input>
                    </td>
                    <td>学制</td>
                    <td colspan="2">
                        <el-input class="no_border" :size="inputSize" v-model="form.specialty" type="number"></el-input>
                    </td>
                    <td>学号</td>
                    <td colspan="3">
                        <el-input class="no_border" :size="inputSize" v-model="form.studentId" type="number"></el-input>
                    </td>
                </tr>
                <!-- 第三行 -->
                <tr>
                    <td colspan="3">户籍所在地</td>
                    <td colspan="11">
                        <el-input class="no_border" :size="inputSize" v-model="form.auditopinion"></el-input>
                    </td>
                    <td colspan="3">邮政编码</td>
                    <td colspan="3">
                        <el-input class="no_border" :size="inputSize" v-model="form.postalcode1" type="number"></el-input>
                    </td>
                </tr>
                <!-- 第四行 -->
                <tr>
                    <td colspan="3">家庭居住地</td>
                    <td colspan="11">
                        <el-input class="no_border" :size="inputSize" v-model="form.domicile"></el-input>
                    </td>
                    <td colspan="3">邮政编码</td>
                    <td colspan="3">
                        <el-input class="no_border" :size="inputSize" v-model="form.postalcode2" type="number"></el-input>
                    </td>
                </tr>
                <!-- 第五行 -->
                <tr>
                    <td colspan="3">身份证号码</td>
                    <td colspan="11">
                        <el-input class="no_border" :size="inputSize" v-model="form.IDNumber" type="number"></el-input>
                    </td>
                    <td colspan="3">家庭电话</td>
                    <td colspan="3">
                        <el-input class="no_border" :size="inputSize" v-model="form.homephone" type="number"></el-input>
                    </td>
                </tr>
                <!-- 第六行 -->
                <tr>
                    <td colspan="3">家庭人口</td>
                    <td colspan="3">
                        <el-input class="no_border" :size="inputSize" v-model="form.familypopulation" type="number"></el-input>
                    </td>
                    <td colspan="3">家庭收入</td>
                    <td colspan="3">
                        <el-input class="no_border" :size="inputSize" v-model="form.monthlyincome" type="number"></el-input>
                    </td>
                    <td colspan="4">家庭人均月收入</td>
                    <td colspan="4">
                        <el-input class="no_border" :size="inputSize" v-model="form.percapitaincome" type="number"></el-input>
                    </td>
                </tr>
                <!-- 第七大行 -->
                <tr>
                    <td rowspan="6">
                        <div style="padding-left: 5px; padding-right: 5px;">家庭成员及其经济收入情况</div>
                    </td>
                    <td colspan="2">称谓</td>
                    <td colspan="2">姓名</td>
                    <td colspan="2">年龄</td>
                    <td colspan="3">身份证号码</td>
                    <td colspan="3">职业</td>
                    <td colspan="5">工作单位</td>
                    <td colspan="2">月收入</td>
                </tr>
                <tr v-for="(v, i) in form.economicconditionsJson" :key="i" class="input_text_center">
                    <td colspan="2">
                        <el-input class="no_border" :size="inputSize" v-model="v.appellation"></el-input>
                    </td>
                    <td colspan="2">
                        <el-input class="no_border" :size="inputSize" v-model="v.name"></el-input>
                    </td>
                    <td colspan="2">
                        <el-input class="no_border" :size="inputSize" v-model="v.age" type="number"></el-input>
                    </td>
                    <td colspan="3">
                        <el-input class="no_border" :size="inputSize" v-model="v.IDNumber" type="number"></el-input>
                    </td>
                    <td colspan="3">
                        <el-input class="no_border" :size="inputSize" v-model="v.job"></el-input>
                    </td>
                    <td colspan="5">
                        <el-input class="no_border" :size="inputSize" v-model="v.workplace"></el-input>
                    </td>
                    <td colspan="2">
                        <el-input class="no_border" :size="inputSize" v-model="v.monthlyIncome" type="number"></el-input>
                    </td>
                </tr>
                <!-- 第八行 -->
                <tr>
                    <td colspan="2">
                        <div style="padding-left: 15px; padding-right: 15px;">家庭经济困难概况</div>
                    </td>
                    <td colspan="18">
                        <el-input class="no_border" resize="none" type="textarea" rows="6" v-model="form.difficultsituation"></el-input>
                    </td>
                </tr>
                <!-- 第九行 -->
                <tr>
                    <td colspan="2">高考成绩</td>
                    <td colspan="18">
                        <el-input class="no_border" :size="inputSize" v-model="form.gaokao" type="number"></el-input>
                    </td>
                </tr>
                <!-- 第十行 -->
                <tr>
                    <td colspan="2">申请贷款类型</td>
                    <td colspan="18" class="text-left" style="padding-left: 15px;">
                        <el-radio-group v-model="form.loantype">
                            <el-radio label="学费贷款">学费贷款</el-radio>
                            <el-radio label="生活费贷款">生活费贷款</el-radio>
                        </el-radio-group>
                    </td>
                </tr>
                <!-- 第十一行 -->
                <tr>
                    <td colspan="2">申请贷款金额</td>
                    <td colspan="18">
                        <el-input class="no_border" type="textarea" :size="inputSize" resize="none" v-model="form.loanmoney" placeholder="按现行政策规定，学生通过申请国家助学贷款，每人每学年最高不超过600元贷款数额。"></el-input>
                    </td>
                </tr>
                <!-- 第十二行 -->
                <tr>
                    <td colspan="2">贷款期限</td>
                    <td colspan="18">
                        <el-input class="no_border" type="textarea" :size="inputSize" resize="none" v-model="form.loandeadline" placeholder="国家助学贷款的期限一般不超过八年。国家助学贷款利率按中国人民银行规定的同期利率执行，不上浮。现行年利率：三至五年（含）5.58%，五年以上：5.76%。"></el-input>
                    </td>
                </tr>
                <!-- 第十三行 loanyear -->
                <tr>
                    <td colspan="2">申请贷款年度</td>
                    <td colspan="18" class="text-left">
                        <el-input class="no_border" type="textarea" :size="inputSize" resize="none" v-model="form.loanyear" placeholder="申请贷款年度"></el-input>
                        <!-- <span>20</span>
                        <input class="myInput" :size="inputSize" v-model="form.homephone">
                        <span> - 20</span>
                        <input class="myInput" :size="inputSize" v-model="form.homephone">
                        <span>学年，</span>
                        <span style="padding-left: 20px;"></span>
                        <span>20</span>
                        <input class="myInput" :size="inputSize" v-model="form.homephone">
                        <span> - 20</span>
                        <input class="myInput" :size="inputSize" v-model="form.homephone">
                        <span>学年，</span>
                        <span style="padding-left: 20px;"></span> -->

                        <!-- <span>20</span>
                        <input class="myInput" :size="inputSize" v-model="form.homephone">
                        <span> - 20</span>
                        <input class="myInput" :size="inputSize" v-model="form.homephone">
                        <span>学年</span> -->

                        <!-- <el-date-picker class="no_border" :size="inputSize" v-model="value6" type="year" style="width: 100px;"></el-date-picker>
                        <span>年</span>
                        <span>-</span>
                        <el-date-picker class="no_border" :size="inputSize" v-model="value7" type="year" style="width: 100px;"></el-date-picker>
                        <span>年</span> -->
                    </td>
                </tr>
                <!-- 第十四行 -->
                <tr>
                    <td colspan="20" style="padding: 15px; line-height: 30px;">
                        <div class="text-left" style="text-indent: 2em;">本人保证以上填写内容真实无误，严格遵守国家，经办银行以及国家助学金贷款的各项规定，承诺正确使用所贷款项并按规定履行还款义务。</div>
                        <div class="text-right">
                            <span>借款申请人：</span>
                            <input class="myInput" :size="inputSize" style="width: 100px; text-align: center;" v-model="form.name">
                            <!-- <el-date-picker :size="inputSize" v-model="form.birth" type="date"></el-date-picker> -->
                        </div>
                    </td>
                </tr>
                <!-- 第十五行 -->
                <tr>
                    <td colspan="2">学院审核意见</td>
                    <td colspan="18">
                        <el-input class="no_border" type="textarea" :size="inputSize" resize="none" :rows="5" v-model="form.auditopinion"></el-input>
                    </td>
                </tr>
            </tbody>
        </table>
        <div class="submit_div">
            <el-radio-group v-model="form.loantype">
                <el-radio label="学费贷款">审核通过</el-radio>
                <el-radio label="生活费贷款">审核不通过</el-radio>
            </el-radio-group>
        </div>
        <div class="text-center submit_div">
            <el-button :size="inputSize" type="primary" @click="submit" v-if="!form.auditopinion">提交</el-button>
            <el-button :size="inputSize" type="primary" disabled v-else>已审核</el-button>
        </div>
        <div style="height: 100px;"></div>
    </div>
</template>
<script>
import {AuditingLoan} from '@/api/loan'
export default {
    data(){
        return {
            value6: '',
            value7: '',
            inputSize: 'mini',
            form: {
                id: '',

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

                IDNumber: '',       //身份证号码
                homephone: '',      //家庭电话

                economicconditions: '',     //家庭成员

                familypopulation: '',   //家庭人数
                monthlyincome: '',      //月收入
                percapitaincome: '',    //家庭人均月收入

                difficultsituation: '',     //家庭困难概况

                gaokao: '',         //高考成绩

                loantype: '',       //申请贷款类型

                loanmoney: '',      //申请贷款金额

                loandeadline: '',   //贷款期限

                loanyear: '',       //申请贷款年度

                auditopinion: '',   //学院意见

            }
        }
    },
    methods: {
        submit(){
            if(!this.form.auditopinion){
                this.$message({
                    type: 'warning',
                    message: '请填写学院审核意见'
                });
                return
            }

            AuditingLoan({
                id: this.form.id,
                auditopinion: this.form.auditopinion,
            }).then(data=>{
                this.$message({
                    type: 'success',
                    message: '审核成功'
                });
                console.log(data)
            })
        }
    },
    created(){
        let loanDetail = window.localStorage.getItem('loanDetail')

        if(loanDetail){
            loanDetail = JSON.parse(loanDetail)
            let economicconditions = JSON.parse(loanDetail.economicconditions)
            // loanDetail.economicconditionsJson = []
            // console.log(JSON.parse(loanDetail.economicconditions))
            // return
            loanDetail.economicconditionsJson = JSON.parse(JSON.stringify(economicconditions))
            for(let i=0; i<5; i++){
                if(!economicconditions[i]){
                    loanDetail.economicconditionsJson.push({
                        appellation: '',        //称谓
                        name: '',               //姓名
                        age: '',                //年龄
                        IDNumber: '',           //身份证
                        job: '',                //职位
                        workplace: '',          //工作单位
                        monthlyIncome: '',      //月收入
                    })
                }
            }
            console.log(loanDetail.economicconditionsJson)
            this.form = loanDetail
        }
    }
}
</script>
