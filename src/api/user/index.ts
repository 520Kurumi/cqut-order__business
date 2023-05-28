import http from "@/http";
import { UserModel,ListUserParm } from "./UserModel";
//新增
export const addUserApi = (parm:UserModel)=>{
    return http.post("/api/user",parm)
}

export const getListApi=(parm:ListUserParm)=>{
    return http.get('/api/user/list',parm)
}

//编辑
export const editUserApi = (parm:UserModel)=>{
    return http.put("/api/user",parm)
}

//删除
export const deleteUserApi = (userId:string)=>{
    return http.delete(`/api/user/${userId}`)
}