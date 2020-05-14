<template>
  <div class="gameItem" @click="toGame()">
    <div class="background">
      <slot name="background"></slot>
    </div>
    <p>{{title}}</p>
  </div>
</template>

<script>
  export default {
    name: "GameItem",
    props: {
      path: String,
      title: String
    },
    methods:{
      toGame(){
        this.$router.push(this.path);
      }
    }
  }
</script>

<style scoped>
  .gameItem {
    width: 4.45rem;
    height: 6.3rem;
    box-sizing: border-box;
    position: relative;
    margin-top: 5px;
    background-color: #fff;
  }
  .gameItem p{
    display: inline-block;
    width: 4.45rem;
    height: 0.5rem;
    line-height: 0.5rem;
    position: absolute;
    bottom:  0;
    z-index: 1;
    text-align: center;
  }
  .background{
    width: 4.45rem;
    height: 5.8rem;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }
  .background div{
    width: 4.45rem;
    height: 5.8rem;
    position: absolute;
    top: 0;
    left: 0;
  }

</style>
