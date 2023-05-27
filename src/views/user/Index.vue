<template>
    <el-main>
        <el-form :model="listParm"  label-width="80px" :inline="true" size="default">
            <el-form-item label="">
                <el-input v-model="listParm.name" placeholder="请输入姓名"></el-input>
            </el-form-item>
            <el-form-item label="">
                <el-input v-model="listParm.phone" placeholder="请输入电话"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button :icon="Search" @click="searchBtn">搜索</el-button>
                <el-button plain :icon="Close" type="danger" @click="resetBtn">重置</el-button>
                <el-button type="primary" :icon="Plus" @click="addBtn">新增</el-button>
            </el-form-item>
        </el-form>
    </el-main>
  <AddUser ref="addRef"></AddUser>
</template>

<script setup lang="ts">
    import  AddUser from './AddUser.vue'
    import {Search,Close,Plus} from '@element-plus/icons-vue'
    import useUserTable from "@/composables/user/useUserTable";
    import useUser from '@/composables/user/useUser';
    const  { listParm,getList,searchBtn,resetBtn } =useUserTable()
    const {addBtn,editBtn,deleteBtn,addRef} = useUser()

</script>

<style lang="scss" scoped>

</style>