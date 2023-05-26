<template>
    <div>
        <el-dropdown>
    <span class="el-dropdown-link">
        <img src="@/assets/user.jpg"  class="uimage" >
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
    .uimage{
        width: 45px;
        height: 45px;
        border-radius: 50%;
        cursor: pointer;
    }
</style>