<template>
  <div class="router">
    <div class="top">
      <div class="add">
        <slot name="add"></slot>
      </div>
      <p class="itemName">{{title}}</p>
      <div class="back" @touchstart.prevent="" @touchend.prevent="$emit('back-click')" ></div>
    </div>
    <slot name="content">

    </slot>
  </div>
</template>

<script>

  export default {
    name: "ViewSpace",
    props:{
      title:String
    },
  }
</script>

<style scoped>
  .router {
    width: 9rem;
    height: 14rem;
    position: absolute;
    top: 50%;
    left: 50%;
    background-color: #0EBF8D;
    overflow-x: hidden;
    overflow-y: scroll;
    margin-left: -4.5rem;
    margin-top: -8rem;
    z-index: 5;
    border-radius: 0.5rem;
    border: 1px solid #333;
    box-sizing: border-box;
  }
  .top{
    height:2rem;
    background-color: #B1EBB3;
    position: fixed;
    width: 9rem;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    text-align: center;
    color: white;
    font-size: 18px;
  }
  .add{
    width: 1rem;
    height: 1rem;
    position: absolute;
    top: 0.5rem;
    left: 0.5rem;
  }
  .add img{
    width: 1rem;
    height: 1rem;
  }
  .back{
    width: 1rem;
    height: 1rem;
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    background-image: url(../../../assets/img/template/back.png);
    background-size: cover;
  }
  .itemName{
    display: inline-block;
    line-height: 2rem;
    font-size: 20px;
  }
</style>
