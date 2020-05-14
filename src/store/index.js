import Vue from 'vue'
import Vuex from 'vuex'
import {getHomeData} from "network/home"
import {getBagData} from "network/bag";
import {getMallData} from "network/mall"

let interval;
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username: String,
    level: 1,
    portrait_src: '',
    already: 0,
    workpiece: 0,
    taskReward: '1',
    notice: '1',
    mailbox: '1',
    newFriend: '1',
    transitionName: '',
    production: '0',
    newUser: '0',
    productionNum: 0,
    fileWall: '0',
    propNum: [0, 0, 0, 0, 0],
    restTime: 0,
    price: Array,
    hour: 0,
    minute: 0,
    second: 0
  },
  mutations: {
    refresh(state) {
      getHomeData().then(
          res => {
            window.clearInterval(interval);
            state.level = res.body.userLevel;
            state.restTime = res.body.restTime;
            state.portrait_src = res.body.userPicture;
            state.already = res.body.exp;
            state.workpiece = res.body.partAmount;
            state.username = res.body.userName;
            state.taskReward = res.body.taskReward;
            state.notice = res.body.note;
            state.mailbox = res.body.mail;
            state.newFriend = res.body.friendRequest;
            state.production = res.body.production;
            state.newUser = res.body.newUser;
            state.productionNum = res.body.productionNum;
            state.fileWall = res.body.fileWall;
            state.hour = parseInt(state.restTime / 3600);
            state.minute = parseInt(state.restTime / 60) % 60;
            state.second = state.restTime % 60;
            if (state.restTime !== 0) {
              interval = window.setInterval(() => {
                state.restTime--;
                state.hour = parseInt(state.restTime / 3600);
                state.minute = parseInt(state.restTime / 60) % 60;
                state.second = state.restTime % 60;
                if (state.restTime === 0) {
                  window.clearInterval(interval);
                }
              }, 1000)
            }
          }
      );
    },
  },
  actions: {},
  modules: {}
})
