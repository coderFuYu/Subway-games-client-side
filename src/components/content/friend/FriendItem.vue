<template>
  <div class="friendItem">

    <div class="headSpace"><img :src="img" alt=""></div>
    <div class="passage">
      <p class="name">{{name}}</p>
      <p class="level">Lv:{{level}}</p>
      <a><img src="../../../assets/img/template/sendWorkpiece.png" @click="send(id)"/></a>
      <a v-if="canSteal==='0'" @click="steal(id)"><img
              src="../../../assets/img/template/hand.png"/></a>
    </div>
  </div>
</template>


<script>
  import {stealFriendWorkpiece} from "network/friend";
  import {sendFriendWorkpiece} from "network/friend";

  export default {
    name: "FriendItem",
    props: {
      link: String,
      name: String,
      level: Number,
      img: String,
      id: String,
      canSteal: String
    },
    methods: {
      steal(id) {
        stealFriendWorkpiece(id).then(
            res => {
              this.$store.commit('refresh');
              if (res.result === 'success') {
                this.$emit('steal', '偷取成功')
              } else {
                this.$emit('steal', '偷取失败')
              }
            }
        )
      },
      send(id) {
        sendFriendWorkpiece(id).then(res => {
          this.$store.commit('refresh');
          if (res.result === 'success') {
            this.$emit('send', '赠送成功')
          } else {
            this.$emit('send', '赠送失败')
          }
        })
      }
    }
  }
</script>

<style scoped>
  .friendItem {
    display: inline-block;
    width: 9rem;
    height: 3rem;
    background-color: rgba(255, 255, 255, 0.3);
    border-bottom: 1px solid #666666;
  }

  .headSpace {
    width: 2rem;
    height: 2rem;
    float: left;
    margin-left: 0.3rem;
    margin-top: 0.5rem;
    border-radius: 1rem;
    overflow: hidden;
  }

  .headSpace img {
    width: 2rem;
    height: 2rem;
  }

  .passage {
    width: 5.8rem;
    height: 2rem;
    float: right;
    margin-right: 0.5rem;
    color: black;
    font-size: 0.5rem;
  }

  .name {
    float: left;
    line-height: 3rem;
  }

  a {
    display: inline-block;
    float: right;
    margin-right: 0.3rem;
    margin-top: 1rem;

  }

  a img {
    width: 1rem;
    height: 1rem;
  }

  .level {
    float: right;
    line-height: 3rem;

  }
</style>
