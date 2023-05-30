import http from "@/http";
import { OrderListParm } from "./OrderModel";
//列表
export const gePcOrdertListApi = (parm:OrderListParm)=>{
    return http.get("/wxapi/order/getPcOrderList",parm)
}


//发货
export const sendOrderApi = (orderId:string)=>{
    return http.put("/wxapi/order/sendOrder",{orderId:orderId})
}