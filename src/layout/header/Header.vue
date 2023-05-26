<template>
    <div class="left-header">
     <Collapse></Collapse>
     <BC></BC>
    </div>
      <LoginOut></LoginOut>   
</template>

<script setup>
  import Collapse from './Collapse.vue'
  import LoginOut from './LoginOut.vue'
   import BC from './BredCrumb.vue'
</script>

<style lang="scss" scoped>
  .left-header{
    display: flex;
    align-items: center;//垂直居中
 
  }
</style>