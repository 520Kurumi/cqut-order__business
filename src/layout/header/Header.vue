<template>
    <div class="left-header">
     <Collapse></Collapse>
    </div>
      <LoginOut></LoginOut>   
</template>

<script setup lang="ts">
  import Collapse from './Collapse.vue'
  import LoginOut from './LoginOut.vue'
</script>

<style lang="scss" scoped>
  .left-header{
    display: flex;
    align-items: center;//垂直居中
 
  }
</style>