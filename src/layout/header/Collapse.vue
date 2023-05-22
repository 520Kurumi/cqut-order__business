<template>
<el-icon :size="26" style="cursor: pointer;" @click="iconClick">
     <component :is="status? Expand:Fold"></component>
    </el-icon>
</template>

<script setup lang="ts">
   import {Expand} from '@element-plus/icons-vue'
   import {Fold} from '@element-plus/icons-vue'
   import {collapseStore} from '@/store/collapse/index'
    import {computed} from 'vue'

  const store=collapseStore()  //获取store
  const status=computed(()=>{  //获取状态,初始化 只执行一次
    return store.getCollapse
  })

 const iconClick=()=>{
    store.setCollapse(!store.collapse)
 }


</script>

<style lang="scss" scoped>
     
</style>