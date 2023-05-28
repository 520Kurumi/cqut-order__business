//定义列表查询的数据类型
//type:通常用于定义数据的类型
export type ListUserParm = {
    currentPage:number;
    pageSize:number;
    name:string;
    phone:string;
    total:number; //分页总条数
}

export type UserModel={
    userId:string,
    username: string,
    password: string,
    phone: string,
    email: string,
    sex: string,
    name: string,
    type:string //区分新增还是编辑
}