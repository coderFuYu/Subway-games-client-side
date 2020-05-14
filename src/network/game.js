import {request} from "./request";

export function sendGameScore(gameId, score) {
  return request({
    url: '/game/score',
    data: {
      'score': score,
      'gameId': gameId
    }
  })
}
export function getWorldRank(gameId) {
  return request({
    url: '/game/worldRank',
    data: {
      'gameId':gameId,
      "page":1,
      "pageSize":5
    }
  })
}
export function getFriendRank(gameId) {
  return request({
    url: '/game/friendRank',
    data: {
      'gameId':gameId,
      "page":1,
      "pageSize":5
    }
  })
}
