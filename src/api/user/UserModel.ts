//定义列表查询的数据类型
//type:通常用于定义数据的类型
export type ListUserParm = {
    currentPage:number;
    pageSize:number;
    name:string;
    phone:string;
}

export type UserModel={
    userId:string,
    username: string,
    password: string,
    phone: string,
    email: string,
    sex: string,
    name: string,
}