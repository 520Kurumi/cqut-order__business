<template>
    <el-breadcrumb separator="/" class="bred">
        <el-breadcrumb-item v-for="item in result">{{item}}</el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script setup>

import {watch,onMounted,ref} from 'vue'
import {useRoute} from 'vue-router' //获取当前路由
const route =useRoute() //监听当前路由
const result=ref([])

watch(
 ()=>route.path,
 ()=>getBredCrumb()
)

onMounted(()=>{
    getBredCrumb()
})

const getBredCrumb=()=>{
    result.value=[] //清空
    let match=route.matched.filter((item)=>item.meta&&item.meta.title)
    //找出有title的数据，去除home路径下的数据
    const first=match[0]
    result.value.push('首页')
    if(first.path!=='/dashboard'){ //若不是在首页
      result.value.push(first.meta.title)
    }
    
}



</script>

<style scoped>
    .bred {
        margin-left: 20px;
    }
</style>