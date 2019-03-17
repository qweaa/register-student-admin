<template>
  <el-scrollbar wrap-class="scrollbar-wrapper">
    <el-menu
      :show-timeout="200"
      :default-active="$route.path"
      :collapse="isCollapse"
      mode="vertical"
      background-color="#304156"
      text-color="#bfcbd9"
      active-text-color="#409EFF"
    >
      <sidebar-item v-for="route in routes" :key="route.path" :item="route" :base-path="route.path"/>
    </el-menu>
  </el-scrollbar>
</template>

<script>
import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem'

export default {
  components: { SidebarItem },
  computed: {
    ...mapGetters([
      'sidebar'
    ]),
    routes() {
      let roles = this.$store.getters.roles
      let routess = this.$router.options.routes
      let result = []
      if(roles.length){       //是数组
        for(let j of routess){
          for(let i of roles){
            if(!j.name || i.workValue == j.name){
              result.push(j)
              break
            }
          }
        }
      }else{              //是对象
        for(let i of routess){
          if(!i.name || i.name == roles.workValue){
            result.push(i)
          }
        }
      }
      console.log('roles ', roles)
      console.log('result ', result)
      return result


      // return this.$router.options.routes
    },
    isCollapse() {
      return !this.sidebar.opened
    }
  }
}
</script>
