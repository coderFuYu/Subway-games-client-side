import {request} from "./request";

export function getHomeData() {
  return request({
    url: '/user/mainView'
  })
}export function harvestWorkpiece() {
  return request({
    url: '/user/harvest'
  })
}

