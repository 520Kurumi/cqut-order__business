import {deleteApi} from '@/api/category'
import { CategoryModel } from "@/api/category/CategoryModel"
import { ref } from "vue"
import {EditType} from '@/type/BaseType'
import useInstance from '@/hooks/useInstance'
import { ElMessage } from "element-plus"
export default function useCategory(getList:FuncList){
    const addRef = ref<{show:(type:string,row?:CategoryModel)=>void}>()
    const {global} =useInstance()
    //新增
    const addBtn = ()=>{
         addRef.value?.show(EditType.ADD)
    }

    //编辑
    const editBtn = (row:CategoryModel)=>{
        addRef.value?.show(EditType.EDIT,row)
    }

    //删除
    const deleteBtn = async(row:CategoryModel)=>{
        const confirm = await global.$myconfirm('确定删除该数据吗?')
            if(confirm){
                let res = await deleteApi(row.categoryId)
                if(res && res.code == 200){
                    ElMessage.success(res.msg)
                    //刷新列表
                    getList()
                }
            }
    }

    return{
        addBtn,
        editBtn,
        deleteBtn,
        addRef
    }
}