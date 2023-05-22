<template>
 
      <el-container class="layout">    
        <el-aside :width="store.collapse?'64px':'200px'" class="asside"> 
          <Menu></Menu> 
        </el-aside>
        <el-container>
          <el-header class="header">
            <Header></Header>
          </el-header>

          <el-main class="main">
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-container>

  </template>

<script setup lang="ts">
  import Menu from './Menu.vue';
  import Header from './header/Header.vue'
   import {collapseStore} from '@/store/collapse/index'
   const store=collapseStore()

</script>

<style lang="scss">
.layout{
    height: 100%;
    // .asside {
    // background-color: blueviolet;
    // }
    .header {
    // background-color: chocolate;
      border-bottom: 1px solid #d8dce5;  //给底部加线
       display: flex;
       align-items: center; //垂直居中
       justify-content: space-between; //两端对齐主轴的起点与终点，项目之间的间隔都相等。
    }
    .main {
    // background-color: darkcyan;
    }

}
</style>