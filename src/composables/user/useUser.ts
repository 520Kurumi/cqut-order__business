import { ref } from 'vue'
//增删改的业务操作
export default function useUser(){
    //新增、编辑弹窗的ref属性
    const addRef=ref<{show:()=>void}>();
    
    //新增
    const addBtn = ()=>{
        addRef.value?.show()
    }

    //编辑
    const editBtn = ()=>{

    }

    //删除
    const deleteBtn = ()=>{

    }
        return{
        addBtn,
        editBtn,
        deleteBtn,
         addRef
        }
}