import {request} from "./request";

export function getGameWorldRankData(id) {
  return request({
    url: '/game/worldRank',
    data:{
      'gameId':id,
      'page':1,
      'pageSize':10
    }
  })
}export function getWorldRankData(id) {
  return request({
    url: '/user/worldRank',
    data:{
      'gameId':id,
      'page':1,
      'pageSize':10
    }
  })
}
