<template>
  <div>
    <FriendItem v-for="item in friendData" :id="item.id" :name="item.userName" :img="item.userPicture" :level="item.userLevel"
                :key="item.name" :canSteal="item.canSteal" @send="send" @steal="steal" @refresh="$emit('refresh')"/>
    <UseResult v-if="useShow" :result="useResult" :title="'使用结果'" @exit="useShow=false"/>
  </div>
</template>

<script>
  import FriendItem from "./FriendItem";
  import UseResult from "../../common/result/UseResult";
  export default {
    name: "FriendList",
    data(){
      return{
        useShow: false,
        useResult: String,
        useType:String
      }
    },
    components:{
      FriendItem,
      UseResult
    },
    props:{
     friendData:{type:Array}
    },
    methods:{
      send(message){
        this.useType='赠送结果';
        this.useShow=true;
        this.useResult=message;
      },
      steal(message){
        this.useType='偷取结果';
        this.useShow=true;
        this.useResult=message;
      },
    }
  }
</script>

<style scoped>

</style>
