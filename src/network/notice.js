import {request} from "./request";

export function getNoticeList(page) {
  return request({
    url: '/note/noteList',
    data:{
      'page':page,
      'pageSize':'10',
    }
  })
}export function readNotice(id) {
  return request({
    url: '/note/noteRead',
    data: {
      'noteId':id
    }
  })
}
