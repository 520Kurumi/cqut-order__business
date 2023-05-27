<template>
    <div>
        <el-button type="primary" size="default" @click="onShow">新增</el-button>
    </div>

    <SysDialog
     :visible="dialog.visible"
     :title="dialog.title"
     :width="dialog.width"
     @onClose="onClose"
     @onConfirm="onConfirm"
    >
        <template #content>弹窗测试</template>
    </SysDialog>

</template>

<script setup lang="ts">
import SysDialog from "@/components/SysDialog.vue";
import useDialog from "@/hooks/useDialog";
const { dialog, onClose, onConfirm, onShow } = useDialog();
</script>

<style lang="scss" scoped>

</style>