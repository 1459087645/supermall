import {request} from "@/network/request";

export function getDetail(iid){
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}

//商品信息不在同一个数据列中，需要将不同列中的商品信息整和为一个对象
export class Goods{
  //构造器
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discount = itemInfo.discountDesc
    this.columns = columns
    this.services = services
    this.realPrice = itemInfo.lowNowPrice
  }
}
