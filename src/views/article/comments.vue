<style lang="scss" scoped>
.box{max-width: 1000px;}

.post{line-height: 30px;}
.comment__item{margin-top: 15px; line-height: 30px;}
.conment_content{line-height: 30px;}
.comment__headImage{height: 30px; height: 30px; border-radius: 50%;}
.font-size14{font-size: 14px;}
.mar-right15{margin-right: 15px;}

.flex-end{display: flex; justify-content: flex-end;}
</style>
<template>
    <el-container>
        <el-main>
            <div class="box">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>{{postData.title}}</span>
                    </div>
                    <div class="post">
                        <div class="color-gray conment_content font-size14">
                            {{postData.content}}
                        </div>
                        <div class="color-gray font-size14 flex-end">
                            <img :src="postData.headImage" class="comment__headImage mar-right15" v-if="postData.headImage" alt="">
                            <span class="mar-right15" v-if="postData.poster">{{postData.poster}}</span>
                            <span v-if="postData.createTime">{{postData.createTime}}</span>
                        </div>
                    </div>
                </el-card>
                <template v-for="(item, index) in commentList">
                    <el-card class="comment__item" :key="index" shadow="hover">
                        <div class="color-gray conment_content font-size14">
                            {{item.replyContent}}
                        </div>
                        <div class="flex-end color-gray font-size14">
                            <img :src="item.headImage" class="comment__headImage mar-right15" v-if="item.headImage" alt="">
                            <span class="mar-right15" v-if="item.commentator">{{item.commentator}}</span>
                            <span v-if="item.replyTime">{{item.replyTime}}</span>
                        </div>
                    </el-card>
                </template>
            </div>
        </el-main>
    </el-container>
</template>
<script>
import {getReplyByPostid} from '@/api/post'
export default {
    data(){
        return{
            postData: '',
            commentList: []
        }
    },
    methods: {
        getList(id){
            getReplyByPostid(id).then(data=>{
                console.log(data)
                this.commentList = data.data
            })
        }
    },
    created(){
        if(this.$route.query.postid){
            this.getList(this.$route.query.postid)
        }
        if(window.localStorage.getItem('postData')){
            this.postData = JSON.parse(window.localStorage.getItem('postData'))
            console.log(this.postData)
        }
    }
}
</script>
