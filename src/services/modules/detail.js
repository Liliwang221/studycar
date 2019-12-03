import request from "@/utils/index"
//获取首页品牌列表
export let getdetailList=()=>{
    return request("/v2-car-getInfoAndListById.html?SerialID="+2593)
}