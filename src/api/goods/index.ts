import http from "@/http";
import { GoodsType,GoodsListParm } from "./GoodsModel";

//新增
export const addApi = (parm:GoodsType)=>{
    return http.post("/api/goods",parm)
}

//列表
export const getListApi = (parm:GoodsListParm)=>{
    return http.get("/api/goods/list",parm)
}