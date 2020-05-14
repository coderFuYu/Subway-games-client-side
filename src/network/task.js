import {request} from "./request";

export function getTaskList() {
  return request({
    url: '/task/taskList'
  })
}export function taskReceive(id) {
  return request({
    url: '/user/taskFinish',
    data:{
      'taskId':id
    }
  })
}
