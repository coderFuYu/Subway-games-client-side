import {request} from "./request";

export function getMallData(page) {
  return request({
    url: '/store/propGoods',
    data:{
      'page':page,
      'pageSize':4
    }
  })
}export function buyProp(id) {
  return request({
    url: '/store/propBuy',
    data:{
      'propId':id,
      'amount':1
    }
  })
}
