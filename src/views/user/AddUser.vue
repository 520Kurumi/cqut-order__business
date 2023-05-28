<template>

   <SysDialog
     :visible="dialog.visible"
     :title="dialog.title"
     :width="dialog.width"
     @onClose="onClose"
     @onConfirm="commit"
   >
   <template #content>

    <el-form :model="addModel" 
    ref="addFormRef" 
    :rules="rules" 
    label-width="80px" 
    :inline="false" 
    size="default"
    >

        <el-row :gutter="20">
            <el-col :span="12" :offset="0">
                <el-form-item label="姓名" prop="name">
                      <el-input v-model="addModel.name"></el-input>
                 </el-form-item>
            </el-col>

            <el-col :span="12" :offset="0">
                <el-form-item prop="sex" label="性别">
                    <el-radio-group v-model="addModel.sex">
                        <el-radio :label="'0'">男</el-radio>
                        <el-radio :label="'1'">女</el-radio>
                    </el-radio-group>
               </el-form-item>
            </el-col>


            <el-col :span="12" :offset="0">
                <el-form-item label="电话" prop="phone">
                      <el-input v-model="addModel.phone"></el-input>
                 </el-form-item>
            </el-col>

            <el-col :span="12" :offset="0">
                <el-form-item label="邮箱" prop="email">
                      <el-input v-model="addModel.email"></el-input>
                 </el-form-item>
            </el-col>

            <el-col :span="12" :offset="0">
                <el-form-item label="账户" prop="username">
                      <el-input v-model="addModel.username"></el-input>
                 </el-form-item>
            </el-col>

            <el-col :span="12" :offset="0">
                <el-form-item label="密码" prop="password">
                      <el-input type="password" v-model="addModel.password"></el-input>
                 </el-form-item>
            </el-col>

        </el-row>
        

    </el-form>
   </template>
</SysDialog>

</template>

<script setup lang="ts">
  import {addUserApi,deleteUserApi,editUserApi} from '@/api/user/index'
  import SysDialog from '@/components/SysDialog.vue'
  import useDialog from "@/hooks/useDialog";
  import {reactive, ref, nextTick} from 'vue'
  import { UserModel } from "@/api/user/UserModel";
  import { FormInstance } from "element-plus";
  import { EditType, Title } from "@/type/BaseType";
  import { ElMessage } from 'element-plus';


  const { dialog, onClose, onConfirm, onShow } = useDialog();
  const show=(type:string,row?:UserModel)=>{
    //设置弹框的标题
    type == EditType.ADD ? dialog.title = Title.ADD : dialog.title = Title.EDIT
    dialog.visible=true
    dialog.height=400

    //传递了row，说明是编辑，
    //编辑回显数据
        if(row){
            nextTick(()=>{
            Object.assign(addModel,row)
            })
        }
    addFormRef.value?.resetFields()
    addModel.type = type;
    
  }

  const addFormRef = ref<FormInstance>();

  //暴露给父组件调用
  defineExpose({ 
    show
  })


 const addModel = reactive<UserModel>({
    userId: "",
    username: "",
    password: "",
    phone: "",
    email: "",
    sex: "",
    name: "",
    type:""
});

const rules = reactive({
    name: [
        {
        required: true,
        message: "请输入姓名",
        trigger: "blur",
        },
    ],
    sex: [
        {
        required: true,
        message: "请选择性别",
        trigger: "blur",
        },
    ],
    phone: [
        {
        required: true,
        message: "请输入电话",
        trigger: "blur",
        },
    ],
    username: [
        {
        required: true,
        message: "请输入账户",
        trigger: "blur",
        },
    ],
    password: [
    {
        required: true,
        message: "请输入密码",
        trigger: "blur",
        },
    ]
});

//注册事件
const emists = defineEmits(['onFresh'])

//表单提交
const commit = ()=>{
    addFormRef.value?.validate(async(valid: any)=>{
        if(valid){
         let res; 
           if(addModel.type==EditType.ADD){
                res=await addUserApi(addModel)
           }else{
                res=await editUserApi(addModel)
           }  

          if(res && res.code==200){
            ElMessage.success(res.msg)
            emists('onFresh')
            onClose()
          }

        }
    })
}

</script>

<style scoped>

</style>