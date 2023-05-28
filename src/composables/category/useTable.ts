import { ListCategotyParm } from "@/api/category/CategoryModel";
import { reactive ,ref , onMounted ,nextTick} from "vue";
import {getListApi} from '@/api/category/index'

export default function useTable(){
//列表查询的参数
const listParm = reactive<ListCategotyParm>({
            categoryName:'',
            currentPage:1,
            pageSize:10,
            total:0
        })

      

        const tableList=ref([])

        //表格高度
        const tableHeight = ref(0)

        //列表查询
        const getList = async()=>{
            let res=await getListApi(listParm)
            if(res && res.code==200){
                tableList.value=res.data.records
                 listParm.total=res.data.total
            }
        }

        //搜索
        const searchBtn = ()=>{
            getList()
        }

        //重置
        const resetBtn = ()=>{
            listParm.currentPage=1
            listParm.categoryName=''
            getList()
        }

        //页容量改变时触发
        const sizeChange=(size:number)=>{
            listParm.pageSize=size;
            getList()
        }

        const currentChange=(current:number)=>{
            listParm.currentPage=current
            getList()
        }

        onMounted(()=>{
            getList()
            nextTick(()=>{
                tableHeight.value = window.innerHeight - 210
            })
        })

        return{
        listParm,
        getList,
        searchBtn,
        resetBtn,
        tableList,
        sizeChange,
        currentChange,
        tableHeight
   }
}

