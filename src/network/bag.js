import {request} from "./request";

export function getBagData() {
  return request({
    url: '/package/propList',
  })
}

export function useTool(id) {
  return request({
    url: '/package//useProp',
    data: {
      'propId': id
    }
  })
}
