<template>
  <div>
  <MenuLogo></MenuLogo>
  <el-menu
background-color="#304156"
:default-active="activeRoute"
class="el-menu-vertical-demo"
router  
:collapse="collapse"
> 
<!-- router:是否启用 vue-router 模式。 用该模式会在激活导航时以 index 作为 path 进行路由跳转 -->

<el-menu-item index="/dashboard">
      <el-icon><Menu></Menu></el-icon>
      <template #title>首页</template>
  </el-menu-item>

  <el-menu-item index="/user">
      <el-icon><Menu></Menu></el-icon>
      <template #title>用户管理</template>
  </el-menu-item>

  <el-menu-item index="/category">
    <el-icon><Menu></Menu></el-icon>
    <template #title>菜品分类</template>
  </el-menu-item>

  <el-menu-item index="/goods">
      <el-icon><Memo></Memo></el-icon>
      <template #title>菜品管理</template>
  </el-menu-item>

<el-menu-item index="/order">
    <el-icon><Monitor></Monitor></el-icon>
    <template #title>订单管理</template>
</el-menu-item>

<el-menu-item index="/banner">
    <el-icon><Calendar></Calendar></el-icon>
    <template #title>广告管理</template>
</el-menu-item>

    <el-menu-item index="/comment">
        <el-icon><Edit></Edit></el-icon>
        <template #title>评论管理</template>
    </el-menu-item>

  </el-menu>
</div> 
</template>

<script setup lang="ts">
  import {  Menu, Memo, Monitor, Calendar, Edit } from "@element-plus/icons-vue";
  import MenuLogo from '@/layout/MenuLogo.vue'
  import {computed} from 'vue' //导入计算属性，页面初始化时： 会执行一次computed
  import {useRoute} from 'vue-router' 
  import {collapseStore} from '@/store/collapse/index' //获取store
  const store=collapseStore()
  const collapse=computed(()=>{
    return store.getCollapse
  })
  const route =useRoute() //获取当前路由
  const activeRoute = computed(()=>{
    const {path} = route  //解构
    return path    //获取当前路由地址,用来解决刷新页面后，is-active无设置状态，故需要获取激活选项
  })
</script>

<style lang="scss" scoped>

.el-menu-vertical-demo{
  height: 100%;
 border-right: none;
}

div {
  overflow: hidden;
  height: 100%; //去除
}
.el-menu .el-menu-item {
    color: #bfcbd9; //字体颜色
    font-size: 15px;   //字体的大小
    font-weight: bold;  //加粗
}
.el-menu-item.is-active {
    color: #409eff ;  //选中后
    background-color: #1f2d3d ;  
}
/* 鼠标移动菜单的颜色 */
:deep(.el-menu-item:hover) {
  background-color: #001528 ;
}
</style>