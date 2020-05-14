import {request} from "./request";


export function getMailList(page) {
  return request({
    url: '/mailBox/mailList',
    data:{
      'page':page,
      'pageSize':'20',
    }
  })
}export function readMail(id) {
  return request({
    url: '/mailBox/rewardGet',
    data: {
      "mailId":id
    }
  })
}export function deleteAlready() {
  return request({
    url: '/mailBox/deleteMail',
  })
}
