<template>
  <div class="detailView">
    <div class="top">
      <p class="itemName">{{summary}}</p>
      <img class="back" src="~assets/img/template/back.png" @click.stop="$emit('btn-click')">
    </div>
    <div class="detail"><p>{{detail}}</p></div>
  </div>
</template>

<script>
  export default {
    name: "Detail",
    props:{
      detail:String,
      summary:String
    }
  }
</script>

<style scoped>
  .detailView {
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
    z-index: 6;
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
  .detail{
    width: 7rem;
    height: 9rem;
    margin-top: 3rem;
    margin-left: 1rem;
    background-color: rgba(255,255,255,0.3);
    color: black;
    font-size: 0.5rem;
    text-indent: 2em;
  }
</style>
