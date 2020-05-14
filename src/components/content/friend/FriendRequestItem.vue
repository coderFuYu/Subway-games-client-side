<template>
  <div class="friendRequestItem">
    <img :src="img" alt="" class="head">
<!--    <div>-->
      <p class="name">{{name}}</p>
<!--      <p class="describe">{{describe}}</p>-->
<!--    </div>-->
    <img src="../../../assets/img/template/refuse.png" class="handleButton" @click="handle('1')"/>
    <img src="../../../assets/img/template/accept.png" class="handleButton" @click="handle('0')"/>
  </div>
</template>

<script>
  import {handleFriendRequest} from "network/friend";

  export default {
    name: "FriendRequestItem",
    props: {
      img: String,
      name: String,
      id: String,
    },
    methods: {
      handle(result){
        handleFriendRequest(this.id, result).then(
            res => {
              this.$store.commit('refresh');
              this.$emit('refresh');
            }
        )
      }
    }
  }
</script>

<style scoped>
  p {
    display: inline-block;
  }

  .friendRequestItem {
    width: 9rem;
    height: 3rem;
    background-color: rgba(255, 255, 255, 0.3);
    border-bottom: 1px solid #666666;
  }

  .head {
    width: 2rem;
    height: 2rem;
    float: left;
    margin-top: 0.5rem;
    margin-left: 0.2rem;
  }

  .name {
    line-height: 3rem;
    font-size: 0.5rem;
    float: left;
    margin-left: 0.5rem;
  }

  .handleButton {
    width: 1rem;
    height: 1rem;
    margin-top: 1rem;
    margin-right: 0.5rem;
    float: right;
  }

</style>
