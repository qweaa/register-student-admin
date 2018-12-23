<template>
    <div class="container">
        <p>教师列表</p>
    </div>
</template>
<script>
export default {
    data(){
        return {

        }
    },
    methods: {
        getList(){
            this.$api.getTeacherList().then(data=>{
                console.log(data)
            })
        }
    },
    created(){
        // this.getList()
        console.log(this.$api)
    }
}
</script>

