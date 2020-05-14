import {request} from "./request";

export function getFriendData(page) {
  return request({
    url: '/friend/friendList',
    data: {
      'page': page,
      'pageSize': '10',
    }
  })
}

export function stealFriendWorkpiece(friendId) {
  return request({
    url: '/friend/steal',
    data: {
      'friendId': friendId
    }
  })
}

export function sendFriendWorkpiece(friendId) {
  return request({
    url: '/friend/sendPart',
    data: {
      'friendId': friendId,
      'partAmount': 1
    }
  })
}

export function getFriendRequest() {
  return request({
    url: '/friend/requestList',
    data: {
      'page': 1,
      'pageSize': 5
    }
  })
}
export function makeFriend(id) {
  return request({
    url: '/friend/makeFriends',
    data: {
      'friendId': id
    }
  })
}

export function handleFriendRequest(id,result) {
  return request({
    url: '/friend/requestHandle',
    data: {
      'id': id,
      'requestResult':result
    }
  })
}
