<template>
  <div class="addFriend">
    <div class="top">
      <p class="itemName">添加好友</p>
      <img class="back" src="~assets/img/template/back.png" @click.stop="$emit('exit')">
    </div>
    <div class="body">
      <div class="addBox">
        <input type="text" v-model="addId" placeholder="请输入需要添加好友的Id" value=" ">
        <div class="addButton" @click="add()">添加</div>
      </div>
      <div class="requestList">
        <p v-if="requestData.length===0" style="margin-left: 1.25rem;">暂无好友请求</p>
        <div v-else>
          <FriendRequestItem v-for="item in requestData" :name="item.requestName" :id="item.id" :img="item.userPicture"
                             @refresh="$emit('refresh')" :key="item.id"/>
        </div>
      </div>
    </div>
    <UseResult v-if="resultShow" :title="title" :result="result" @exit="resultShow=false"/>
  </div>
</template>

<script>
  import {makeFriend,getFriendRequest} from "network/friend";
  import UseResult from "../../common/result/UseResult";
  import FriendRequestItem from "./FriendRequestItem";

  export default {
    name: "AddFriend",
    created() {
      this.getFriendRequestMethod();
    },
    data() {
      return {
        addId: '',
        title: '',
        result: '',
        resultShow: false,
        requestData:[]
      }
    },
    props: {
      friendRequestData: Array
    },
    components: {
      UseResult,
      FriendRequestItem
    },
    methods: {
      add() {
        if (this.addId !== '') {
          makeFriend(this.addId).then(
              res => {
                this.resultShow = true;
                this.addId = '';
                if (res.result === 'success') {
                  this.title = '好友请求';
                  this.result = '请求发送成功';
                } else {
                  this.title = '好友请求';
                  this.result = '请求发送失败';
                }
              }
          )
        }
      },
      getFriendRequestMethod(){
        getFriendRequest().then(
            res=>{
              console.log(res);
              this.requestData=res.body;
            }
        )
      }
    }
  }
</script>

<style scoped>
  input::-webkit-input-placeholder {
    font-size: 0.4rem;
  }

  .addFriend {
    width: 9rem;
    height: 14rem;
    position: fixed;
    top: 50%;
    left: 50%;
    background-color: #0EBF8D;
    overflow-x: hidden;
    overflow-y: scroll;
    margin-left: -4.5rem;
    margin-top: -8rem;
    border-radius: 0.5rem;
    border: 1px solid #333;
    box-sizing: border-box;
    z-index: 8;
  }

  .top {
    height: 2rem;
    background-color: #B1EBB3;
    position: fixed;
    width: 9rem;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    text-align: center;
    color: white;
    font-size: 18px;
  }

  .back {
    width: 1rem;
    height: 1rem;
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
  }

  .itemName {
    display: inline-block;
    line-height: 2rem;
    font-size: 20px;
  }

  .body {
    margin-top: 2rem;
    font-size: 0.5rem;
    position: relative;
  }

  .addBox {
    width: 7.5rem;
    font-size: 0.5rem;
    margin-left: 0.75rem;
    height: 1.5rem;
    line-height: 1.5rem;
    text-align: center;
  }

  .addBox input {
    width: 5rem;
    height: 0.8rem;
  }

  .addButton {
    display: inline-block;
    width: 1.5rem;
    height: 0.8rem;
    background-color: skyblue;
    font-size: 0.4rem;
    line-height: 0.8rem;
    float: right;
    margin-top: 0.35rem;
  }
</style>
